import { Logo } from "@/components/logo";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

export const FooterNav = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center gap-20 lg:items-start">
      <div className="flex flex-col gap-10">
        <div className="space-y-5">
          <Logo className="justify-center md:justify-start" />
          <p className="text-center md:text-start">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="flex gap-3 items-center">
            <div className="p-2 border bg-accent rounded-lg">
              <EnvelopeIcon width={24} />
            </div>
            <p>hello@littlelearners.com</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="p-2 border bg-accent rounded-lg">
              <PhoneIcon width={24} />
            </div>
            <p>+91 91813 23 2309</p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="p-2 border bg-accent rounded-lg">
              <MapPinIcon width={24} />
            </div>
            <p>Beijing, China</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-7 w-full md:grid-cols-4">
        <div className="flex flex-col gap-6 w-full">
          <p className="font-bold">Home</p>
          <div className="flex-1 flex gap-3 flex-col">
            <Link href={""}>Features</Link>
            <Link href={""}>Our Testimonials</Link>
            <Link href={""}>FAQ</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-bold">Academics</p>
          <div className="flex-1 flex gap-3 flex-col">
            <Link href={""}>Special Features</Link>
            <Link href={""}>Gallery</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-bold">About Us</p>
          <div className="flex-1 flex gap-3 flex-col">
            <Link href={""}>Our Mission</Link>
            <Link href={""}>Our Vission</Link>
            <Link href={""}>Awards and Recognitions</Link>
            <Link href={""}>History</Link>
            <Link href={""}>Teachers</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-bold">Contact Us</p>
          <div className="flex-1 flex gap-3 flex-col">
            <Link href={""}>Information</Link>
            <Link href={""}>Map & Direction</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
