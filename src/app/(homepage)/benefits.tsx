import { Section } from "@/components/section";
import React from "react";
import { IconCard } from "@/components/cards/icon-card";
import { BenefitsData } from "@/data/homepage/benefits-data";

export const Benefits = () => {
  const { tag, title, description, data } = BenefitsData;

  return (
    <Section tag={tag} title={title} description={description}>
      <div className="w-full gap-x-10 gap-y-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
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
