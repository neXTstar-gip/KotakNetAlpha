"use client";

import Image from "next/image";

interface AnimeCardProps {
  mal_id: number;
  title: string;
  images: any;
  score: number;
}

export default function AnimeCard({ mal_id, title, images, score }: AnimeCardProps) {
  return (
    <a
      href={`/anime/${mal_id}`}
      className="group relative rounded-xl overflow-hidden bg-[#101012] border border-[#222] hover:border-[#444] transition-all"
    >
      <Image
        src={images.jpg.image_url}
        alt={title}
        width={300}
        height={400}
        className="w-full h-[240px] object-cover group-hover:opacity-80 transition"
      />

      <div className="p-3">
        <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
          {title}
        </h3>

        <p className="text-xs text-yellow-400 font-semibold">
          ⭐ {score || "N/A"}
        </p>
      </div>
    </a>
  );
}