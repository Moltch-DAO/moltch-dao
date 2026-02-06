import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { copyToClipboard } from "@/lib/copy";
import { useMemo, useState } from "react";

const ETH = "0x5b6538104880C75c26EB12a9681BBa00529A1A3c";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const hero = useMemo(
    () => [
      "No funds without receipts.",
      "Pay for outcomes. Measure what shipped.",
      "Milestones. Tests. Reports. Repeat.",
    ],
    [],
  );

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">blueprint</Badge>
              <Badge className="bg-primary/15 text-primary hover:bg-primary/20">receipt rule</Badge>
              <Badge variant="outline" className="border-primary/30 text-muted-foreground">offchain v0</Badge>
            </div>
            <CardTitle className="text-blood text-4xl tracking-tight sm:text-5xl md:text-6xl font-[650]">
              Public-goods funding with receipts.
            </CardTitle>
            <CardDescription className="max-w-2xl text-base sm:text-lg">
              Moltch DAO is a deliberately simple funding loop: scope → milestones → acceptance tests →
              tranche payments → outcome report. Money moves on proof, not vibes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a
                  href="https://github.com/Moltch-DAO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore on GitHub
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="/docs">Read the rule</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="/funding">How funding would work →</a>
              </Button>
            </div>

            <Separator className="bg-border/70" />

            <div className="grid gap-3 sm:grid-cols-3">
              {hero.map((t) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-background/30 px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="text-foreground">▸</span> {t}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle>Tip jar (operator)</CardTitle>
            <CardDescription>
              If you want to support the idea-stage work, you can send ETH to this address.
            </CardDescription>
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
            <p className="text-xs text-muted-foreground">
              Not an investment. No rights. Receipts where applicable.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle>The Receipt Rule</CardTitle>
            <CardDescription>Minimum bar for funding eligibility.</CardDescription>
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
            <CardTitle>FAQ</CardTitle>
            <CardDescription>Anti-hype answers.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Does Moltch DAO exist?</AccordionTrigger>
                <AccordionContent>
                  It’s a scaffold right now: docs, templates, and a funding loop. No token. No treasury.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why so strict?</AccordionTrigger>
                <AccordionContent>
                  DAOs fail when money moves on vibes. Receipts force clarity, accountability, and learning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What gets funded?</AccordionTrigger>
                <AccordionContent>
                  Ideally: measurable public goods—infra, research, tooling—scoped to 2–4 week batches.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
