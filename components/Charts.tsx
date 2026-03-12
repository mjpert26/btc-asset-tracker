"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Laptop, Monitor, Cable, Wrench } from "lucide-react";

export default function Charts() {
  const assetDistribution = [
    { category: "Laptops", count: 7, percentage: 47, color: "from-blue-500 to-cyan-400" },
    { category: "Monitors", count: 4, percentage: 27, color: "from-purple-500 to-pink-400" },
    { category: "Peripherals", count: 4, percentage: 26, color: "from-orange-500 to-yellow-400" },
  ];

  const assignmentStatus = [
    { status: "Active", count: 12, percentage: 80, color: "from-green-500 to-emerald-400" },
    { status: "In Repair", count: 2, percentage: 13, color: "from-yellow-500 to-orange-400" },
    { status: "Available", count: 1, percentage: 7, color: "from-blue-500 to-cyan-400" },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1E293B] border border-white/10 rounded-2xl p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold text-white">Asset Distribution</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>15 Total Assets</span>
          </div>
        </div>

        <div className="space-y-6">
          {assetDistribution.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 font-medium">{item.category}</span>
                <span className="text-white font-semibold">{item.count} ({item.percentage}%)</span>
              </div>
              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl">
            <Laptop className="w-8 h-8 text-blue-400 mb-2" />
            <span className="text-2xl font-bold text-white">7</span>
            <span className="text-xs text-gray-400">Laptops</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl">
            <Monitor className="w-8 h-8 text-purple-400 mb-2" />
            <span className="text-2xl font-bold text-white">4</span>
            <span className="text-xs text-gray-400">Monitors</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl">
            <Cable className="w-8 h-8 text-orange-400 mb-2" />
            <span className="text-2xl font-bold text-white">4</span>
            <span className="text-xs text-gray-400">Peripherals</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#1E293B] border border-white/10 rounded-2xl p-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold text-white">Assignment Status</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>80% Active</span>
          </div>
        </div>

        <div className="space-y-6">
          {assignmentStatus.map((item, index) => (
            <motion.div
              key={item.status}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 font-medium">{item.status}</span>
                <span className="text-white font-semibold">{item.count} ({item.percentage}%)</span>
              </div>
              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.2, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Active Rate</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">80%</div>
              <div className="text-xs text-green-400">+5% from last month</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">In Repair</span>
                <Wrench className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">13%</div>
              <div className="text-xs text-yellow-400">2 assets pending</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}