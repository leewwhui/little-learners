import { cn } from "@/lib/utils";
import React, { ComponentProps, FC } from "react";

export const PageContainer: FC<ComponentProps<"div">> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={cn(
        "flex flex-col md:gap-52 gap-20 xl:w-[82%] md:w-[90%] mx-auto",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
