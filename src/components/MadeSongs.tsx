import Image from "next/image";
import React from "react";

const ForYou = [
  {
    name: "Daily Mix 1",
    img: "/fy1.jpeg",
    authors: "Billie Eilish, Medasin, Olivia O'Brien e mais",
    id: 1
  },
  {
    name: "Daily Mix 2",
    img: "/fy2.jpeg",
    authors: "JNS, 90s Pop Tour, JEANS e mais",
    id: 2
  },
  {
    name: "Daily Mix 3",
    img: "/fy3.jpeg",
    authors: "Eminem, Busta Rhymes, Jack Harlow e maiss",
    id: 3
  },
  {
    name: "Daily Mix 4",
    img: "/fy4.jpeg",
    authors: "Sia, Lewis Capaldi, James Arthur e mais",
    id: 4
  },
  {
    name: "Daily Mix 5",
    img: "/fy5.jpeg",
    authors: "Febem, TOKIODK, SD9 e mais",
    id: 5
  },
  {
    name: "Daily Mix 6",
    img: "/fy6.jpeg",
    authors: "Lorde, Lana Del Rey, King Princess e mais",
    id: 6
  },
];

function MadeSongs() {
  return (
    <>
      {ForYou.map((item) => (
        <a key={item.id} className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
          <Image
            src={item.img}
            className="w-full"
            width={100}
            height={100}
            alt="Foto do Album"
          />
          <strong className="font-semibold">{item.name}</strong>
          <span className="text-xs text-zinc-500">
            {item.authors}
          </span>
        </a>
      ))}
    </>
  );
}

export default MadeSongs;
