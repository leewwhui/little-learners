import { Logo } from "@/components/logo";
import { NavButton } from "./nav-button";

export const MainNav = () => {
  return (
    <nav className="h-[80px] rounded-2xl mx-auto border bg-white shadow-nav overflow-hidden justify-between lg:flex hidden">
      <div className="bg-primary border-r px-7 flex items-center">
        <Logo />
      </div>

      <div className="h-full grid grid-cols-6">
        <NavButton className="bg-accent">Home</NavButton>
        <NavButton>About Us</NavButton>
        <NavButton>Academics</NavButton>
        <NavButton>Admissions</NavButton>
        <NavButton>Student Life</NavButton>
        <NavButton className="bg-secondary">Contact</NavButton>
      </div>
    </nav>
  );
};
