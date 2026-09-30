import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
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
                        className="group relative w-full max-w-[145px] rounded-2xl border border-white/15 bg-transparent px-3 pt-3 pb-5 text-center text-white shadow-[0_14px_34px_rgba(0,0,0,0.32)] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.42)] focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        <ChevronDown className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 text-red-500 opacity-90 transition-transform duration-200 group-hover:translate-y-[58%]" />
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 group-hover:text-white/80">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-1.5 truncate text-[13px] font-extrabold leading-tight text-white transition-colors group-hover:text-white">
                          {sport.title}
                        </div>
                      </button>

                      {/* Stem Connecting Card to Node */}
                      <div className="w-0.5 h-7 rounded-full bg-gradient-to-b from-white/0 via-white/70 to-white/0" />

                      {/* Red Node with White Border sitting on the Main White Line */}
                      <div className="w-3 h-3 rounded-full bg-red-500 translate-y-1/2 z-20 transition-transform duration-200 hover:scale-125" />
                    </div>
                  ) : (
                    /* Below Item: Card Section & Stem BELOW the Main White Line */
                    <div className="absolute top-1/2 flex flex-col items-center pt-0 z-10">
                      {/* Red Node with White Border sitting on the Main White Line */}
                      <div className="w-3 h-3 rounded-full bg-red-500 -translate-y-1/2 z-20 transition-transform duration-200 hover:scale-125" />

                      {/* Stem Connecting Node to Card */}
                      <div className="w-0.5 h-7 rounded-full bg-gradient-to-b from-white/0 via-white/70 to-white/0" />

                      {/* Card Section */}
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="group relative mt-1 w-full max-w-[145px] rounded-2xl border border-white/15 bg-transparent px-3 pt-3 pb-5 text-center text-white shadow-[0_14px_34px_rgba(0,0,0,0.32)] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.42)] focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        <ChevronDown className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 text-red-500 opacity-90 transition-transform duration-200 group-hover:translate-y-[58%]" />
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 group-hover:text-white/80">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-1.5 truncate text-[13px] font-extrabold leading-tight text-white transition-colors group-hover:text-white">
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
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 z-20" />

                  {isLeft ? (
                    /* Left Detail Box in Column 1 */
                    <div className="col-start-1 pr-5 sm:pr-6 flex justify-end">
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="group relative w-full max-w-[135px] rounded-2xl border border-white/15 bg-transparent px-2.5 pt-2.5 pb-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.24)] cursor-pointer transition-all active:scale-95 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_16px_34px_rgba(0,0,0,0.34)] focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        <ChevronDown className="absolute bottom-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 text-red-500 opacity-90 transition-transform duration-200 group-hover:translate-y-[58%]" />
                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-1 truncate text-[13px] font-extrabold leading-tight text-white">
                          {sport.title}
                        </div>
                      </button>
                    </div>
                  ) : (
                    /* Right Detail Box in Column 2 */
                    <div className="col-start-2 pl-5 sm:pl-6 flex justify-start">
                      <button
                        onClick={() => handleScrollToSport(sport.id)}
                        className="group relative w-full max-w-[135px] rounded-2xl border border-white/15 bg-transparent px-2.5 pt-2.5 pb-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.24)] cursor-pointer transition-all active:scale-95 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_16px_34px_rgba(0,0,0,0.34)] focus:outline-none focus:ring-2 focus:ring-white/30"
                      >
                        <ChevronDown className="absolute bottom-0 left-1/2 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 text-red-500 opacity-90 transition-transform duration-200 group-hover:translate-y-[58%]" />
                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                          {sport.dateDisplay}
                        </div>
                        <div className="mt-1 truncate text-[13px] font-extrabold leading-tight text-white">
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
