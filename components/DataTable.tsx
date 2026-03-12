"use client";

import { motion } from "framer-motion";
import { Search, Filter, Download, MoreVertical, Laptop, Monitor, Package } from "lucide-react";
import { useState } from "react";

const mockAssets = [
  {
    id: "BTC-LP-001",
    type: "Laptop",
    model: "Dell XPS 15",
    serial: "SN9487652341",
    status: "Active",
    assignedTo: "Sarah Johnson",
    purchaseDate: "2023-05-12",
    location: "New York Office",
    department: "Engineering",
    condition: "Excellent"
  },
  {
    id: "BTC-LP-002",
    type: "Laptop",
    model: "MacBook Pro 16\"",
    serial: "SNC02734MDKX",
    status: "Active",
    assignedTo: "Michael Chen",
    purchaseDate: "2023-08-20",
    location: "San Francisco",
    department: "Finance",
    condition: "Good"
  },
  {
    id: "BTC-LP-003",
    type: "Laptop",
    model: "Lenovo ThinkPad X1",
    serial: "PF3JKL92",
    status: "In Repair",
    assignedTo: "Jessica Martinez",
    purchaseDate: "2022-11-05",
    location: "Austin Office",
    department: "Sales",
    condition: "Fair"
  },
  {
    id: "BTC-MN-001",
    type: "Monitor",
    model: "Dell UltraSharp 27\"",
    serial: "CNOK8374H",
    status: "Active",
    assignedTo: "David Park",
    purchaseDate: "2023-03-15",
    location: "New York Office",
    department: "Engineering",
    condition: "Excellent"
  },
  {
    id: "BTC-MN-002",
    type: "Monitor",
    model: "LG 27\" 4K",
    serial: "LG827493KL",
    status: "Active",
    assignedTo: "Emily Rodriguez",
    purchaseDate: "2023-06-22",
    location: "Chicago Office",
    department: "Operations",
    condition: "Good"
  },
  {
    id: "BTC-PR-001",
    type: "Peripheral",
    model: "Logitech MX Master 3",
    serial: "LG2948573",
    status: "Active",
    assignedTo: "Sarah Johnson",
    purchaseDate: "2023-05-12",
    location: "New York Office",
    department: "Engineering",
    condition: "Excellent"
  },
  {
    id: "BTC-LP-004",
    type: "Laptop",
    model: "HP EliteBook 840",
    serial: "HP9483KL23",
    status: "Active",
    assignedTo: "James Wilson",
    purchaseDate: "2023-07-08",
    location: "Boston Office",
    department: "Finance",
    condition: "Good"
  },
  {
    id: "BTC-MN-003",
    type: "Monitor",
    model: "Samsung 32\" Curved",
    serial: "SAM8473KL2",
    status: "Available",
    assignedTo: "-",
    purchaseDate: "2023-09-01",
    location: "Warehouse",
    department: "-",
    condition: "New"
  },
  {
    id: "BTC-PR-002",
    type: "Peripheral",
    model: "Bose QC45 Headphones",
    serial: "BS8473920",
    status: "Active",
    assignedTo: "Michael Chen",
    purchaseDate: "2023-08-20",
    location: "San Francisco",
    department: "Finance",
    condition: "Excellent"
  },
  {
    id: "BTC-LP-005",
    type: "Laptop",
    model: "ASUS ROG Zephyrus",
    serial: "AS9483KL29",
    status: "Active",
    assignedTo: "Alex Turner",
    purchaseDate: "2023-04-18",
    location: "Seattle Office",
    department: "Engineering",
    condition: "Good"
  },
  {
    id: "BTC-PR-003",
    type: "Peripheral",
    model: "Logitech C920 Webcam",
    serial: "LG8372940",
    status: "In Repair",
    assignedTo: "Jessica Martinez",
    purchaseDate: "2022-11-05",
    location: "Austin Office",
    department: "Sales",
    condition: "Fair"
  },
  {
    id: "BTC-LP-006",
    type: "Laptop",
    model: "Microsoft Surface Laptop 5",
    serial: "MS8473KL92",
    status: "Active",
    assignedTo: "Rachel Green",
    purchaseDate: "2023-02-28",
    location: "Miami Office",
    department: "Sales",
    condition: "Good"
  },
  {
    id: "BTC-MN-004",
    type: "Monitor",
    model: "BenQ 27\" Designer",
    serial: "BQ8473920",
    status: "Active",
    assignedTo: "David Park",
    purchaseDate: "2023-03-15",
    location: "New York Office",
    department: "Engineering",
    condition: "Excellent"
  },
  {
    id: "BTC-PR-004",
    type: "Peripheral",
    model: "CalDigit TS4 Dock",
    serial: "CD9483KL23",
    status: "Active",
    assignedTo: "Emily Rodriguez",
    purchaseDate: "2023-06-22",
    location: "Chicago Office",
    department: "Operations",
    condition: "Good"
  },
  {
    id: "BTC-LP-007",
    type: "Laptop",
    model: "Razer Blade 15",
    serial: "RZ8473920",
    status: "Active",
    assignedTo: "Tom Anderson",
    purchaseDate: "2023-01-10",
    location: "Los Angeles",
    department: "Engineering",
    condition: "Good"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "In Repair":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "Available":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Retired":
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Laptop":
      return <Laptop className="w-4 h-4" />;
    case "Monitor":
      return <Monitor className="w-4 h-4" />;
    case "Peripheral":
      return <Package className="w-4 h-4" />;
    default:
      return <Package className="w-4 h-4" />;
  }
};

