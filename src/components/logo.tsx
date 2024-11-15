import { cn } from "@/lib/utils";
import { FC } from "react";

export const Logo: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 cursor-pointer select-none",
        className
      )}
    >
      <img src="/logo.svg" alt="logo" />
      <img src="/logo-text.svg" alt="logo" />
    </div>
  );
};
