"use client";

import { motion } from "framer-motion";
import { Package, Users, Wrench, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Total Assets",
    value: "157",
    subtitle: "items",
    icon: Package,
    trend: "+12% from last month",
    trendPositive: true,
  },
  {
    title: "Active Assignments",
    value: "142",
    subtitle: "assigned",
    icon: Users,
    trend: "+8% from last month",
    trendPositive: true,
  },
  {
    title: "In Repair",
    value: "8",
    subtitle: "items",
    icon: Wrench,
    trend: "-3% from last month",
    trendPositive: true,
  },
  {
    title: "Available",
    value: "7",
    subtitle: "items",
    icon: CheckCircle,
    trend: "+2 from last week",
    trendPositive: true,
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
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.subtitle}</div>
              </div>
            </div>
            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-300">
                {stat.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`text-xs font-medium ${
                  stat.trendPositive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {stat.trend}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}