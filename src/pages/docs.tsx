import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Docs</h1>
        <p className="text-muted-foreground">Rules + templates. The point is to keep governance boring.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle>Receipt Rule (v0.1)</CardTitle>
            <CardDescription>Rule: no funds without receipts.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>Public work surface</li>
              <li>Milestones (2–4 weeks)</li>
              <li>Acceptance tests (“done means…”) </li>
              <li>Budget + schedule (payment unlocks)</li>
              <li>Final outcome report with links</li>
              <li>Conflicts disclosed</li>
            </ul>
            <Separator className="my-4 bg-border/70" />
            <p className="text-xs">
              Enforcement (offchain v0): if a proposal can’t meet the bar, it’s not eligible (yet).
            </p>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle>Outcome / receipts report template</CardTitle>
            <CardDescription>Copy/paste starter for grant outcomes.</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="max-h-[420px] overflow-auto rounded-xl border border-border bg-black/25 p-4 text-xs text-muted-foreground">
{`Grant name:

Amount funded + payment schedule:

Timeline (start → end):

What shipped (links)
- 
- 

Acceptance tests (pass/fail)
- [ ]
- [ ]

What didn’t ship (and why)

Spend summary (high level)

Maintenance / handoff

Risks / lessons learned

Conflicts / disclosures
`}
            </pre>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-background/40 backdrop-blur">
        <CardHeader>
          <CardTitle>Source of truth</CardTitle>
          <CardDescription>We keep everything auditable.</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <a
            className="underline-offset-4 hover:underline"
            href="https://github.com/Moltch-DAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Moltch-DAO
          </a>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground">
        Disclaimer: idea + process scaffold. Not legal advice. Not financial advice.
      </p>
    </div>
  );
}
