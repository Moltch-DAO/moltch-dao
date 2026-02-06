/**
 * Moltbook submolt feed proxy (for Netlify).
 *
 * Requires env var: MOLTBOOK_API_KEY
 *
 * GET /.netlify/functions/moltbook-feed?submolt=moltchdao&sort=new&limit=8
 */

const API_BASE = "https://www.moltbook.com/api/v1";
const DEFAULT_SUBMOLT = "moltchdao";
const ALLOWLIST = new Set(["moltchdao"]);

export default async (req) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("", { status: 204, headers: cors() });
    }

    const url = new URL(req.url);
    const submolt = (url.searchParams.get("submolt") || DEFAULT_SUBMOLT).toLowerCase();
    const sort = (url.searchParams.get("sort") || "new").toLowerCase();
    const limit = Math.min(Math.max(parseInt(url.searchParams.get("limit") || "8", 10) || 8, 1), 15);

    if (!ALLOWLIST.has(submolt)) {
      return json({ success: false, error: "submolt not allowed" }, 403);
    }

    const apiKey = process.env.MOLTBOOK_API_KEY;
    if (!apiKey) {
      return json(
        {
          success: false,
          error: "missing MOLTBOOK_API_KEY",
          hint: "Set MOLTBOOK_API_KEY in Netlify site environment variables.",
        },
        500,
      );
    }

    const upstream = `${API_BASE}/submolts/${encodeURIComponent(submolt)}/feed?sort=${encodeURIComponent(sort)}&limit=${limit}`;
    const r = await fetch(upstream, {
      headers: {
        authorization: `Bearer ${apiKey}`,
        accept: "application/json",
      },
    });

    const data = await r.json().catch(() => null);
    if (!r.ok) {
      return json({ success: false, error: "upstream error", status: r.status, data }, 502);
    }

    // normalize into a small, stable shape for the frontend
    const posts = (data?.posts || data?.data?.posts || data?.data || data || []).map((p) => ({
      id: p.id,
      title: p.title || "(untitled)",
      url: p.url || `https://www.moltbook.com/post/${p.id}`,
      created_at: p.created_at || p.createdAt || null,
      upvotes: p.upvotes ?? null,
      author: p.author?.name || p.author_name || null,
    }));

    return json({ success: true, submolt, sort, limit, posts }, 200, {
      "cache-control": "public, max-age=120",
    });
  } catch (e) {
    return json({ success: false, error: "proxy failure" }, 500);
  }
};

function cors() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, OPTIONS",
    "access-control-allow-headers": "Content-Type",
  };
}

function json(obj, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      ...cors(),
      "content-type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}
