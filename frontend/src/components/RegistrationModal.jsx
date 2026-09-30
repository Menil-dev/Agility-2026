import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, QrCode, Sparkles, ChevronDown, Check } from 'lucide-react';
import { sportsData } from '../data/sportsData';

export default function RegistrationModal({ sport: initialSport, onClose }) {
  const [selectedSportId, setSelectedSportId] = useState(
    initialSport ? initialSport.id : sportsData[0].id
  );
  const [isSportDropdownOpen, setIsSportDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sport = sportsData.find(s => s.id === selectedSportId) || sportsData[0];

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSportDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, []);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto overscroll-contain cursor-pointer"
    >
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden my-auto text-white cursor-default flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-900 bg-slate-900/60 shrink-0">
          <div>
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
              Official Entry Portal
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">
              {sport.title} Registration
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center gap-1 text-xs font-semibold"
            title="Close modal"
          >
            <span>Close</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 overflow-y-auto">

          {/* Sport Selector Dropdown */}
          <div ref={dropdownRef} className="relative">
            <label className="block text-slate-400 text-xs font-semibold mb-2">
              Select Sport Event
            </label>
            <button
              type="button"
              onClick={() => setIsSportDropdownOpen((open) => !open)}
              className="w-full bg-slate-900 text-white font-medium border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer flex items-center justify-between gap-3"
            >
              <span className="truncate">{sport.title}</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isSportDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSportDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 z-20 rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/40 overflow-hidden">
                {sportsData.map((item, index) => {
                  const isSelected = item.id === selectedSportId;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSelectedSportId(item.id);
                        setIsSportDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                      } ${index !== sportsData.length - 1 ? 'border-b border-slate-800' : ''}`}
                    >
                      <span className="truncate">{item.title}</span>
                      {isSelected && <Check className="w-4 h-4 text-red-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Category & Fee Pricing Card */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                Category & Entry Fees
              </span>
            </div>

            <div className="space-y-2 pt-1 text-xs">
              {sport.variants && sport.variants.length > 0 ? (
                sport.variants.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80"
                  >
                    <span className="text-slate-200 font-medium">{v.name}</span>
                    <span className="text-white font-bold font-mono bg-slate-800 px-2.5 py-1 rounded">
                      {v.fee}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="text-slate-200 font-medium">Standard Registration</span>
                  <span className="text-white font-bold font-mono bg-slate-800 px-2.5 py-1 rounded">
                    {sport.fee}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* QR Code Container */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
              <QrCode className="w-4 h-4 text-red-500" />
              <span>Scan QR Code to Open Google Form</span>
            </div>

            <div className="inline-block bg-white p-3 rounded-2xl shadow-xl shadow-red-950/20 border border-slate-200 max-w-full">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(sport.formLink)}`}
                alt={`${sport.title} Registration Form QR`}
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
              />
            </div>

            <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
              Scan with any mobile camera or QR reader to fill out player details & submit payment.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-1">
            <a
              href={sport.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/25"
            >
              <span>Go to Registration Form</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}
