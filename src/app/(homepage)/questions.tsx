import { Section } from "@/components/section";
import { PlusIcon } from "@heroicons/react/16/solid";
import { QuestionCard } from "./_components/question-card";

export const Questions = () => {
  const tag = "Solutions For The Doubts";
  const title = "Frequently Asked Questions";
  const description =
    "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.";

  const data = [
    {
      title: "What are the school hours at Little Learners Academy?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "How do you handle food allergies and dietary restrictions?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "Is there a uniform policy for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "What is the teacher-to-student ratio at Little Learners Academy?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "What extracurricular activities are available for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "How do you handle discipline and behavior management?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "How do I apply for admission to Little Learners Academy?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      title: "What extracurricular activities are available for students?",
      description:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
  ];

  return (
    <Section tag={tag} title={title} description={description}>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-7">
        {data.map((d, i) => (
          <QuestionCard title={d.title} description={d.description} key={i} />
        ))}
      </div>
    </Section>
  );
};
