import React from "react";
import { FooterNav } from "./footer-nav";

export const Footer = () => {
  return (
    <div className="shadow-card bg-white border rounded-lg mt-32 flex flex-col gap-12 items-center justify-center py-16 px-8 md:px-28">
      <FooterNav />

      <div className="w-full flex flex-col gap-7">
        <div className="py-7 flex flex-col items-center justify-between border-y gap-5 md:flex-row">
          <div className="flex items-center gap-4">
            <p>Terms of Service</p>
            <div className="h-1/2 border-1"></div>
            <p>Privacy Policy</p>
            <div className="h-1/2 border-1"></div>
            <p>Cookie Policy</p>
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
    </div>
  );
};
