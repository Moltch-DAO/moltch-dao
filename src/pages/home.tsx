import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { copyToClipboard } from "@/lib/copy";
// (flair is rendered globally in Shell)
import { useState } from "react";

const ETH = "0x5b6538104880C75c26EB12a9681BBa00529A1A3c";

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_22px_rgba(255,0,0,0.55)]" />
        <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{kicker}</span>
      </div>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {desc ? <p className="max-w-2xl text-muted-foreground">{desc}</p> : null}
    </div>
  );
}

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-background/35 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.75)] backdrop-blur sm:p-10">
        <div className="absolute inset-0 opacity-90 [mask-image:radial-gradient(650px_420px_at_30%_20%,black,transparent)]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_25%_20%,rgba(255,0,0,0.30),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,0,0,0.14),transparent_60%)]" />
        </div>

        {/* local flare layer (pairs with full-bleed background flair) */}
        <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(520px_340px_at_50%_20%,black,transparent)]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_55%_18%,rgba(255,0,0,0.22),transparent_62%)]" />
        </div>

        <div className="relative space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">v0 — idea stage</Badge>
            <Badge className="bg-primary/15 text-primary hover:bg-primary/20">receipt rule</Badge>
            <Badge variant="outline" className="border-primary/30 text-muted-foreground">offchain</Badge>
          </div>

          <h1 className="text-blood text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
            Public-goods funding
            <br />
            with receipts.
          </h1>

          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Moltch DAO is a blueprint for a single, brutal constraint: <span className="text-foreground">no funds without receipts</span>.
            Scope the work. Define “done means…”. Pay in tranches. Publish outcomes.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button asChild className="shadow-[0_0_35px_rgba(255,0,0,0.20)]">
              <a href="/docs">Read the rule</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/funding">How funding would work</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://github.com/Moltch-DAO" target="_blank" rel="noopener noreferrer">
                Explore on GitHub →
              </a>
            </Button>
          </div>

          <Separator className="bg-border/70" />

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Receipts > vibes.",
              "Outcomes > narratives.",
              "Small batches. Shipped often.",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-border bg-black/25 px-4 py-3 text-sm text-muted-foreground">
                <span className="text-foreground">▸</span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionTitle
            kicker="oath"
            title="Whom do you serve?"
            desc="Coordination failures eat the future. Moltch is a proposal to starve them: make spending legible, verifiable, and boring."
          />

          <div className="space-y-4 text-muted-foreground">
            <p>
              The enemy is not malice — it’s drift. Vague scope. Un-testable goals. Money released on vibes.
            </p>
            <p>
              So we impose a rule that forces clarity. If you can’t write receipts, you can’t receive funds.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild variant="secondary">
              <a href="/docs">Receipt Rule</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="/now">What’s happening now →</a>
            </Button>
          </div>
        </div>

        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-black">Tip jar (operator)</CardTitle>
            <CardDescription>Support the idea-stage work. No rights conferred.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-2xl border border-border bg-black/25 p-4">
              <div className="text-xs text-muted-foreground">ETH address</div>
              <div className="mt-2 font-mono text-sm break-all">{ETH}</div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={copied ? "secondary" : "default"}
                onClick={async () => {
                  const ok = await copyToClipboard(ETH);
                  if (!ok) return;
                  setCopied(true);
                  setTimeout(() => setCopied(false), 900);
                }}
              >
                {copied ? "Copied" : "Copy address"}
              </Button>
              <span className="text-xs text-muted-foreground">Checksum preserved.</span>
            </div>
            <p className="text-xs text-muted-foreground">Receipts where applicable. Not an investment.</p>
          </CardContent>
        </Card>
      </section>

      {/* PROCESS */}
      <section className="space-y-6">
        <SectionTitle
          kicker="method"
          title="The funding loop"
          desc="Four steps. Enforced. Repeatable. Auditable."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {[{
            n: "01",
            t: "Propose",
            d: "Public surface. Milestones. Acceptance tests. Budget. Conflicts.",
          }, {
            n: "02",
            t: "Fund in tranches",
            d: "Pay when milestones are met. Update scope before spending.",
          }, {
            n: "03",
            t: "Ship in public",
            d: "Progress stays legible. Links exist. Work is inspectable.",
          }, {
            n: "04",
            t: "Publish outcomes",
            d: "What shipped, what didn’t, spend summary, handoff, lessons learned.",
          }].map((s) => (
            <Card key={s.n} className="bg-background/40 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-black">{s.t}</CardTitle>
                  <span className="font-mono text-sm text-primary/90">{s.n}</span>
                </div>
                <CardDescription>{s.d}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  The point is to keep incentives aligned with delivery. If it can’t be verified, it can’t be funded.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-black">The Receipt Rule (minimum bar)</CardTitle>
            <CardDescription>Funding eligibility is binary: yes/no.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li><span className="text-foreground">Public work surface</span> (repo/issues or equivalent)</li>
              <li><span className="text-foreground">Milestones</span> (2–4 week scope; checkable steps)</li>
              <li><span className="text-foreground">Acceptance tests</span> (“done means…”)</li>
              <li><span className="text-foreground">Budget + schedule</span> (what unlocks payment)</li>
              <li><span className="text-foreground">Final report</span> with links (what shipped / didn’t)</li>
              <li><span className="text-foreground">Conflicts disclosed</span> up front</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-black">FAQ</CardTitle>
            <CardDescription>Anti-hype answers.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Does Moltch DAO exist?</AccordionTrigger>
                <AccordionContent>
                  Not in the “treasury/token” sense. It’s a scaffold: a rule, templates, and a process we can prove.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why copy Moloch vibes?</AccordionTrigger>
                <AccordionContent>
                  Because the aesthetic matches the problem: coordination failures are demons. Receipts are the blade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What gets funded?</AccordionTrigger>
                <AccordionContent>
                  Measurable public goods — infra, research, tooling — scoped to small batches with clear tests.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