export default function DataTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsset, setSelectedAsset] = useState<any>(null);

  const filteredAssets = mockAssets.filter(asset =>
    asset.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex-1 w-full sm:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1E293B] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filter
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Export
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1E293B] border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Asset ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Model</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Serial Number</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Assigned To</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Purchase Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset, index) => (
                  <motion.tr
                    key={asset.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedAsset(asset)}
                    className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">{asset.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        {getTypeIcon(asset.type)}
                        {asset.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{asset.model}</td>
                    <td className="px-6 py-4 text-sm font-mono text-gray-400">{asset.serial}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                        {asset.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">{asset.assignedTo}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{asset.purchaseDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{asset.location}</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="flex items-center justify-between px-2">
          <p className="text-sm text-gray-400">
            Showing <span className="text-white font-medium">{filteredAssets.length}</span> of <span className="text-white font-medium">{mockAssets.length}</span> assets
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors text-sm">
              Previous
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-lg text-white hover:opacity-90 transition-opacity text-sm">
              Next
            </button>
          </div>
        </div>
      </div>

      {selectedAsset && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedAsset(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1E293B] border border-white/10 rounded-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Asset Details</h2>
                <p className="text-gray-400">{selectedAsset.id}</p>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Type</p>
                <div className="flex items-center gap-2">
                  {getTypeIcon(selectedAsset.type)}
                  <p className="text-white font-medium">{selectedAsset.type}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Model</p>
                <p className="text-white font-medium">{selectedAsset.model}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Serial Number</p>
                <p className="text-white font-mono">{selectedAsset.serial}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Status</p>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedAsset.status)}`}>
                  {selectedAsset.status}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Assigned To</p>
                <p className="text-white font-medium">{selectedAsset.assignedTo}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Department</p>
                <p className="text-white font-medium">{selectedAsset.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Purchase Date</p>
                <p className="text-white font-medium">{selectedAsset.purchaseDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Location</p>
                <p className="text-white font-medium">{selectedAsset.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Condition</p>
                <p className="text-white font-medium">{selectedAsset.condition}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Assignment History</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{selectedAsset.assignedTo}</p>
                    <p className="text-sm text-gray-400">{selectedAsset.purchaseDate} - Present</p>
                  </div>
                  <span className="text-xs text-emerald-400">Current</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-lg text-white font-medium"
              >
                Reassign Asset
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
              >
                Edit Details
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}