import React from "react";
import { Mission } from "./mission";
import { Achievements } from "./achievements";
import { Members } from "./members";
import { PageContainer } from "@/components/containers/page-container";
import { TitleCard } from "../../components/cards/title-card";

const About = () => {
  return (
    <div className="flex flex-col md:gap-52 gap-20">
      <TitleCard />

      <PageContainer>
        <Mission />
        <Achievements />
        <Members />
      </PageContainer>
    </div>
  );
};

export default About;
