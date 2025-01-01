import { Section } from "@/components/section";
import { IconCard } from "@/components/cards/icon-card";
import { AchievementsData } from "@/data/about/achievements-data";
import { ThreeColGrid } from "@/components/containers/three-col-grid";

export const Achievements = () => {
  const { tag, title, description, data } = AchievementsData;

  return (
    <Section tag={tag} title={title} description={description}>
      <ThreeColGrid className="gap-10">
        {data.map((card, index) => (
          <IconCard
            icon={<card.Icon width={32} />}
            title={card.title}
            description={card.description}
            key={index}
          />
        ))}
      </ThreeColGrid>
    </Section>
  );
};
