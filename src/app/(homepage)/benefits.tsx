import { Section } from "@/components/section";
import {
  AcademicCapIcon,
  FlagIcon,
  LifebuoyIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import { BenefitCard } from "./_components/benefit-card";

export const Benefits = () => {
  const tag = "Children Deserve Bright Future";
  const title = "Our Benefits";
  const description =
    "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.";

  const data = [
    {
      title: "Holistic Learning Approach",
      description:
        "our curriculum focuses on nurturing cognitive, social, emotional,and physical development, ensuring a well-rounded education.",
      icon: <AcademicCapIcon width={32} />,
    },
    {
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
      icon: <TrophyIcon width={32} />,
    },
    {
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
      icon: <RocketLaunchIcon width={32} />,
    },

    {
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
      icon: <FlagIcon width={32} />,
    },
    {
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
      icon: <LifebuoyIcon width={32} />,
    },
    {
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
      icon: <UserGroupIcon width={32} />,
    },
  ];

  return (
    <Section tag={tag} title={title} description={description}>
      <div className="w-full gap-x-10 gap-y-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data.map((card, index) => (
          <BenefitCard
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
