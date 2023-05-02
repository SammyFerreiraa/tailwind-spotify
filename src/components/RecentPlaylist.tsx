import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const RecentPl = [
  { name: "Hits da Internet", capa: "/hits.jpeg", id: 1},
  { name: "Marília Mendonça", capa: "/album.jpeg", id: 2},
  { name: "Top 50 - Global", capa: "/top50.jpeg", id: 3},
  { name: "Viral Hits", capa: "/viral.jpeg", id: 4},
  { name: "Top 50 - Brasil", capa: "/brazil.jpeg", id: 5},
  { name: "Pisa e Sofre", capa: "/pes.jpeg", id: 6},
];

function NewPlaylist() {
  return (
    <>
      {RecentPl.map((item) => (
        <a
          href="#" key={item.id}
          className="bg-white/5 group rounded flex items-center gap-4 hover:bg-white/10 transition-all ease-in-out duration-300 "
        >
          <Image src={item.capa} width={100} height={100} alt="Foto do Album" />
          <strong>{item.name}</strong>
          <button className="w-12 h-12 rounded-full pl-1 bg-green-600 text-black ml-auto mr-6 flex items-center justify-center invisible group-hover:visible">
            <Play />
          </button>
        </a>
      ))}
    </>
  );
}

export default NewPlaylist;
