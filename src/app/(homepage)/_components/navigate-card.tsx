import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { FC } from "react";

interface NavigateCardProps {
  title: string;
  description: string;
}

export const NavigateCard: FC<NavigateCardProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="bg-white border shadow-card md:p-20 p-10 rounded-xl flex flex-col gap-12 justify-between">
      <div className="space-y-12">
        <div className="space-y-7">
          <h1 className="md:text-5xl text-3xl text-center">{title}</h1>

          <div className="w-full flex items-center">
            <div className="size-5 bg-white border rounded-full"></div>
            <div className="w-full grid grid-cols-6 gap-2">
              {[...Array(6)].map((i) => (
                <div className="w-full bg-secondary rounded-sm pt-[3px] pb-1 pr-2">
                  <div className="w-full border-1"></div>
                </div>
              ))}
            </div>
            <div className="size-5 bg-white border rounded-full"></div>
          </div>
        </div>
        <p className="text-xl text-center">{description}</p>
      </div>

      <button className="bg-accent border flex py-4 justify-center gap-3 items-center rounded-lg shadow-card active:translate-x-1 active:translate-y-1 transition-all active:shadow-none">
        Learn More <ArrowRightIcon width={21} />
      </button>
    </div>
  );
};
