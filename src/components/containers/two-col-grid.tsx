import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";

export const TwoColGrid: FC<ComponentProps<"div">> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div className={cn("grid lg:grid-cols-2 grid-cols-1", className)} {...rest}>
      {children}
    </div>
  );
};
