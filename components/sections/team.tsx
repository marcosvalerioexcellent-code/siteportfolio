import { TeamMemberCard } from "@/components/sections/team-member-card";
import { Container } from "@/components/ui/container";
import { PromptImage } from "@/components/ui/prompt-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGE_PROMPTS, TEAM_MEMBERS } from "@/constants";
import type { TeamMember } from "@/types";

interface TeamProps {
  title?: string;
  description?: string;
  members?: TeamMember[];
}

function Team({
  title = "Nossa Equipe",
  description = "As pessoas por trás das soluções da Excellent Services.",
  members = TEAM_MEMBERS,
}: TeamProps) {
  return (
    <section id="team" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={title} description={description} />

        <PromptImage
          src={IMAGE_PROMPTS.team.src}
          alt={IMAGE_PROMPTS.team.alt}
          fallbackLabel="Foto da equipe (placeholder)"
          className="aspect-21/9"
        />

        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {members.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Team };
