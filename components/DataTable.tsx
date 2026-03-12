"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download, ChevronDown } from "lucide-react";

interface Asset {
  id: string;
  type: string;
  model: string;
  serialNumber: string;
  assignedTo: string;
  status: "Active" | "In Repair" | "Available";
  location: string;
  purchaseDate: string;
}

const mockAssets: Asset[] = [
  {
    id: "BTC-001",
    type: "Laptop",
    model: "MacBook Pro 16\"",
    serialNumber: "C02XJ4SGJG5H",
    assignedTo: "Sarah Chen",
    status: "Active",
    location: "New York Office",
    purchaseDate: "2023-08-15"
  },
  {
    id: "BTC-002",
    type: "Laptop",
    model: "Dell XPS 15",
    serialNumber: "5CD3456FGH",
    assignedTo: "Mike Rodriguez",
    status: "Active",
    location: "San Francisco Office",
    purchaseDate: "2023-07-22"
  },
  {
    id: "BTC-003",
    type: "Laptop",
    model: "Lenovo ThinkPad X1",
    serialNumber: "PF2ABCD9",
    assignedTo: "Jessica Park",
    status: "Active",
    location: "Chicago Office",
    purchaseDate: "2023-09-10"
  },
  {
    id: "BTC-004",
    type: "Laptop",
    model: "HP EliteBook 840",
    serialNumber: "8CG4567HJK",
    assignedTo: "David Kumar",
    status: "In Repair",
    location: "Austin Office",
    purchaseDate: "2023-06-18"
  },
  {
    id: "BTC-005",
    type: "Monitor",
    model: "Dell UltraSharp 27\"",
    serialNumber: "CN-0K2MNP",
    assignedTo: "Sarah Chen",
    status: "Active",
    location: "New York Office",
    purchaseDate: "2023-08-20"
  },
  {
    id: "BTC-006",
    type: "Monitor",
    model: "LG 34\" Ultrawide",
    serialNumber: "LG34WK95U",
    assignedTo: "Mike Rodriguez",
    status: "Active",
    location: "San Francisco Office",
    purchaseDate: "2023-07-25"
  },
  {
    id: "BTC-007",
    type: "Monitor",
    model: "Samsung 32\" 4K",
    serialNumber: "S32UR59C",
    assignedTo: "Jessica Park",
    status: "Active",
    location: "Chicago Office",
    purchaseDate: "2023-09-15"
  },
  {
    id: "BTC-008",
    type: "Monitor",
    model: "Dell UltraSharp 27\"",
    serialNumber: "CN-0K3QRS",
    assignedTo: "David Kumar",
    status: "Active",
    location: "Austin Office",
    purchaseDate: "2023-06-20"
  },
  {
    id: "BTC-009",
    type: "Mouse",
    model: "Logitech MX Master 3",
    serialNumber: "LGI2345MX3",
    assignedTo: "Sarah Chen",
    status: "Active",
    location: "New York Office",
    purchaseDate: "2023-08-16"
  },
  {
    id: "BTC-010",
    type: "Keyboard",
    model: "Apple Magic Keyboard",
    serialNumber: "MRMH2LL/A",
    assignedTo: "Mike Rodriguez",
    status: "Active",
    location: "San Francisco Office",
    purchaseDate: "2023-07-23"
  },
  {
    id: "BTC-011",
    type: "Webcam",
    model: "Logitech Webcam HD Pro",
    serialNumber: "LGI9876WC",
    assignedTo: "Jessica Park",
    status: "Active",
    location: "Chicago Office",
    purchaseDate: "2023-09-12"
  },
  {
    id: "BTC-012",
    type: "Laptop",
    model: "MacBook Pro 16\"",
    serialNumber: "C02YK5THJG5K",
    assignedTo: "Unassigned",
    status: "Available",
    location: "Warehouse",
    purchaseDate: "2023-10-01"
  },
  {
    id: "BTC-013",
    type: "Monitor",
    model: "Dell UltraSharp 27\"",
    serialNumber: "CN-0K4XYZ",
    assignedTo: "Unassigned",
    status: "Available",
    location: "Warehouse",
    purchaseDate: "2023-10-02"
  },
  {
    id: "BTC-014",
    type: "Laptop",
    model: "Dell XPS 15",
    serialNumber: "5CD4567IJK",
    assignedTo: "Unassigned",
    status: "In Repair",
    location: "Repair Center",
    purchaseDate: "2023-05-14"
  },
  {
    id: "BTC-015",
    type: "Mouse",
    model: "Logitech MX Master 3",
    serialNumber: "LGI3456MX4",
    assignedTo: "Unassigned",
    status: "Available",
    location: "Warehouse",
    purchaseDate: "2023-10-03"
  }
];

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredAssets = mockAssets.filter(asset => {
    const matchesSearch = 
      asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || asset.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "In Repair":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Available":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Assets Inventory</h2>
          <p className="text-gray-400 text-sm">Manage and track all company assets</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 md:flex-none md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>
          
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="In Repair">In Repair</option>
              <option value="Available">Available</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white rounded-lg px-4 py-2 flex items-center gap-2 font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Asset ID</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Type</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Model</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Serial Number</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Assigned To</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Status</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Location</th>
              <th className="text-left py-4 px-4 text-gray-400 font-medium text-sm">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, index) => (
              <motion.tr
                key={asset.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <td className="py-4 px-4">
                  <span className="text-white font-medium group-hover:text-blue-400 transition-colors">{asset.id}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-300">{asset.type}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-300">{asset.model}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-400 font-mono text-sm">{asset.serialNumber}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-300">{asset.assignedTo}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-400 text-sm">{asset.location}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-gray-400 text-sm">{asset.purchaseDate}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAssets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No assets found matching your criteria</p>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <p className="text-gray-400 text-sm">
          Showing {filteredAssets.length} of {mockAssets.length} assets
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <button className="px-3 py-1 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded text-white font-medium">
            1
          </button>
          <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-white hover:bg-white/10 transition-colors">
            2
          </button>
          <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-white hover:bg-white/10 transition-colors">
            3
          </button>
          <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-white hover:bg-white/10 transition-colors">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  );
}