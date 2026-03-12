"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Package, Users, Wrench, Settings, ChevronRight } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "#overview" },
  { icon: Package, label: "Assets", href: "#assets" },
  { icon: Users, label: "Employees", href: "#employees" },
  { icon: Wrench, label: "Repair Log", href: "#repair" },
  { icon: Settings, label: "Settings", href: "#settings" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-64 bg-[#1E293B] border-r border-white/10 flex flex-col"
    >
      <div className="p-6 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Big Think</h1>
            <p className="text-xs text-gray-400">Capital</p>
          </div>
        </motion.div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;
          
          return (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ x: 4 }}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </motion.a>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-4 rounded-xl bg-gradient-to-br from-[#1E40AF]/20 to-[#3B82F6]/20 border border-[#3B82F6]/30"
        >
          <h3 className="text-sm font-semibold text-white mb-2">Need Help?</h3>
          <p className="text-xs text-gray-400 mb-3">Check our documentation or contact support</p>
          <button className="w-full px-3 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            Get Support
          </button>
        </motion.div>
      </div>
    </motion.aside>
  );
}