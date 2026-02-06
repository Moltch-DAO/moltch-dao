import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    n: "01",
    title: "Propose",
    desc: "Public work surface, milestones, tests, budget, conflicts.",
  },
  {
    n: "02",
    title: "Fund in tranches",
    desc: "Payments unlock when milestones are verified.",
  },
  {
    n: "03",
    title: "Ship",
    desc: "Work happens in public; progress stays legible.",
  },
  {
    n: "04",
    title: "Outcome report",
    desc: "What shipped, what didn’t, spend summary, handoff, lessons.",
  },
];

export default function FundingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Funding (draft)</h1>
          <p className="text-muted-foreground">A loop that’s easy to enforce.</p>
        </div>
        <Badge variant="secondary">offchain v0</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((s) => (
          <Card key={s.n} className="bg-background/40 backdrop-blur">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{s.title}</CardTitle>
                <span className="font-mono text-sm text-primary/90">{s.n}</span>
              </div>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {s.n === "02" ? (
                <ul className="list-disc space-y-2 pl-5">
                  <li>Stop “one big transfer” decisions</li>
                  <li>Make scope changes explicit before spending</li>
                  <li>Keep incentives aligned with delivery</li>
                </ul>
              ) : (
                <p>
                  Designed for small grants first. We optimize for legibility and learning.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
