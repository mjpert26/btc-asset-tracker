"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCards from "@/components/StatsCards";
import Charts from "@/components/Charts";
import DataTable from "@/components/DataTable";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0F172A]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-[1600px] mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Asset Overview</h1>
              <p className="text-gray-400">Monitor and manage your IT assets</p>
            </div>
            <StatsCards />
            <Charts />
            <DataTable />
          </div>
        </main>
      </div>
    </div>
  );
}