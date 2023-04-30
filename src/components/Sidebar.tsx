import { HomeIcon, Library, Search } from "lucide-react";
import React from "react";

function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6 relative min-w-[13rem]">
      <div className="flex items-center gap-2 fixed">
        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
      </div>

      <nav className="space-y-5 mt-10 fixed">
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-50 "
          href=""
        >
          <HomeIcon />
          Home
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-50 "
          href=""
        >
          <Search />
          Search
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-50 "
          href=""
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="pt-6 border-t border-zinc-800 flex flex-col gap-3 mt-[175px] fixed">
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 ease-in-out duration-100"
          href=""
        >
          Funk Hits
        </a>
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 ease-in-out duration-100"
          href=""
        >
          Pop Up
        </a>
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 ease-in-out duration-100"
          href=""
        >
          Doja Cat
        </a>
        <a
          className="text-sm text-zinc-400 hover:text-zinc-100 ease-in-out duration-100"
          href=""
        >
          Marília Mendonça
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
