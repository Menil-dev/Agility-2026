import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { eventDetails } from '../data/sportsData';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">Agility Cup 2026</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Official Inter-College Sports Event organized by the Sports Committee SPIT. Fostering excellence and sportsmanship.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3">Events</h4>
            <ul className="grid grid-cols-2 gap-1.5 text-[11px]">
              <li>Turf Cricket</li>
              <li>Volleyball</li>
              <li>Badminton</li>
              <li>Table Tennis</li>
              <li>Chess</li>
              <li>Carrom</li>
              <li>Dodgeball</li>
              <li>Esports</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-3">Contact Committee</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>{eventDetails.contactEmail}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>{eventDetails.contactPhone}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>SPIT, Bhavan's Campus, Munshi Nagar, Andheri (W), Mumbai</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-2 text-[11px]">
          <p>© 2026 Sports Committee SPIT. All rights reserved.</p>
          <p>Sardar Patel Institute of Technology, Mumbai</p>
        </div>

      </div>
    </footer>
  );
}
