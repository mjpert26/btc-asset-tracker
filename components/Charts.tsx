"use client";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Activity, BarChart3 } from "lucide-react";

export default function Charts() {
  const chartData = [
    { month: "Jan", assets: 145, assignments: 132 },
    { month: "Feb", assets: 148, assignments: 135 },
    { month: "Mar", assets: 151, assignments: 138 },
    { month: "Apr", assets: 153, assignments: 140 },
    { month: "May", assets: 155, assignments: 141 },
    { month: "Jun", assets: 157, assignments: 142 },
  ];

  const maxValue = Math.max(...chartData.map(d => Math.max(d.assets, d.assignments)));

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Asset Growth</h3>
              <p className="text-gray-400 text-sm">Total assets over time</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex items-end justify-between h-64 gap-3">
            {chartData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ height: 0 }}
                animate={{ height: `${(data.assets / maxValue) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-1 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-300">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {data.assets} assets
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs">
                  {data.month}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">+8.3%</span>
              <span className="text-gray-400 text-sm">vs last period</span>
            </div>
            <div className="text-gray-400 text-sm">6 months</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Assignment Rate</h3>
              <p className="text-gray-400 text-sm">Active assignments trend</p>
            </div>
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400">
              <Activity className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="relative h-64">
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M 0 150 L 66 140 L 133 130 L 200 120 L 267 115 L 333 110 L 400 105"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                className="drop-shadow-lg"
              />
              
              <defs>
                <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                d="M 0 150 L 66 140 L 133 130 L 200 120 L 267 115 L 333 110 L 400 105 L 400 200 L 0 200 Z"
                fill="url(#areaGradient)"
              />

              {chartData.map((data, index) => (
                <motion.circle
                  key={data.month}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  cx={index * 66.67}
                  cy={150 - (data.assignments / maxValue) * 45}
                  r="4"
                  fill="#3B82F6"
                  className="cursor-pointer hover:r-6 transition-all"
                />
              ))}
            </svg>

            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
              {chartData.map((data) => (
                <span key={data.month} className="text-gray-400 text-xs">
                  {data.month}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">+7.6%</span>
              <span className="text-gray-400 text-sm">utilization rate</span>
            </div>
            <div className="text-gray-400 text-sm">90.4% assigned</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Asset Distribution</h3>
            <p className="text-gray-400 text-sm">By category and status</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Laptops", count: 68, total: 157, color: "from-blue-600 to-blue-400" },
            { label: "Monitors", count: 52, total: 157, color: "from-cyan-600 to-cyan-400" },
            { label: "Peripherals", count: 29, total: 157, color: "from-indigo-600 to-indigo-400" },
            { label: "Other", count: 8, total: 157, color: "from-purple-600 to-purple-400" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group"
            >
              <div className="text-gray-400 text-sm mb-2">{item.label}</div>
              <div className="text-2xl font-bold text-white mb-3">{item.count}</div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.count / item.total) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                />
              </div>
              <div className="text-gray-400 text-xs mt-2">
                {Math.round((item.count / item.total) * 100)}% of total
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}