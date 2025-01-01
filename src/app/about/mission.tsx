import { Card } from "@/components/cards/card";
import { TwoColGrid } from "@/components/containers/two-col-grid";
import { Section } from "@/components/section";
import { MissionData } from "@/data/about/mission-data";

export const Mission = () => {
  const { tag, title, description, data } = MissionData;

  return (
    <Section tag={tag} title={title} description={description}>
      <TwoColGrid className="gap-14">
        {data.map((d) => (
          <Card className="space-y-7 p-14" key={d.title}>
            <div className="flex justify-between items-center">
              <h1 className="text-5xl font-bold">{d.title}</h1>
              <img src={d.icon} alt="" />
            </div>
            <p className="text-[20px] font-medium">{d.description}</p>
          </Card>
        ))}
      </TwoColGrid>
    </Section>
  );
};
