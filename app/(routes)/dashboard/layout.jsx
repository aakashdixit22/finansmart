"use client";
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";

import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    console.log(result);
    if (result?.length == 0) {
      router.replace("/dashboard/budgets");
    }
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>
      

      {/* Sidebar */}
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Content Section */}
      <div className="md:ml-64 p-4">
       
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
