import React from 'react';
import { Calendar } from 'lucide-react';
import { sportsData } from '../data/sportsData';

export default function ScheduleSection() {
  const handleScrollToSport = (sportId) => {
    const element = document.getElementById(`sport-${sportId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="schedule" className="py-10 bg-black border-b-2 border-white/30 md:border-b-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest block mb-1 flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-yellow-400" />
            Tournament Schedule
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Match Timeline
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Click any date section to jump directly to the sport details below.
          </p>
        </div>

        {/* ─── DESKTOP HORIZONTAL TIMELINE ─── */}
        <div className="hidden md:block relative h-64 my-4 px-2">
          
          {/* Main White Horizontal Line */}
          <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-white -translate-y-1/2 z-0" />

          {/* 8 Columns Grid */}
          <div className="grid grid-cols-8 gap-2 relative z-10 h-full">
            {sportsData.map((sport, index) => {
              const isAbove = index % 2 === 0;

              return (
                <div key={sport.id} className="relative flex justify-center items-center h-full">
                  
                  {isAbove ? (
                    /* Above Item: Card Section & Stem ABOVE the Main White Line */
                    <div className="absolute bottom-1/2 flex flex-col items-center pb-0 z-10">
                      {/* Card Section */}
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="group w-full max-w-[130px] p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-yellow-400 hover:bg-slate-800/90 transition-all duration-200 cursor-pointer shadow-xl hover:scale-105 text-center mb-1"
                      >
                        <div className="text-[11px] font-bold text-white font-mono group-hover:text-white">
                          {sport.dateDisplay}
                        </div>
                        <div className="text-xs font-extrabold text-white mt-0.5 truncate group-hover:text-yellow-300 transition-colors">
                          {sport.title}
                        </div>
                      </button>

                      {/* Stem Connecting Card to Node */}
                      <div className="w-0.5 h-6 bg-white/70" />

                      {/* Red Node with White Border sitting on the Main White Line */}
                      <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg shadow-red-500/40 translate-y-1/2 z-20 transition-transform duration-200 hover:scale-125" />
                    </div>
                  ) : (
                    /* Below Item: Card Section & Stem BELOW the Main White Line */
                    <div className="absolute top-1/2 flex flex-col items-center pt-0 z-10">
                      {/* Red Node with White Border sitting on the Main White Line */}
                      <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg shadow-red-500/40 -translate-y-1/2 z-20 transition-transform duration-200 hover:scale-125" />

                      {/* Stem Connecting Node to Card */}
                      <div className="w-0.5 h-6 bg-white/70" />

                      {/* Card Section */}
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="group w-full max-w-[130px] p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-yellow-400 hover:bg-slate-800/90 transition-all duration-200 cursor-pointer shadow-xl hover:scale-105 text-center mt-1"
                      >
                        <div className="text-[11px] font-bold text-white font-mono group-hover:text-white">
                          {sport.dateDisplay}
                        </div>
                        <div className="text-xs font-extrabold text-white mt-0.5 truncate group-hover:text-yellow-300 transition-colors">
                          {sport.title}
                        </div>
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* ─── MOBILE VERTICAL ALTERNATING TIMELINE ─── */}
        <div className="block md:hidden relative py-4 my-2">
          
          {/* Centered White Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-white z-0" />

          {/* Alternating Grid Rows */}
          <div className="space-y-5 relative z-10">
            {sportsData.map((sport, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={sport.id} className="grid grid-cols-2 gap-0 relative items-center min-h-[58px]">
                  
                  {/* Red Node Dot with White Border Centered on White Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-md shadow-red-500/30 z-20" />

                  {isLeft ? (
                    /* Left Detail Box in Column 1 */
                    <div className="col-start-1 pr-3">
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="w-full bg-slate-900 border border-slate-700 hover:border-yellow-400 active:scale-95 p-2.5 rounded-xl transition-all text-center cursor-pointer shadow-lg"
                      >
                        <div className="text-[10px] font-bold text-white font-mono">
                          {sport.dateDisplay}
                        </div>
                        <div className="text-xs font-extrabold text-white mt-0.5 truncate">
                          {sport.title}
                        </div>
                      </button>
                    </div>
                  ) : (
                    /* Right Detail Box in Column 2 */
                    <div className="col-start-2 pl-3">
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="w-full bg-slate-900 border border-slate-700 hover:border-yellow-400 active:scale-95 p-2.5 rounded-xl transition-all text-center cursor-pointer shadow-lg"
                      >
                        <div className="text-[10px] font-bold text-white font-mono">
                          {sport.dateDisplay}
                        </div>
                        <div className="text-xs font-extrabold text-white mt-0.5 truncate">
                          {sport.title}
                        </div>
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
