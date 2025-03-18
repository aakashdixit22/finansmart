import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  X,
  LogOut,
  ChevronRight,
  Home
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav({ isOpen, setIsOpen }) {
  const path = usePathname();

  const menuList = [
    { id: 0, name: "Home", icon: Home, path: "/" },
    { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { id: 2, name: "Incomes", icon: CircleDollarSign, path: "/dashboard/incomes" },
    { id: 3, name: "Budgets", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 4, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
    { id: 5, name: "Upgrade", icon: ShieldCheck, path: "/dashboard/upgrade", isPremium: true },
  ];

  useEffect(() => console.log(path), [path]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      <div
        className={`h-screen border-r border-slate-200 bg-white/90 backdrop-blur-md fixed top-0 left-0 z-50 transition-all duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        } md:w-72 w-[280px] flex flex-col`}
      >
        {/* Header with branding */}
        <div className="p-5 border-b border-slate-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-sm group-hover:bg-blue-500/40 transition-all duration-300"></div>
                <Image src={"./chart-donut.svg"} alt="logo" width={36} height={36} className="relative z-10" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 font-bold text-2xl tracking-tight">
            Finan<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Smart</span>
          </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 rounded-full hover:bg-slate-100 transition-colors md:hidden text-slate-500"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1.5">
            {menuList.map((menu) => (
              <Link href={menu.path} key={menu.id} onClick={() => setIsOpen(false)}>
                <div
                  className={`flex items-center justify-between rounded-xl p-3 cursor-pointer transition-all duration-200 group
                    ${path === menu.path 
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-l-4 border-blue-600" 
                      : "hover:bg-slate-50 text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      path === menu.path 
                        ? "bg-white text-blue-600 shadow-sm" 
                        : "text-slate-500 group-hover:text-slate-700 group-hover:bg-white/80"
                      }`}>
                      <menu.icon size={18} className={path === menu.path ? "animate-pulse" : ""} />
                    </div>
                    <span className={`font-medium ${path === menu.path ? "font-semibold" : ""}`}>{menu.name}</span>
                  </div>
                  
                  {menu.isPremium && (
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
                      PRO
                    </span>
                  )}
                  
                  {path === menu.path && (
                    <ChevronRight size={16} className="text-blue-600" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* User Profile Section */}
        <div className="border-t border-slate-100 p-4 mt-auto">
          <div className="flex items-center gap-3 p-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm"></div>
              <UserButton className="relative z-10" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900">Your Profile</p>
              <p className="text-xs text-slate-500">Manage your account</p>
            </div>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;