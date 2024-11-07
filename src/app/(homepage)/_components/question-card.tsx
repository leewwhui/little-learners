"use client";

import { Collapsible, CollapsibleTrigger } from "@/components/collapsible";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { FC, useMemo, useState } from "react";

interface QuestionCardProps {
  title: string;
  description: string;
}

export const QuestionCard: FC<QuestionCardProps> = (props) => {
  const { title, description } = props;
  const [open, setOpen] = useState<boolean>(false);

  const content = useMemo(() => {
    const base = "transition-all";
    return open ? `${base} max-h-40 mt-6 select-none` : `${base} max-h-0`;
  }, [open]);

  const text = useMemo(() => {
    return open ? "block" : "hidden";
  }, [open]);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        className={`px-7 py-8 border rounded-xl flex h-fit bg-accent items-start gap-5 ${
          open && "bg-white"
        } transition-color duration-200`}
      >
        <div className="flex-1 flex flex-col items-start">
          <p className="flex items-center select-none h-10">{title}</p>

          {open && <div className="border-1 mt-6 w-full"></div>}

          <div className={content}>
            <p className={text}>{description}</p>
          </div>
        </div>

        <CollapsibleTrigger className="border rounded-md bg-[#FFF5F0] size-10 flex items-center justify-center cursor-pointer">
          {open ? <MinusIcon width={24} /> : <PlusIcon width={24} />}
        </CollapsibleTrigger>
      </div>
    </Collapsible>
  );
};
