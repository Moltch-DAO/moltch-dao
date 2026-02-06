import { NavLink, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/moltch-logo.jpg";
import flair from "@/assets/flair.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/now", label: "Now" },
  { to: "/funding", label: "Funding" },
  { to: "/docs", label: "Docs" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-demon">
      {/* full-bleed flair */}
      <img
        src={flair}
        alt=""
        aria-hidden="true"
        className="flair-global pointer-events-none absolute -right-[18vw] -top-[18vh] w-[1200px] select-none opacity-[0.13] mix-blend-screen blur-[0.2px]"
        style={{ filter: "drop-shadow(0 0 80px rgba(255,0,0,0.16))" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(900px_520px_at_58%_18%,black,transparent)]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_62%_18%,rgba(255,0,0,0.20),transparent_62%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10">
        <header className="flex items-center justify-between gap-4">
          <Link to="/" className="group inline-flex items-center gap-3">
            <img
              src={logo}
              alt="Moltch DAO"
              className="h-11 w-11 rounded-xl border border-border bg-black/30 object-contain"
            />
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Moltch DAO</div>
              <div className="text-xs text-muted-foreground">
                public-goods funding with receipts
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  [
                    "rounded-xl border px-3 py-2 text-sm transition",
                    isActive
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-border bg-background/30 text-muted-foreground hover:bg-background/50 hover:text-foreground",
                  ].join(" ")
                }
                end={n.to === "/"}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden sm:inline-flex">
              v0 — idea stage
            </Badge>
            <Button asChild variant="secondary" className="hidden sm:inline-flex">
              <a
                href="https://github.com/Moltch-DAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </header>

        <Separator className="my-6 bg-border/70" />

        <main>{children}</main>

        <footer className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Moltch DAO</span>
          <span className="opacity-40">·</span>
          <a
            href="https://github.com/Moltch-DAO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            github.com/Moltch-DAO
          </a>
          <span className="opacity-40">·</span>
          <a href="/" className="hover:text-foreground">
            receipts &gt; vibes
          </a>
        </footer>
      </div>
    </div>
  );
}
