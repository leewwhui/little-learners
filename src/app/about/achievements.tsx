import { Section } from "@/components/section";
import React from "react";
import {
  ChartPieIcon,
  ChartBarIcon,
  BoltIcon,
} from "@heroicons/react/16/solid";
import { IconCard } from "@/components/cards/icon-card";

export const Achievements = () => {
  const tag = "Our Achievements";
  const title = "Our Awards and Recognitions";
  const description =
    "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.";

  const data = [
    {
      title: "Outstanding Early Childhood Education Awar",
      description:
        "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
      icon: <ChartPieIcon width={32} />,
    },
    {
      title: "Innovative STEAM Education Award",
      description:
        "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
      icon: <ChartBarIcon width={32} />,
    },
    {
      title: "Environmental Stewardship Award",
      description:
        "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
      icon: <BoltIcon width={32} />,
    },
  ];

  return (
    <Section tag={tag} title={title} description={description}>
      <div className="w-full grid grid-cols-3 gap-10">
        {data.map((card, index) => (
          <IconCard
            icon={card.icon}
            title={card.title}
            description={card.description}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};
