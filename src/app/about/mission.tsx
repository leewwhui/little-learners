import { Card } from "@/components/cards/card";
import { Section } from "@/components/section";

export const Mission = () => {
  const tag = "Mission & Visions";
  const title = "Our Mission & Visions";
  const description =
    "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.";

  const data = [
    {
      title: "Mission",
      description:
        "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
      icon: <img src="/mission.png" alt="" />,
    },
    {
      title: "Vision",
      description:
        "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
      icon: <img src="/vision.png" alt="" />,
    },
  ];

  return (
    <Section tag={tag} title={title} description={description}>
      <div className="w-full flex gap-14">
        {data.map((d) => (
          <Card className="space-y-7 p-14" key={d.title}>
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-bold">{d.title}</h1>
              {d.icon}
            </div>
            <p className="text-[20px] font-medium">{d.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
