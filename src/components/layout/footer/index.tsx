import React from "react";
import { FooterNav } from "./footer-nav";
import { Card } from "@/components/cards/card";

export const Footer = () => {
  return (
    <Card className="mt-32 flex flex-col gap-12 items-center justify-center py-16 px-[30px] md:px-28">
      <FooterNav />

      <div className="w-full flex flex-col gap-7">
        <div className="py-7 flex flex-col items-center justify-between border-y gap-5 lg:flex-row">
          <div className="flex items-center text-sm lg:text-[18px] gap-3 h-8">
            <p className="text-center">Terms of Service</p>
            <div className="h-2/3 border-1"></div>
            <p className="text-center">Privacy Policy</p>
            <div className="h-2/3 border-1"></div>
            <p className="text-center">Cookie Policy</p>
          </div>

          <div className="flex gap-3 items-center">
            <button className="p-4 bg-accent border rounded-lg">
              <img src="/facebook.svg" alt="facebook" className="w-6" />
            </button>
            <button className="p-4 bg-accent border rounded-lg">
              <img src="/github.svg" alt="github" className="w-6" />
            </button>
            <button className="p-4 bg-accent border rounded-lg">
              <img src="/instagram.svg" alt="instagram" className="w-6" />
            </button>
          </div>
        </div>

        <p className="text-center">
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </p>
      </div>
    </Card>
  );
};
