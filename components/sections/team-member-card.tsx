import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import type { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
  delay?: number;
}

function TeamMemberCard({ member, delay = 0 }: TeamMemberCardProps) {
  return (
    <Reveal delay={delay}>
      <Card className="h-full overflow-hidden py-0">
        <div className="flex aspect-square w-full items-center justify-center border-b bg-muted text-sm text-muted-foreground">
          Foto (placeholder)
        </div>
        <CardHeader className="pt-6">
          <CardTitle>{member.name}</CardTitle>
          <span className="text-sm font-medium text-primary">{member.role}</span>
        </CardHeader>
        <CardContent>
          <CardDescription>{member.description}</CardDescription>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export { TeamMemberCard };
