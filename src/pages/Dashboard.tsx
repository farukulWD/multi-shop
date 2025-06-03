import { useAuth } from "@/hooks/useAuth";
import api from "../api/axios";
import { Navbar } from "./navbar";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardContent } from "./DashboardCcontent";

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  
  // TODO: Fix the type of user and shops
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar collapsed={collapsed} />
      <div className="flex flex-col flex-1">
        <Navbar onMenuClick={() => setCollapsed(!collapsed)} />
        <DashboardContent />
      </div>
    </div>
  );
}
