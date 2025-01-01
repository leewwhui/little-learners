import { Section } from "@/components/section";
import React from "react";
import { IconCard } from "@/components/cards/icon-card";
import { BenefitsData } from "@/data/homepage/benefits-data";
import { ThreeColGrid } from "@/components/containers/three-col-grid";

export const Benefits = () => {
  const { tag, title, description, data } = BenefitsData;

  return (
    <Section tag={tag} title={title} description={description}>
      <ThreeColGrid className="gap-x-10 gap-y-16">
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
