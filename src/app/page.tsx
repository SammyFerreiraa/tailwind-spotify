import Footer from "@/components/Footer";
import MadeSongs from "@/components/MadeSongs";
import RecentPlaylist from "@/components/RecentPlaylist";
import Sidebar from "@/components/Sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        {/* MAIN */}
        <main className="flex-1 p-6 mb-24 min-w-[1060px]">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 overflow-hidden mt-4">
            <RecentPlaylist />
          </div>

          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-3xl mt-10">
              Made for Sammy Ferreira
            </h1>
            <a href="#" className="mt-10 text-white/40 hover:text-white">
              Show All
            </a>
          </div>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <MadeSongs />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
