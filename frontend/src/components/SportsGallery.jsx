import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Tag } from 'lucide-react';
import { sportsData } from '../data/sportsData';
import { motion, useAnimation, useInView } from 'framer-motion';

function RevealOnScroll({ children, delay = 0, isPastCenter = false, onRef, ...motionProps }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.22, once: false });

  useEffect(() => {
    if (onRef) {
      onRef(ref.current);
    }
  }, [onRef]);

  useEffect(() => {
    if (isPastCenter) {
      controls.start('past');
      return;
    }

    controls.start(isInView ? 'visible' : 'hidden');
  }, [controls, isInView, isPastCenter]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      {...motionProps}
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0 },
        past: { opacity: 0, y: -24 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function SportsGallery({ onRegisterSport }) {
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateActiveIndex = () => {
      const centerY = window.innerHeight * 0.3;
      let nextActive = 0;

      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= centerY) {
          nextActive = idx;
        }
      });

      setActiveIndex((prev) => (prev === nextActive ? prev : nextActive));
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveIndex);
    };

    onScrollOrResize();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <section id="sports" className="py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Alternating Sports Event List */}
        <div className="space-y-24 sm:space-y-28">
          {sportsData.map((sport, index) => {
            const isImageRight = index % 2 === 0;

            return (
              <RevealOnScroll
                key={sport.id}
                id={`sport-${sport.id}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch scroll-mt-24"
                delay={index * 0.05}
                isPastCenter={index < activeIndex}
                onRef={(el) => {
                  itemRefs.current[index] = el;
                }}
              >
                {/* Text & Details Column */}
                <div className={`space-y-4 text-left flex flex-col justify-between h-full py-2 ${isImageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{sport.title}</h3>
                    
                    <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                      {sport.description}
                    </p>
                  </div>

                  {/* Mobile Image (shown after description) */}
                  <div className="lg:hidden w-full flex items-center justify-center py-1">
                    <img
                      src={sport.image}
                      alt={sport.title}
                      className="w-full max-w-sm h-auto max-h-[280px] object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.src = sport.image.replace('/uploads/', 'uploads/');
                      }}
                    />
                  </div>

                  {/* Category Variants Breakdown */}
                  {sport.variants && sport.variants.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-red-500" />
                        Available Categories & Fees:
                      </span>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                        <div className="space-y-2">
                          {sport.variants.map((v, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center justify-between text-xs ${idx !== sport.variants.length - 1 ? 'pb-2 border-b border-white/10' : ''}`}
                            >
                              <span className="text-slate-200 font-medium">{v.name}</span>
                              <span className="text-white font-bold font-mono">{v.fee}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Spec Grid (Format & Prize Pool only, single outer container) */}
                  <div className="mt-2.5">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl text-xs">
                      <div className="grid grid-cols-2 gap-4 items-start">
                        <div>
                          <div className="text-slate-400 text-[11px] uppercase font-medium">Format</div>
                          <div className="font-semibold text-slate-200 mt-0.5">{sport.teamSize}</div>
                        </div>
                        <div className="justify-self-end text-right">
                          <div className="text-slate-400 text-[11px] uppercase font-medium">
                            Prize Pool
                          </div>
                          <div className="font-extrabold text-amber-400 mt-0.5">{sport.prizes}</div>
                        </div>
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
                <div className={`hidden lg:flex w-full items-center justify-center ${isImageRight ? 'lg:order-2' : 'lg:order-1'}`}>
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

              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}
