import React from "react";
import { Mission } from "./mission";
import { Achievements } from "./achievements";
import { Card } from "@/components/cards/card";
import { Container } from "@/components/container";
import { Members } from "./members";

const About = () => {
  return (
    <div className="flex flex-col md:gap-52 gap-20">
      <Card className="h-[480px]"></Card>

      <Container>
        <Mission />
        <Achievements />
        <Members />
      </Container>
    </div>
  );
};

export default About;
