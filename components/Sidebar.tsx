"use client";
import { motion } from "framer-motion";
import { LayoutDashboard, Package, Users, ArrowRightLeft, Wrench } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "assets", label: "All Assets", icon: Package },
    { id: "employees", label: "Employees", icon: Users },
    { id: "checkout", label: "Check-out", icon: ArrowRightLeft },
    { id: "repair", label: "Repair Log", icon: Wrench },
  ];

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed left-0 top-0 h-screen w-72 bg-[#0A0A0F] border-r border-white/10 flex flex-col"
    >
      <div className="p-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
            <span className="text-white font-bold text-xl">BTC</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg tracking-tight">Big Think Capital</h1>
            <p className="text-gray-500 text-xs">IT Asset Management</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${isActive 
                      ? "bg-gradient-to-r from-[#1E40AF]/20 to-[#3B82F6]/20 border-l-4 border-[#3B82F6] text-white" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-white/10">
        <div className="bg-gradient-to-br from-[#1E40AF]/10 to-[#3B82F6]/10 rounded-xl p-4 border border-[#3B82F6]/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-white font-bold">
              IT
            </div>
            <div>
              <p className="text-white text-sm font-medium">IT Admin</p>
              <p className="text-gray-500 text-xs">System Manager</p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}