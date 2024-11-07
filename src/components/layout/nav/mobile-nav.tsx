import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileNav = () => {
  return (
    <nav className="h-[62px] rounded-2xl mx-auto border bg-white shadow-nav flex overflow-hidden justify-between lg:hidden">
      <div className="bg-primary border-r px-7 flex items-center">
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img src="/logo.svg" alt="logo" className="size-8" />
          <img src="/logo-text.svg" alt="logo" className="size-24" />
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <div className="w-1/4 flex items-center justify-center bg-accent border-l cursor-pointer">
            <MenuIcon />
          </div>
        </SheetTrigger>
        <SheetContent className="w-3/5 bg-white flex flex-col gap-5">
          <div>About Us</div>
          <div>Academics</div>
          <div>Admissions</div>
          <div>Student Life</div>
          <div>Contact</div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
