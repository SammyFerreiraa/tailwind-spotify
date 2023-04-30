import Image from "next/image";
import React from "react";

function MadeSongs() {
  return (
    <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image
        src="/album.jpeg"
        className="w-full"
        width={100}
        height={100}
        alt="Foto do Album"
      />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-xs text-zinc-500">
        Wallows, COIN, girl in red and more
      </span>
    </a>
  );
}

export default MadeSongs;
