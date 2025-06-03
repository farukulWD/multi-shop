import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  collapsed: boolean;
}

export function Sidebar({ collapsed }: SidebarProps) {
  const navItems = [{ icon: Home, label: "Dashboard", href: "/" }];
  const { user } = useAuth();
  return (
    <aside
      className={cn(
        "bg-muted/40 border-r h-screen transition-all duration-300 hidden md:block",
        collapsed ? "block w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <div
          className={cn(
            "font-semibold transition-all duration-300 flex items-center",
            collapsed ? "w-8 overflow-hidden" : "w-full"
          )}
        >
          <div className="h-6 w-6 mr-2 rounded-full flex items-center justify-center text-white font-bold">
            <img  src="/dashboardLogo.svg" alt="multi shop"  className="h-[90px] w-[90px] fill-green-700 " />
          </div>
          <span
            className={cn(
              collapsed ? "hidden" : "opacity-100",
              "transition-opacity duration-300"
            )}
          >
            Multi Shop
          </span>
        </div>
      </div>
      <nav className="flex flex-col gap-2 p-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-green-100 hover:text-green-700 transition-all",
              item.href === "/"
                ? "bg-green-700 text-white hover:bg-green-800 hover:text-white"
                : ""
            )}
          >
            <item.icon className="h-5 w-5" />
            <span
              className={cn(
                collapsed ? "opacity-0 w-0" : "opacity-100 w-auto",
                "transition-all duration-300"
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
