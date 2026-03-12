"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Package, Users, Wrench, Settings, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Assets", icon: Package },
    { name: "Employees", icon: Users },
    { name: "Repairs", icon: Wrench },
    { name: "Settings", icon: Settings },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-64 bg-[#0F172A] border-r border-white/10 backdrop-blur-xl z-50"
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-white/10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">Big Think</h1>
              <p className="text-blue-400 text-xs font-medium">Capital</p>
            </div>
          </motion.div>
        </div>

        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.name;
              
              return (
                <motion.li
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => setActiveItem(item.name)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                      isActive
                        ? "bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white shadow-lg shadow-blue-500/20"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "" : "group-hover:scale-110"}`} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <div>
                <p className="text-white font-medium text-sm">Admin User</p>
                <p className="text-gray-400 text-xs">admin@bigthink.com</p>
              </div>
            </div>
            <div className="h-px bg-white/10 my-3"></div>
            <p className="text-gray-400 text-xs">System Status: <span className="text-green-400 font-medium">Active</span></p>
          </motion.div>
        </div>
      </div>
    </motion.aside>
  );
}