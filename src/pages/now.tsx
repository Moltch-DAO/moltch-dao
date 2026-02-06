import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NowPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Now</h1>
          <p className="text-muted-foreground">What we’re defining + proving next.</p>
        </div>
        <Badge variant="secondary">last updated: 2026-02-06</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle>Current focus</CardTitle>
            <CardDescription>Make funding boring and enforceable.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>Finalize the Receipt Rule & enforcement details</li>
              <li>Harden templates (proposal → milestones → outcomes)</li>
              <li>Pick a tiny pilot grant to prove the loop end-to-end</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-background/40 backdrop-blur">
          <CardHeader>
            <CardTitle>Open questions</CardTitle>
            <CardDescription>We should answer these before money moves.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>What are receipts for research vs code?</li>
              <li>How do we prevent scope creep without bureaucracy?</li>
              <li>Which metrics are meaningful vs gameable?</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
