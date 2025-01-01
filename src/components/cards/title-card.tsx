import React from "react";
import { Card } from "./card";

export const TitleCard = () => {
  return (
    <Card className="items-center flex md:flex-row flex-col md:text-start text-center lg:px-[120px] lg:py-[150px] px-[30px] py-[50px] md:gap-[50px] gap-5">
      <div className="md:w-1/2 flex flex-col items-center md:items-start gap-3">
        <div className="rounded-md border w-fit px-5 py-2">Overview</div>
        <h1 className="md:text-[48px] text-3xl font-bold leading-[130%]">
          Welcome to Little Learners Academy
        </h1>
      </div>

      <p className="md:w-1/2 md:text-xl">
        A leading kinder garden school dedicated to providing a nurturing and
        stimulating environment for young learners. With a commitment to
        excellence in early education, we believe in shaping curious minds and
        building a strong foundation for a lifelong love of learning. Our
        holistic approach fosters intellectual, social, emotional, and physical
        development, ensuring that each child reaches their full potential.
      </p>
    </Card>
  );
};
