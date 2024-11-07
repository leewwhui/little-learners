import { FC, PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  tag: string;
  title: string;
  description: string;
}

export const Section: FC<SectionProps> = (props) => {
  const { tag, title, description, children } = props;

  return (
    <section className="flex flex-col gap-24">
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="rounded-md border w-fit px-5 py-2 bg-white">{tag}</div>
        <h1 className="text-[38px] font-bold text-center">{title}</h1>
        <p className="text-[18px] text-center">{description}</p>
      </div>
      {children}
    </section>
  );
};
