import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, Store, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import api from "@/api/axios";

export function ProfileMenu() {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const { user, setUser } = useAuth();

  const shops = user?.shops || [];

  const handleLogout = async () => {
    await api.post("/auth/logout");
    setLogoutDialogOpen(false);
    setUser(null);
  };

  console.log(window.location.host)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center cursor-pointer  gap-2 rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Avatar className="h-8 w-8 border-2 border-green-700">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback className="bg-green-700 text-white">
                {user?.username
                  ? user?.username.charAt(0, 1).toUpperCase()
                  : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col items-start">
              <span
                style={{ textTransform: "capitalize" }}
                className="text-sm font-medium "
              >
                {user?.username}
              </span>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p
                style={{ textTransform: "capitalize" }}
                className="text-sm font-medium leading-none"
              >
                {user?.username}
              </p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          <DropdownMenuLabel>Your Shops</DropdownMenuLabel>
          {shops.map((shop: { name: string; _id: string }) => (
            <a
              href={`http://${shop?.name}.${window.location.host}`}
              className="text-green-700 mb-0.4 flex items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-green-100 focus:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Store className=" h-4 w-4 text-green-700" />
              <span> {shop?.name}</span>
            </a>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setLogoutDialogOpen(true)}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to log out?
            </AlertDialogTitle>
            <AlertDialogDescription>
              You will be logged out of your account and redirected to the login
              page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="bg-green-700 cursor-pointer hover:bg-green-800"
            >
              Log out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
