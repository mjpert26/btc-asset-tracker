"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

export default function Charts() {
  const assetTrends = [
    { month: "Jan", total: 42, available: 15, checkedOut: 25, repair: 2 },
    { month: "Feb", total: 43, available: 12, checkedOut: 28, repair: 3 },
    { month: "Mar", total: 45, available: 14, checkedOut: 28, repair: 3 },
    { month: "Apr", total: 45, available: 13, checkedOut: 29, repair: 3 },
    { month: "May", total: 46, available: 10, checkedOut: 32, repair: 4 },
    { month: "Jun", total: 47, available: 11, checkedOut: 32, repair: 4 },
  ];

  const categoryDistribution = [
    { category: "Laptops", count: 28, percentage: 60 },
    { category: "Monitors", count: 10, percentage: 21 },
    { category: "Accessories", count: 6, percentage: 13 },
    { category: "Docking Stations", count: 3, percentage: 6 },
  ];

  const maxValue = Math.max(...assetTrends.map(d => d.total));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Asset Trends</h3>
            <p className="text-sm text-slate-400">Last 6 months overview</p>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+11.9%</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-end justify-between gap-2 h-48">
            {assetTrends.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center gap-1 flex-1 justify-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.checkedOut / maxValue) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                  ></motion.div>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.available / maxValue) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400"
                  ></motion.div>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.repair / maxValue) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-b"
                  ></motion.div>
                </div>
                <span className="text-xs text-slate-400 font-medium">{data.month}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-400"></div>
              <span className="text-xs text-slate-400">Checked Out</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400"></div>
              <span className="text-xs text-slate-400">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-600 to-orange-400"></div>
              <span className="text-xs text-slate-400">In Repair</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">Asset Distribution</h3>
            <p className="text-sm text-slate-400">By category breakdown</p>
          </div>
          <Activity className="w-5 h-5 text-blue-400" />
        </div>

        <div className="space-y-5">
          {categoryDistribution.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">{item.category}</span>
                <span className="text-sm text-slate-400">{item.count} assets</span>
              </div>
              <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                ></motion.div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-slate-500">{item.percentage}% of total</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400 mb-1">Total Active Assets</p>
              <p className="text-2xl font-bold text-white">47</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 mb-1">Utilization Rate</p>
              <p className="text-2xl font-bold text-blue-400">68%</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}