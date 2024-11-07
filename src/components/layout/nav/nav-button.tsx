import { ComponentProps, FC } from "react";
import { twMerge as cn } from "tailwind-merge";

export const NavButton: FC<ComponentProps<"div">> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={cn(
        "h-full flex justify-center items-center border-l cursor-pointer select-none w-full px-3",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
