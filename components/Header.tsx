"use client";
import { motion } from "framer-motion";
import { Bell, Search, User } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1E293B]/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40"
    >
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search assets, employees, or repair tickets..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
          >
            <Bell className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 p-2 pr-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Admin User</div>
              <div className="text-xs text-gray-400">IT Manager</div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}