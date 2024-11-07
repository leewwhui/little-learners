import { raleway } from "@/components/fonts";
import { HeroCard } from "./_components/hero-card";

export const Hero = () => {
  return (
    <div className="w-full flex gap-14 xl:flex-row flex-col min-h-[663px] xl:min-h-[785px]">
      <div className="xl:w-1/2 xl:h-auto w-full bg-hero bg-cover bg-center rounded-lg aspect-[1/0.9]" />

      <div className="flex-1 flex flex-col md:h-[70%] my-auto justify-between h-[80%] gap-8">
        <div className="flex flex-col md:items-start items-center">
          <span className="xl:text-[22px] text-[18px] w-fit border-b pb-1">
            Welcome to Little Learners Academy
          </span>

          <div
            className={`xl:text-[54px] leading-[130%] ${raleway.className} font-extrabold md:text-[40px] mt-3 text-[30px] text-center md:text-left`}
          >
            Where Young Minds Blossom and{" "}
            <span className="text-primary">Dreams Take Flight.</span>
          </div>
        </div>

        <p className="xl:text-xl text-lg leading-[150%] text-center md:text-left">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>

        <HeroCard />
      </div>
    </div>
  );
};
