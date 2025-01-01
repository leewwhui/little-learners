import { Section } from "@/components/section";
import { MemberData } from "@/data/about/member-data";
import React from "react";
import { Card } from "../../components/cards/card";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

export const Members = () => {
  const { tag, title, description, data } = MemberData;

  return (
    <Section tag={tag} title={title} description={description}>
      <div className="grid grid-cols-2 gap-12">
        {data.map((d) => (
          <Card className="p-12 gap-7">
            <div className="flex items-center justify-between h-[100px]">
              <h1 className="text-3xl font-extrabold">{d.name}</h1>
              <div className="bg-secondary border rounded-lg size-14 flex items-center justify-center">
                <EnvelopeIcon width={24} height={24}></EnvelopeIcon>
              </div>
            </div>

            <div className="p-7 bg-accent border rounded-lg space-y-3">
              <p className="font-semibold text-xl">
                Qualification: {d.detail.qualification}
              </p>
              <p className="text-xl">{d.detail.content}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
