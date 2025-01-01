import { Section } from "@/components/section";
import React from "react";
import { NavigateCard } from "./_components/navigate-card";
import { NavigateData } from "@/data/homepage/navigate-data";

export const Navigate = () => {
  const { tag, title, desciption, data } = NavigateData;

  return (
    <Section tag={tag} title={title} description={desciption}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        {data.map((d, i) => (
          <NavigateCard title={d.title} description={d.desciption} key={i} />
        ))}
      </div>
    </Section>
  );
};
