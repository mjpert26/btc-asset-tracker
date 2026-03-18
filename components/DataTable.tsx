"use client";
import { motion } from "framer-motion";
import { Search, ArrowUpDown, Calendar } from "lucide-react";
import { useState } from "react";

interface Asset {
  id: string;
  assetTag: string;
  type: string;
  brand: string;
  serialNumber: string;
  status: "Available" | "Checked Out" | "In Repair" | "Retired";
  assignedTo: string;
  purchaseDate: string;
}

export default function DataTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState<keyof Asset | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const [assets] = useState<Asset[]>([
    {
      id: "1",
      assetTag: "BTC-LT-001",
      type: "Laptop",
      brand: "MacBook Pro 16\" M3 Pro (36GB/512GB)",
      serialNumber: "MNW83LL/A-5847",
      status: "Checked Out",
      assignedTo: "Sarah Chen",
      purchaseDate: "2024-01-15"
    },
    {
      id: "2",
      assetTag: "BTC-LT-002",
      type: "Laptop",
      brand: "MacBook Pro 16\" M3 Pro (18GB/512GB)",
      serialNumber: "MNW83LL/A-5848",
      status: "Checked Out",
      assignedTo: "Marcus Rodriguez",
      purchaseDate: "2024-01-15"
    },
    {
      id: "3",
      assetTag: "BTC-LT-003",
      type: "Laptop",
      brand: "MacBook Air 13\" M3 (16GB/512GB)",
      serialNumber: "MRXN3LL/A-2947",
      status: "Checked Out",
      assignedTo: "Jennifer Patel",
      purchaseDate: "2024-02-10"
    },
    {
      id: "4",
      assetTag: "BTC-LT-004",
      type: "Laptop",
      brand: "Lenovo ThinkPad X1 Carbon Gen 11",
      serialNumber: "PF3QWRT8-1102",
      status: "Available",
      assignedTo: "—",
      purchaseDate: "2023-11-20"
    },
    {
      id: "5",
      assetTag: "BTC-LT-005",
      type: "Laptop",
      brand: "MacBook Pro 14\" M3 Pro (18GB/1TB)",
      serialNumber: "MNW93LL/A-6721",
      status: "Checked Out",
      assignedTo: "David Kim",
      purchaseDate: "2024-03-05"
    },
    {
      id: "6",
      assetTag: "BTC-MON-045",
      type: "Monitor",
      brand: "Dell U2723QE 27\" 4K USB-C",
      serialNumber: "CN-0WMD42-5829",
      status: "Checked Out",
      assignedTo: "Sarah Chen",
      purchaseDate: "2023-09-12"
    },
    {
      id: "7",
      assetTag: "BTC-MON-046",
      type: "Monitor",
      brand: "Dell P2723DE 27\" QHD",
      serialNumber: "CN-0WMD42-5830",
      status: "Checked Out",
      assignedTo: "Marcus Rodriguez",
      purchaseDate: "2023-09-12"
    },
    {
      id: "8",
      assetTag: "BTC-ACC-112",
      type: "Mouse",
      brand: "Logitech MX Master 3S",
      serialNumber: "LGT-2304-8847",
      status: "Checked Out",
      assignedTo: "Jennifer Patel",
      purchaseDate: "2023-08-22"
    },
    {
      id: "9",
      assetTag: "BTC-ACC-113",
      type: "Keyboard",
      brand: "Logitech MX Keys",
      serialNumber: "LGT-2304-8901",
      status: "Available",
      assignedTo: "—",
      purchaseDate: "2023-08-22"
    },
    {
      id: "10",
      assetTag: "BTC-DOC-078",
      type: "Docking Station",
      brand: "CalDigit TS4 Thunderbolt 4",
      serialNumber: "CD-TS4-9921",
      status: "Checked Out",
      assignedTo: "David Kim",
      purchaseDate: "2023-10-18"
    },
    {
      id: "11",
      assetTag: "BTC-LT-006",
      type: "Laptop",
      brand: "MacBook Air 13\" M3 (24GB/512GB)",
      serialNumber: "MRXN3LL/A-2948",
      status: "In Repair",
      assignedTo: "Emily Johnson",
      purchaseDate: "2024-02-10"
    },
    {
      id: "12",
      assetTag: "BTC-ACC-114",
      type: "Earphones",
      brand: "AirPods Pro (2nd gen)",
      serialNumber: "MTJV3AM/A-4429",
      status: "Checked Out",
      assignedTo: "Michael Torres",
      purchaseDate: "2023-07-14"
    },
    {
      id: "13",
      assetTag: "BTC-MON-047",
      type: "Monitor",
      brand: "Dell U2723QE 27\" 4K USB-C",
      serialNumber: "CN-0WMD42-5831",
      status: "Available",
      assignedTo: "—",
      purchaseDate: "2023-09-12"
    },
    {
      id: "14",
      assetTag: "BTC-LT-007",
      type: "Laptop",
      brand: "MacBook Pro 16\" M3 Pro (36GB/1TB)",
      serialNumber: "MNW83LL/A-5849",
      status: "Checked Out",
      assignedTo: "Rebecca Foster",
      purchaseDate: "2024-01-20"
    },
    {
      id: "15",
      assetTag: "BTC-DOC-079",
      type: "Docking Station",
      brand: "CalDigit TS4 Thunderbolt 4",
      serialNumber: "CD-TS4-9922",
      status: "In Repair",
      assignedTo: "—",
      purchaseDate: "2023-10-18"
    }
  ]);

  const handleSort = (column: keyof Asset) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredAssets = assets.filter(asset => {
    const query = searchQuery.toLowerCase();
    return (
      asset.assetTag.toLowerCase().includes(query) ||
      asset.type.toLowerCase().includes(query) ||
      asset.brand.toLowerCase().includes(query) ||
      asset.serialNumber.toLowerCase().includes(query) ||
      asset.status.toLowerCase().includes(query) ||
      asset.assignedTo.toLowerCase().includes(query) ||
      asset.purchaseDate.includes(query)
    );
  });

  const sortedAssets = [...filteredAssets].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    
    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const getStatusColor = (status: Asset["status"]) => {
    switch (status) {
      case "Available":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      case "Checked Out":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
      case "In Repair":
        return "bg-orange-500/10 text-orange-400 border border-orange-500/20";
      case "Retired":
        return "bg-gray-500/10 text-gray-400 border border-gray-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border border-gray-500/20";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">All Assets</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors w-64"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleSort("assetTag")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  Asset Tag
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleSort("type")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  Type
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleSort("brand")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  Brand/Model
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleSort("serialNumber")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  Serial Number
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleSort("status")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  Status
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleSort("assignedTo")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  Assigned To
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                <button
                  onClick={() => handleSort("purchaseDate")}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  Purchase Date
                  <ArrowUpDown className="w-4 h-4" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedAssets.map((asset, index) => (
              <motion.tr
                key={asset.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
              >
                <td className="py-4 px-4 text-sm font-medium text-white">{asset.assetTag}</td>
                <td className="py-4 px-4 text-sm text-gray-300">{asset.type}</td>
                <td className="py-4 px-4 text-sm text-gray-300 max-w-xs">{asset.brand}</td>
                <td className="py-4 px-4 text-sm text-gray-400 font-mono">{asset.serialNumber}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-300">{asset.assignedTo}</td>
                <td className="py-4 px-4 text-sm text-gray-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(asset.purchaseDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedAssets.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No assets found matching your search.
        </div>
      )}
    </motion.div>
  );
}