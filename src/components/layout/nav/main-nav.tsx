import { Logo } from "@/components/logo";
import { NavButton } from "./nav-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = () => {
  return (
    <nav className="h-[80px] rounded-2xl mx-auto border bg-white shadow-nav overflow-hidden justify-between lg:flex hidden">
      <Link href="/" className="bg-primary border-r px-7 flex items-center">
        <Logo />
      </Link>

      <div className="h-full grid grid-cols-6">
        <NavButton href="/">Home</NavButton>
        <NavButton href="/about">About Us</NavButton>
        <NavButton>Academics</NavButton>
        <NavButton>Admissions</NavButton>
        <NavButton>Student Life</NavButton>
        <NavButton className="bg-secondary">Contact</NavButton>
      </div>
    </nav>
  );
};
