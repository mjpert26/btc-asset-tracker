"use client";

import { motion } from "framer-motion";
import { Search, Bell, Settings, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-6 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assets, employees, or tickets..."
              className="w-full bg-[#1E293B] border border-white/10 rounded-full pl-12 pr-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 bg-[#1E293B] border border-white/10 rounded-full hover:bg-white/5 transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-[#1E293B] border border-white/10 rounded-full hover:bg-white/5 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-400" />
          </motion.button>

          <div className="h-8 w-px bg-white/10"></div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-[#1E293B] border border-white/10 rounded-full pl-2 pr-4 py-2 hover:bg-white/5 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-semibold text-sm">
              JD
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-gray-400">Administrator</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}