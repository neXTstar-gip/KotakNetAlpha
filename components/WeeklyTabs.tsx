"use client";

import { useState } from "react";
import AnimeCard from "./AnimeCard";

export default function WeeklyTabs({ weekly }: { weekly: any }) {
  const days = Object.keys(weekly);

  const [currentDay, setCurrentDay] = useState(days[0]);

  return (
    <div className="mt-10">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setCurrentDay(day)}
            className={`px-4 py-2 rounded-lg text-sm ${
              currentDay === day
                ? "bg-red-500 text-white"
                : "bg-[#1a1a1a] text-gray-300"
            }`}
          >
            {day.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4 mt-5">
        {weekly[currentDay]?.map((anime: any) => (
          <AnimeCard key={anime.mal_id} {...anime} />
        ))}
      </div>
    </div>
  );
}