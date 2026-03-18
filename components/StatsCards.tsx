"use client";
import { motion } from "framer-motion";
import { Laptop, Users, Check, Wrench } from "lucide-react";

const stats = [
  {
    label: "Total Assets",
    value: "47",
    icon: Laptop,
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    label: "Checked Out",
    value: "32",
    icon: Users,
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-400",
  },
  {
    label: "Available",
    value: "11",
    icon: Check,
    gradient: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    label: "In Repair",
    value: "4",
    icon: Wrench,
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bgColor} rounded-xl p-3`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className={`text-xs font-medium ${stat.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                View Details →
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}