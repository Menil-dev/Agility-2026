import React, { useState, useEffect } from 'react';
import { X, ExternalLink, QrCode, Copy, Check, Sparkles } from 'lucide-react';
import { sportsData } from '../data/sportsData';

export default function RegistrationModal({ sport: initialSport, onClose }) {
  const [selectedSportId, setSelectedSportId] = useState(
    initialSport ? initialSport.id : sportsData[0].id
  );
  const [copied, setCopied] = useState(false);

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

  const handleCopyLink = () => {
    if (sport.formLink) {
      navigator.clipboard.writeText(sport.formLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto cursor-pointer"
    >
      <div className="relative w-full max-w-lg bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden my-8 text-white cursor-default">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-900 bg-slate-900/60">
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
        <div className="p-6 space-y-6">

          {/* Sport Selector Dropdown */}
          <div>
            <label className="block text-slate-400 text-xs font-semibold mb-2">
              Select Sport Event
            </label>
            <select
              value={selectedSportId}
              onChange={(e) => setSelectedSportId(e.target.value)}
              className="w-full bg-slate-900 text-white font-medium border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
            >
              {sportsData.map(s => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
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

            <div className="inline-block bg-white p-3 rounded-2xl shadow-xl shadow-red-950/20 border border-slate-200">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(sport.formLink)}`}
                alt={`${sport.title} Registration Form QR`}
                className="w-44 h-44 sm:w-48 sm:h-48 object-contain"
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

            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={sport.formLink}
                className="flex-1 bg-slate-900 text-slate-400 font-mono text-[11px] border border-slate-800 rounded-xl px-3 py-2.5 focus:outline-none select-all"
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs border border-slate-800 transition-colors flex items-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 font-semibold text-xs border border-slate-800 transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
