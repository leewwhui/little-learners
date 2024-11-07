import { Fragment } from "react";

const MainHeroCard = () => {
  return (
    <div className="rounded-2xl shadow-card shadow-secondary bg-accent border-1 hidden md:flex py-6 items-center justify-around px-4">
      <div>
        <p className="font-semibold text-[44px]">+7000</p>
        <p>Students Passed Out</p>
      </div>

      <div>
        <p className="font-semibold text-[44px]">+37</p>
        <p>Awards & Recognitions</p>
      </div>

      <div>
        <p className="font-semibold text-[44px]">+15</p>
        <p>Experience Educators</p>
      </div>
    </div>
  );
};

const MobileHeroCard = () => {
  return (
    <div className="rounded-2xl shadow-card shadow-secondary bg-accent border-1 flex md:hidden flex-col items-center justify-around p-10">
      <div className="flex flex-col items-center">
        <p className="font-semibold text-[34px]">+7000</p>
        <p>Students Passed Out</p>
      </div>

      <div className="w-full border-1 m-5" />

      <div className="flex flex-col items-center">
        <p className="font-semibold text-[34px]">+37</p>
        <p>Awards & Recognitions</p>
      </div>

      <div className="w-full border-1 m-5" />

      <div className="flex flex-col items-center">
        <p className="font-semibold text-[34px]">+15</p>
        <p>Experience Educators</p>
      </div>
    </div>
  );
};

export const HeroCard = () => {
  return (
    <Fragment>
      <MainHeroCard></MainHeroCard>
      <MobileHeroCard></MobileHeroCard>
    </Fragment>
  );
};
