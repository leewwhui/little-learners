import { cn } from "@/lib/utils";
import { ComponentProps, FC, PropsWithChildren } from "react";

type CardProps = PropsWithChildren & ComponentProps<"div">;

export const Card: FC<CardProps> = (props) => {
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
