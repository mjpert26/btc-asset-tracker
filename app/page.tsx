"use client";

import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Wrench, 
  Settings,
  Search,
  TrendingUp,
  TrendingDown,
  Laptop,
  Monitor,
  MousePointer2,
  Keyboard,
  Video,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeNav, setActiveNav] = useState("Dashboard");

  const stats = [
    { label: "Total Assets", value: "157", icon: Package, trend: "+12%", trendUp: true, color: "from-blue-500 to-cyan-400" },
    { label: "Active Assignments", value: "142", icon: Users, trend: "+8%", trendUp: true, color: "from-purple-500 to-pink-400" },
    { label: "In Repair", value: "8", icon: Wrench, trend: "-3%", trendUp: false, color: "from-orange-500 to-red-400" },
    { label: "Available", value: "7", icon: CheckCircle, trend: "+2", trendUp: true, color: "from-green-500 to-emerald-400" }
  ];

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Assets", icon: Package },
    { name: "Employees", icon: Users },
    { name: "Repairs", icon: Wrench },
    { name: "Settings", icon: Settings }
  ];

  const assets = [
    { id: "BTC-001", type: "Laptop", model: "MacBook Pro 16\"", serial: "C02XG0FDH7JY", assignedTo: "Sarah Chen", status: "Active", location: "New York Office", purchaseDate: "2023-08-15" },
    { id: "BTC-002", type: "Laptop", model: "Dell XPS 15", serial: "3KL9H93", assignedTo: "Mike Rodriguez", status: "Active", location: "San Francisco", purchaseDate: "2023-07-22" },
    { id: "BTC-003", type: "Laptop", model: "Lenovo ThinkPad X1", serial: "PF2XYZ91", assignedTo: "Jessica Park", status: "Active", location: "Austin Office", purchaseDate: "2023-09-10" },
    { id: "BTC-004", type: "Laptop", model: "HP EliteBook 840", serial: "5CD3456ABC", assignedTo: "David Kumar", status: "Active", location: "Chicago Office", purchaseDate: "2023-06-05" },
    { id: "BTC-005", type: "Monitor", model: "Dell UltraSharp 27\"", serial: "CN-0XYZ123", assignedTo: "Sarah Chen", status: "Active", location: "New York Office", purchaseDate: "2023-08-20" },
    { id: "BTC-006", type: "Monitor", model: "LG 34\" Ultrawide", serial: "407NDXYZ456", assignedTo: "Mike Rodriguez", status: "Active", location: "San Francisco", purchaseDate: "2023-07-25" },
    { id: "BTC-007", type: "Monitor", model: "Samsung 32\" 4K", serial: "SAM-789XYZ", assignedTo: "Jessica Park", status: "Active", location: "Austin Office", purchaseDate: "2023-09-12" },
    { id: "BTC-008", type: "Monitor", model: "Dell UltraSharp 27\"", serial: "CN-0ABC789", assignedTo: "David Kumar", status: "Active", location: "Chicago Office", purchaseDate: "2023-06-08" },
    { id: "BTC-009", type: "Mouse", model: "Logitech MX Master 3", serial: "LGI-MX3-001", assignedTo: "Sarah Chen", status: "Active", location: "New York Office", purchaseDate: "2023-08-22" },
    { id: "BTC-010", type: "Keyboard", model: "Magic Keyboard", serial: "APL-KB-789", assignedTo: "Mike Rodriguez", status: "Active", location: "San Francisco", purchaseDate: "2023-07-28" },
    { id: "BTC-011", type: "Webcam", model: "Webcam HD Pro", serial: "LOG-WC-456", assignedTo: "Jessica Park", status: "Active", location: "Austin Office", purchaseDate: "2023-09-15" },
    { id: "BTC-012", type: "Laptop", model: "MacBook Air M2", serial: "C02ZG0XYZ123", assignedTo: null, status: "Available", location: "Warehouse", purchaseDate: "2023-10-01" },
    { id: "BTC-013", type: "Laptop", model: "Dell Latitude 5420", serial: "7HJ9K32", assignedTo: null, status: "In Repair", location: "IT Department", purchaseDate: "2023-05-12" },
    { id: "BTC-014", type: "Monitor", model: "BenQ 27\" Designer", serial: "BNQ-789XYZ", assignedTo: null, status: "Available", location: "Warehouse", purchaseDate: "2023-10-05" },
    { id: "BTC-015", type: "Laptop", model: "HP ProBook 450", serial: "5CD9876ZXY", assignedTo: null, status: "In Repair", location: "IT Department", purchaseDate: "2023-04-18" }
  ];

  const employees = [
    { 
      name: "Sarah Chen", 
      department: "Engineering", 
      avatar: "SC",
      equipment: [
        { type: "Laptop", model: "MacBook Pro 16\"", icon: Laptop },
        { type: "Monitor", model: "Dell UltraSharp 27\"", icon: Monitor },
        { type: "Mouse", model: "Logitech MX Master 3", icon: MousePointer2 }
      ]
    },
    { 
      name: "Mike Rodriguez", 
      department: "Product", 
      avatar: "MR",
      equipment: [
        { type: "Laptop", model: "Dell XPS 15", icon: Laptop },
        { type: "Monitor", model: "LG 34\" Ultrawide", icon: Monitor },
        { type: "Keyboard", model: "Magic Keyboard", icon: Keyboard }
      ]
    },
    { 
      name: "Jessica Park", 
      department: "Marketing", 
      avatar: "JP",
      equipment: [
        { type: "Laptop", model: "Lenovo ThinkPad X1", icon: Laptop },
        { type: "Monitor", model: "Samsung 32\" 4K", icon: Monitor },
        { type: "Webcam", model: "Webcam HD Pro", icon: Video }
      ]
    },
    { 
      name: "David Kumar", 
      department: "Finance", 
      avatar: "DK",
      equipment: [
        { type: "Laptop", model: "HP EliteBook 840", icon: Laptop },
        { type: "Monitor", model: "Dell UltraSharp 27\"", icon: Monitor }
      ]
    }
  ];

  const repairs = [
    { ticketId: "REP-001", asset: "Dell Latitude 5420", issue: "Battery not charging", status: "In Progress", tech: "John Smith", dateOpened: "2024-01-15" },
    { ticketId: "REP-002", asset: "HP ProBook 450", issue: "Screen flickering", status: "Open", tech: "Emily Johnson", dateOpened: "2024-01-18" },
    { ticketId: "REP-003", asset: "MacBook Pro 14\"", issue: "Keyboard malfunction", status: "Completed", tech: "John Smith", dateOpened: "2024-01-10" },
    { ticketId: "REP-004", asset: "Dell Monitor 24\"", issue: "No display output", status: "In Progress", tech: "Emily Johnson", dateOpened: "2024-01-16" },
    { ticketId: "REP-005", asset: "Logitech Webcam", issue: "Camera not detected", status: "Completed", tech: "John Smith", dateOpened: "2024-01-12" },
    { ticketId: "REP-006", asset: "ThinkPad X1 Carbon", issue: "Fan noise issue", status: "Open", tech: "Emily Johnson", dateOpened: "2024-01-19" }
  ];

  const filteredAssets = assets.filter(asset => 
    asset.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (asset.assignedTo && asset.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "In Repair": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Available": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Open": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "In Progress": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col"
      >
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Big Think</h1>
              <p className="text-xs text-gray-400">Capital</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <motion.button
                key={item.name}
                whileHover={{ x: 4 }}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </motion.button>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold text-white mb-2">Asset Dashboard</h2>
            <p className="text-gray-400">Monitor and manage your IT infrastructure</p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`flex items-center gap-1 text-sm ${stat.trendUp ? "text-green-400" : "text-red-400"}`}>
                        {stat.trendUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span>{stat.trend}</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Assets Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Asset Inventory</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Asset ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Type</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Model</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Serial Number</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Assigned To</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Location</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Purchase Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssets.map((asset, index) => (
                    <motion.tr
                      key={asset.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      className="border-b border-white/5"
                    >
                      <td className="py-3 px-4 text-blue-400 font-mono text-sm">{asset.id}</td>
                      <td className="py-3 px-4 text-white text-sm">{asset.type}</td>
                      <td className="py-3 px-4 text-white text-sm">{asset.model}</td>
                      <td className="py-3 px-4 text-gray-400 font-mono text-sm">{asset.serial}</td>
                      <td className="py-3 px-4 text-white text-sm">{asset.assignedTo || "-"}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                          {asset.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-400 text-sm">{asset.location}</td>
                      <td className="py-3 px-4 text-gray-400 text-sm">{asset.purchaseDate}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Employee Assignments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Employee Assignments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {employees.map((employee, index) => (
                <motion.div
                  key={employee.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
                      {employee.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{employee.name}</h4>
                      <p className="text-gray-400 text-sm">{employee.department}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {employee.equipment.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Icon className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">{item.model}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Repair Log */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Recent Repair Tickets</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Ticket ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Asset</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Issue Description</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Assigned Tech</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Date Opened</th>
                  </tr>
                </thead>
                <tbody>
                  {repairs.map((repair, index) => (
                    <motion.tr
                      key={repair.ticketId}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                      className="border-b border-white/5"
                    >
                      <td className="py-3 px-4 text-blue-400 font-mono text-sm">{repair.ticketId}</td>
                      <td className="py-3 px-4 text-white text-sm">{repair.asset}</td>
                      <td className="py-3 px-4 text-gray-300 text-sm">{repair.issue}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(repair.status)}`}>
                          {repair.status === "Open" && <AlertCircle className="w-3 h-3" />}
                          {repair.status === "In Progress" && <Clock className="w-3 h-3" />}
                          {repair.status === "Completed" && <CheckCircle className="w-3 h-3" />}
                          {repair.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-300 text-sm">{repair.tech}</td>
                      <td className="py-3 px-4 text-gray-400 text-sm">{repair.dateOpened}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}