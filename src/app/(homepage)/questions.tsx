import { Section } from "@/components/section";
import { QuestionCard } from "./_components/question-card";
import { QuestionData } from "@/data/homepage/question-data";
import { TwoColGrid } from "@/components/containers/two-col-grid";

export const Questions = () => {
  const { tag, title, description, data } = QuestionData;

  return (
    <Section tag={tag} title={title} description={description}>
      <TwoColGrid className="gap-x-12 gap-y-7">
        {data.map((d, i) => (
          <QuestionCard title={d.title} description={d.description} key={i} />
        ))}
      </TwoColGrid>
    </Section>
  );
};
