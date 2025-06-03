import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProfileMenu } from "./ProfileMenu";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between w-full px-4 gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex w-full items-center gap-2 font-semibold">
          <span className="hidden md:inline-flex">Multi Shop</span>
        </div>
        <div className=" w-full flex items-center justify-end gap-4">
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
