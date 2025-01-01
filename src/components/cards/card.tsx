import { cn } from "@/lib/utils";
import { ComponentProps, FC } from "react";

export const Card: FC<ComponentProps<"div">> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn(
        "w-full bg-white shadow-card border rounded-lg flex flex-col justify-between",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
