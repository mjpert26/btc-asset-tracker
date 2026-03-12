"use client";

import { motion } from "framer-motion";
import { Package, CheckCircle, Wrench, Archive } from "lucide-react";

const stats = [
  {
    title: "Total Assets",
    value: "15",
    change: "+2 this month",
    icon: Package,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Active Assignments",
    value: "12",
    change: "+3 this week",
    icon: CheckCircle,
    gradient: "from-green-500 to-emerald-400",
  },
  {
    title: "In Repair",
    value: "2",
    change: "-1 from last week",
    icon: Wrench,
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    title: "Available",
    value: "1",
    change: "Ready to assign",
    icon: Archive,
    gradient: "from-purple-500 to-pink-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-[#1E293B] backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300">
            <div className="flex items-start justify-between mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient}`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">
              {stat.title}
            </h3>
            <div className="flex items-end justify-between">
              <p className="text-4xl font-bold text-white">{stat.value}</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}