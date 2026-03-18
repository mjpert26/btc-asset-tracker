"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Laptop,
  Users,
  LogOut,
  Wrench,
  Search,
  ChevronDown,
  Package,
  User,
  CheckCircle,
  Calendar,
  ArrowUpDown,
} from "lucide-react";

type View = "dashboard" | "assets" | "employees" | "checkout" | "repair";

type Asset = {
  id: string;
  tag: string;
  type: string;
  brand: string;
  serial: string;
  status: "Available" | "Checked Out" | "In Repair" | "Retired";
  assignedTo: string;
  purchaseDate: string;
};

type Employee = {
  id: string;
  name: string;
  department: string;
  assets: string[];
};

type RepairEntry = {
  assetTag: string;
  issue: string;
  dateSubmitted: string;
  status: "Pending" | "In Progress" | "Completed";
  technician: string;
  resolution: string;
};

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [formData, setFormData] = useState({
    asset: "",
    employee: "",
    checkoutDate: "",
    returnDate: "",
    condition: "",
    notes: "",
  });

  const assets: Asset[] = [
    {
      id: "1",
      tag: "BTC-LT-001",
      type: "Laptop",
      brand: "MacBook Pro 16\" M3 Pro",
      serial: "C02ZX1ABMD6T",
      status: "Checked Out",
      assignedTo: "Sarah Chen",
      purchaseDate: "2024-01-15",
    },
    {
      id: "2",
      tag: "BTC-LT-002",
      type: "Laptop",
      brand: "MacBook Pro 16\" M3 Pro",
      serial: "C02ZX2BCMD6T",
      status: "Checked Out",
      assignedTo: "Marcus Rodriguez",
      purchaseDate: "2024-01-15",
    },
    {
      id: "3",
      tag: "BTC-LT-003",
      type: "Laptop",
      brand: "MacBook Air 13\" M3",
      serial: "C02ZX3CDMD6T",
      status: "Available",
      assignedTo: "—",
      purchaseDate: "2024-02-10",
    },
    {
      id: "4",
      tag: "BTC-LT-004",
      type: "Laptop",
      brand: "MacBook Air 13\" M3",
      serial: "C02ZX4DEMD6T",
      status: "Checked Out",
      assignedTo: "Jennifer Park",
      purchaseDate: "2024-02-10",
    },
    {
      id: "5",
      tag: "BTC-LT-005",
      type: "Laptop",
      brand: "Lenovo ThinkPad X1 Carbon",
      serial: "PF3QWER1",
      status: "In Repair",
      assignedTo: "—",
      purchaseDate: "2023-11-20",
    },
    {
      id: "6",
      tag: "BTC-MON-045",
      type: "Monitor",
      brand: "Dell U2723QE 27\" 4K",
      serial: "CN0ABCD123",
      status: "Checked Out",
      assignedTo: "David Kim",
      purchaseDate: "2023-09-05",
    },
    {
      id: "7",
      tag: "BTC-MON-046",
      type: "Monitor",
      brand: "Dell U2723QE 27\" 4K",
      serial: "CN0ABCD124",
      status: "Checked Out",
      assignedTo: "Sarah Chen",
      purchaseDate: "2023-09-05",
    },
    {
      id: "8",
      tag: "BTC-MON-047",
      type: "Monitor",
      brand: "Dell P2723DE 27\"",
      serial: "CN0ABCD125",
      status: "Available",
      assignedTo: "—",
      purchaseDate: "2023-10-12",
    },
    {
      id: "9",
      tag: "BTC-MON-048",
      type: "Monitor",
      brand: "Dell P2723DE 27\"",
      serial: "CN0ABCD126",
      status: "Checked Out",
      assignedTo: "Emily Watson",
      purchaseDate: "2023-10-12",
    },
    {
      id: "10",
      tag: "BTC-ACC-112",
      type: "Mouse",
      brand: "Logitech MX Master 3S",
      serial: "2347LOGI001",
      status: "Checked Out",
      assignedTo: "Marcus Rodriguez",
      purchaseDate: "2024-01-20",
    },
    {
      id: "11",
      tag: "BTC-ACC-113",
      type: "Mouse",
      brand: "Logitech MX Master 3S",
      serial: "2347LOGI002",
      status: "Available",
      assignedTo: "—",
      purchaseDate: "2024-01-20",
    },
    {
      id: "12",
      tag: "BTC-ACC-114",
      type: "Keyboard",
      brand: "Logitech MX Keys",
      serial: "2347LOGI003",
      status: "Checked Out",
      assignedTo: "Jennifer Park",
      purchaseDate: "2024-01-22",
    },
    {
      id: "13",
      tag: "BTC-ACC-115",
      type: "Dock",
      brand: "CalDigit TS4 Thunderbolt",
      serial: "TS4-001234",
      status: "Checked Out",
      assignedTo: "Sarah Chen",
      purchaseDate: "2023-12-01",
    },
    {
      id: "14",
      tag: "BTC-ACC-116",
      type: "Headphones",
      brand: "AirPods Pro (2nd gen)",
      serial: "APODS-987654",
      status: "Available",
      assignedTo: "—",
      purchaseDate: "2024-03-15",
    },
    {
      id: "15",
      tag: "BTC-LT-006",
      type: "Laptop",
      brand: "MacBook Pro 16\" M3 Pro",
      serial: "C02ZX5EFMD6T",
      status: "Retired",
      assignedTo: "—",
      purchaseDate: "2022-06-10",
    },
  ];

  const employees: Employee[] = [
    {
      id: "1",
      name: "Sarah Chen",
      department: "IT Manager",
      assets: ["BTC-LT-001", "BTC-MON-046", "BTC-ACC-115"],
    },
    {
      id: "2",
      name: "Marcus Rodriguez",
      department: "Sales Director",
      assets: ["BTC-LT-002", "BTC-ACC-112"],
    },
    {
      id: "3",
      name: "Jennifer Park",
      department: "Marketing Manager",
      assets: ["BTC-LT-004", "BTC-ACC-114"],
    },
    {
      id: "4",
      name: "David Kim",
      department: "Operations Lead",
      assets: ["BTC-MON-045"],
    },
    {
      id: "5",
      name: "Emily Watson",
      department: "Finance Director",
      assets: ["BTC-MON-048"],
    },
    {
      id: "6",
      name: "Robert Chen",
      department: "Executive",
      assets: [],
    },
    {
      id: "7",
      name: "Lisa Martinez",
      department: "Sales",
      assets: [],
    },
    {
      id: "8",
      name: "James Anderson",
      department: "IT Support",
      assets: [],
    },
  ];

  const repairLog: RepairEntry[] = [
    {
      assetTag: "BTC-LT-005",
      issue: "Keyboard keys not responding",
      dateSubmitted: "2024-03-10",
      status: "In Progress",
      technician: "James Anderson",
      resolution: "Keyboard replacement ordered",
    },
    {
      assetTag: "BTC-MON-049",
      issue: "Monitor dead pixels",
      dateSubmitted: "2024-03-05",
      status: "Completed",
      technician: "Sarah Chen",
      resolution: "Replaced under warranty",
    },
    {
      assetTag: "BTC-LT-007",
      issue: "MacBook battery swelling",
      dateSubmitted: "2024-02-28",
      status: "Completed",
      technician: "James Anderson",
      resolution: "Battery replaced at Apple Store",
    },
    {
      assetTag: "BTC-ACC-117",
      issue: "Docking station not charging",
      dateSubmitted: "2024-03-15",
      status: "Pending",
      technician: "—",
      resolution: "—",
    },
    {
      assetTag: "BTC-LT-008",
      issue: "Laptop screen crack",
      dateSubmitted: "2024-01-20",
      status: "Completed",
      technician: "Sarah Chen",
      resolution: "Screen replaced",
    },
    {
      assetTag: "BTC-ACC-118",
      issue: "Mouse scroll wheel issue",
      dateSubmitted: "2024-03-12",
      status: "In Progress",
      technician: "James Anderson",
      resolution: "Testing replacement unit",
    },
  ];

  const stats = [
    {
      label: "Total Assets",
      value: assets.length,
      icon: Laptop,
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400",
    },
    {
      label: "Checked Out",
      value: assets.filter((a) => a.status === "Checked Out").length,
      icon: User,
      color: "from-green-500 to-green-600",
      textColor: "text-green-400",
    },
    {
      label: "Available",
      value: assets.filter((a) => a.status === "Available").length,
      icon: CheckCircle,
      color: "from-emerald-500 to-emerald-600",
      textColor: "text-emerald-400",
    },
    {
      label: "In Repair",
      value: assets.filter((a) => a.status === "In Repair").length,
      icon: Wrench,
      color: "from-orange-500 to-orange-600",
      textColor: "text-orange-400",
    },
  ];

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "assets", label: "All Assets", icon: Package },
    { id: "employees", label: "Employees", icon: Users },
    { id: "checkout", label: "Check-out", icon: LogOut },
    { id: "repair", label: "Repair Log", icon: Wrench },
  ];

  const filteredAssets = assets.filter(
    (asset) =>
      asset.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAssets = [...filteredAssets].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a[sortColumn as keyof Asset];
    const bVal = b[sortColumn as keyof Asset];
    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400 border border-green-500/30";
      case "Checked Out":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "In Repair":
        return "bg-orange-500/20 text-orange-400 border border-orange-500/30";
      case "Retired":
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      case "In Progress":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      case "Completed":
        return "bg-green-500/20 text-green-400 border border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border border-gray-500/30";
    }
  };

  const isFormValid =
    formData.asset &&
    formData.employee &&
    formData.checkoutDate &&
    formData.returnDate &&
    formData.condition;

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      <aside className="w-72 bg-[#1E293B] border-r border-white/10 fixed h-screen">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-white">Big Think Capital</h1>
          <p className="text-sm text-gray-400 mt-1">IT Asset Management</p>
        </div>
        <nav className="p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as View)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                  isActive
                    ? "bg-[#1E40AF] text-white border-l-4 border-[#3B82F6]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="ml-72 flex-1 p-8">
        <AnimatePresence mode="wait">
          {currentView === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-2">
                  Asset Dashboard
                </h2>
                <p className="text-gray-400">{currentDate}</p>
              </div>

              <div className="grid grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={`text-4xl font-bold mb-1 ${stat.textColor}`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Recent Assets</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search assets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          <button
                            onClick={() => handleSort("tag")}
                            className="flex items-center gap-1 hover:text-white"
                          >
                            Asset Tag <ArrowUpDown className="w-4 h-4" />
                          </button>
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          <button
                            onClick={() => handleSort("type")}
                            className="flex items-center gap-1 hover:text-white"
                          >
                            Type <ArrowUpDown className="w-4 h-4" />
                          </button>
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Brand/Model
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Serial Number
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          <button
                            onClick={() => handleSort("status")}
                            className="flex items-center gap-1 hover:text-white"
                          >
                            Status <ArrowUpDown className="w-4 h-4" />
                          </button>
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Assigned To
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Purchase Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedAssets.map((asset, index) => (
                        <motion.tr
                          key={asset.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-3 px-4 text-white font-mono text-sm">
                            {asset.tag}
                          </td>
                          <td className="py-3 px-4 text-gray-300">{asset.type}</td>
                          <td className="py-3 px-4 text-gray-300">{asset.brand}</td>
                          <td className="py-3 px-4 text-gray-400 font-mono text-sm">
                            {asset.serial}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                asset.status
                              )}`}
                            >
                              {asset.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {asset.assignedTo}
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            {new Date(asset.purchaseDate).toLocaleDateString()}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === "assets" && (
            <motion.div
              key="assets"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-2">All Assets</h2>
                <p className="text-gray-400">Complete inventory of IT equipment</p>
              </div>

              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Asset Inventory ({assets.length} items)
                  </h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search assets..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          <button
                            onClick={() => handleSort("tag")}
                            className="flex items-center gap-1 hover:text-white"
                          >
                            Asset Tag <ArrowUpDown className="w-4 h-4" />
                          </button>
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          <button
                            onClick={() => handleSort("type")}
                            className="flex items-center gap-1 hover:text-white"
                          >
                            Type <ArrowUpDown className="w-4 h-4" />
                          </button>
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Brand/Model
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Serial Number
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          <button
                            onClick={() => handleSort("status")}
                            className="flex items-center gap-1 hover:text-white"
                          >
                            Status <ArrowUpDown className="w-4 h-4" />
                          </button>
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Assigned To
                        </th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">
                          Purchase Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedAssets.map((asset, index) => (
                        <motion.tr
                          key={asset.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-3 px-4 text-white font-mono text-sm">
                            {asset.tag}
                          </td>
                          <td className="py-3 px-4 text-gray-300">{asset.type}</td>
                          <td className="py-3 px-4 text-gray-300">{asset.brand}</td>
                          <td className="py-3 px-4 text-gray-400 font-mono text-sm">
                            {asset.serial}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                asset.status
                              )}`}
                            >
                              {asset.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-300">
                            {asset.assignedTo}
                          </td>
                          <td className="py-3 px-4 text-gray-400">
                            {new Date(asset.purchaseDate).toLocaleDateString()}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === "employees" && (
            <motion.div
              key="employees"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-white mb-2">Employees</h2>
                <p className="text-gray-400">Team members and their assigned equipment</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {employees.map((employee, index) => (
                  <motion.div
                    key={employee.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {employee.name}
                        </h3>
                        <p className="text-[#3B82F6] text-sm font-medium">
                          {employee.department}
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-gray-400 text-sm font-medium mb-2">
                        Assigned Equipment:
                      </p>
                      {employee.assets.length > 0 ? (
                        <div className="space-y-1">
                          {employee.assets.map((assetTag) => (
                            <div
                              key={assetTag}
                              className="text-white font-mono text-sm bg-white/5 px-3 py-2 rounded-lg"
                            >
                              {assetTag}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">No equipment assigned</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {currentView === "checkout" && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">