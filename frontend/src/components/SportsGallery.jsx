import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { sportsData } from '../data/sportsData';

export default function SportsGallery({ onRegisterSport }) {
  return (
    <section id="sports" className="py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Alternating Sports Event List */}
        <div className="space-y-20">
          {sportsData.map((sport, index) => {
            const isImageRight = index % 2 === 0;

            return (
              <div
                key={sport.id}
                id={`sport-${sport.id}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch scroll-mt-24"
              >
                {/* Text & Details Column */}
                <div className={`space-y-4 text-left flex flex-col justify-between h-full py-2 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{sport.title}</h3>
                    
                    <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                      {sport.description}
                    </p>
                  </div>

                  {/* Category Variants Breakdown */}
                  {sport.variants && sport.variants.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-red-500" />
                        Available Categories & Fees:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sport.variants.map((v, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-medium flex items-center gap-2"
                          >
                            <span>{v.name}</span>
                            <span className="text-white font-bold font-mono bg-slate-800 px-1.5 py-0.5 rounded text-[11px]">
                              {v.fee}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Spec Grid (Format & Prize Pool only, halved spacing) */}
                  <div className="mt-2.5">
                    <div className="grid grid-cols-2 gap-3 p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                      <div>
                        <div className="text-slate-400 text-[11px] uppercase font-medium">Format</div>
                        <div className="font-semibold text-slate-200 mt-0.5">{sport.teamSize}</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px] uppercase font-medium">
                          Prize Pool
                        </div>
                        <div className="font-extrabold text-amber-400 mt-0.5">{sport.prizes}</div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 italic mt-1.5">
                      *Note: Prize pool is across all categories overall.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center">
                    <button
                      onClick={() => onRegisterSport(sport)}
                      className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-red-600/20"
                    >
                      <span>Register For {sport.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Floating Image Column */}
                <div className={`w-full flex items-center justify-center ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl flex items-center justify-center">
                    <img
                      src={sport.image}
                      alt={sport.title}
                      className="w-auto h-auto max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.src = sport.image.replace('/uploads/', 'uploads/');
                      }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
