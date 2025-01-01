import React from "react";
import { Mission } from "./mission";
import { Achievements } from "./achievements";
import { Card } from "@/components/cards/card";

const About = () => {
  return (
    <div className="flex flex-col md:gap-52 gap-20">
      <Card className="h-[480px]"></Card>

      <div className="flex flex-col md:gap-52 gap-20 xl:w-[82%] md:w-[90%] mx-auto">
        <Mission />
        <Achievements />
      </div>
    </div>
  );
};

export default About;
