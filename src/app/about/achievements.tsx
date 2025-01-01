import { Section } from "@/components/section";
import { IconCard } from "@/components/cards/icon-card";
import { AchievementsData } from "@/data/about/achievements-data";

export const Achievements = () => {
  const { tag, title, description, data } = AchievementsData;

  return (
    <Section tag={tag} title={title} description={description}>
      <div className="w-full grid grid-cols-3 gap-10">
        {data.map((card, index) => (
          <IconCard
            icon={<card.Icon width={32} />}
            title={card.title}
            description={card.description}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};
