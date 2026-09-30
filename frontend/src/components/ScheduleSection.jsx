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
    <section id="schedule" className="relative overflow-hidden border-y border-white/10 bg-black py-12 sm:py-14">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="inline-flex items-center justify-center gap-1.5 text-[13px] sm:text-sm font-extrabold uppercase tracking-[0.24em] text-white">
            <Calendar className="w-3.5 h-3.5 text-white" />
            Tournament Schedule
          </h2>
        </div>

        {/* ─── DESKTOP HORIZONTAL TIMELINE ─── */}
        <div className="hidden md:block relative h-72 my-4 px-2">
          
          {/* Main White Horizontal Line */}
          <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-y-1/2 z-0" />

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
                        className="group w-full max-w-[145px] rounded-2xl border border-white/10 bg-transparent p-3 text-center text-white shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                      >
                        <div className="mx-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-2.5 py-1 text-[11px] font-bold font-mono tracking-wide text-white/90 group-hover:bg-white/5 group-hover:text-white">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-2 truncate text-[13px] font-extrabold leading-tight text-white transition-colors group-hover:text-white">
                          {sport.title}
                        </div>
                      </button>

                      {/* Stem Connecting Card to Node */}
                      <div className="w-0.5 h-7 rounded-full bg-gradient-to-b from-white/0 via-white/70 to-white/0" />

                      {/* Red Node with White Border sitting on the Main White Line */}
                      <div className="w-5 h-5 rounded-full bg-red-500 translate-y-1/2 z-20 transition-transform duration-200 hover:scale-125" />
                    </div>
                  ) : (
                    /* Below Item: Card Section & Stem BELOW the Main White Line */
                    <div className="absolute top-1/2 flex flex-col items-center pt-0 z-10">
                      {/* Red Node with White Border sitting on the Main White Line */}
                      <div className="w-5 h-5 rounded-full bg-red-500 -translate-y-1/2 z-20 transition-transform duration-200 hover:scale-125" />

                      {/* Stem Connecting Node to Card */}
                      <div className="w-0.5 h-7 rounded-full bg-gradient-to-b from-white/0 via-white/70 to-white/0" />

                      {/* Card Section */}
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="group mt-1 w-full max-w-[145px] rounded-2xl border border-white/10 bg-transparent p-3 text-center text-white shadow-[0_14px_34px_rgba(0,0,0,0.32)] transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
                      >
                        <div className="mx-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-2.5 py-1 text-[11px] font-bold font-mono tracking-wide text-white/90 group-hover:bg-white/5 group-hover:text-white">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-2 truncate text-[13px] font-extrabold leading-tight text-white transition-colors group-hover:text-white">
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
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-white/0 via-white/80 to-white/0 z-0" />

          {/* Alternating Grid Rows */}
          <div className="space-y-6 relative z-10">
            {sportsData.map((sport, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={sport.id} className="grid grid-cols-2 gap-0 relative items-center min-h-[72px]">
                  
                  {/* Connector line from the card to the center node */}
                  <div className={`absolute top-1/2 h-0.5 w-6 sm:w-8 -translate-y-1/2 bg-gradient-to-r from-white/0 via-white/70 to-white/0 z-10 ${isLeft ? 'left-1/2 -translate-x-full' : 'left-1/2'}`} />

                  {/* Red Node Dot with White Border Centered on White Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-red-500 z-20" />

                  {isLeft ? (
                    /* Left Detail Box in Column 1 */
                    <div className="col-start-1 pr-5 sm:pr-6 flex justify-end">
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="w-full max-w-[135px] rounded-2xl border border-white/10 bg-transparent px-2.5 py-2.5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition-all active:scale-95 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
                      >
                        <div className="mx-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-2 py-1 text-[10px] font-bold font-mono tracking-wide text-white/90">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-1.5 truncate text-[13px] font-extrabold leading-tight text-white">
                          {sport.title}
                        </div>
                      </button>
                    </div>
                  ) : (
                    /* Right Detail Box in Column 2 */
                    <div className="col-start-2 pl-5 sm:pl-6 flex justify-start">
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="w-full max-w-[135px] rounded-2xl border border-white/10 bg-transparent px-2.5 py-2.5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition-all active:scale-95 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
                      >
                        <div className="mx-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-2 py-1 text-[10px] font-bold font-mono tracking-wide text-white/90">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-1.5 truncate text-[13px] font-extrabold leading-tight text-white">
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
