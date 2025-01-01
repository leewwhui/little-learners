"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, FC } from "react";
import { twMerge as cn } from "tailwind-merge";

export const NavButton: FC<ComponentProps<"a">> = (props) => {
  const { className, children, href = "", ...rest } = props;
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "h-full flex justify-center items-center border-l cursor-pointer select-none w-full px-3",
        href === pathname ? "bg-accent" : "",
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
