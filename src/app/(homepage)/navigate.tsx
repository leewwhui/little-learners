import { Section } from "@/components/section";
import React from "react";
import { NavigateCard } from "./_components/navigate-card";

export const Navigate = () => {
  const tag = "Explore More";
  const title = "Navigate through our Pages";
  const desciption =
    "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school";

  const data = [
    {
      title: "About Us",
      desciption:
        "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    },
    {
      title: "Academics",
      desciption:
        "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    },
    {
      title: "Student Life",
      desciption:
        "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    },
    {
      title: "Admissions",
      desciption:
        "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    },
  ];

  return (
    <Section tag={tag} title={title} description={desciption}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
        {data.map((d, i) => (
          <NavigateCard
            title={d.title}
            description={d.desciption}
            key={i}
          />
        ))}
      </div>
    </Section>
  );
};
