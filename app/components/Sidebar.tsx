'use client';

import { useState } from 'react';
import Image from 'next/image';
import SkyightLogo from '@/app/assets/Skyight-Favicon.svg';

interface NavItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

const navigation: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  {
    id: 'company-apis',
    label: 'Company APIs',
    children: [
      { id: 'create-transaction', label: 'Create Transaction' },
      { id: 'update-company', label: 'Update Company' },
      { id: 'delete-company-image', label: 'Delete Company Image' },
      { id: 'upload-company-image', label: 'Upload Company Image' },
      { id: 'get-transactions', label: 'Get Transactions' },
      { id: 'get-company-kpi', label: 'Get Company KPI' },
    ],
  },
  {
    id: 'bank-apis',
    label: 'Bank APIs',
    children: [{ id: 'get-all-banks', label: 'Get All Banks' }],
  },
  {
    id: 'booking-apis',
    label: 'Booking APIs',
    children: [
      { id: 'get-active-routes', label: 'Get Active Routes' },
      { id: 'search-flights', label: 'Search Flights' },
      { id: 'create-booking', label: 'Create Booking' },
      { id: 'get-travellers', label: 'Get Travellers' },
      { id: 'get-company-bookings', label: 'Get Company Bookings' },
      { id: 'get-booking-by-id', label: 'Get Booking by ID' },
      { id: 'get-total-credits', label: 'Get Total Credits' },
      { id: 'confirm-booking', label: 'Confirm Booking' },
      { id: 'get-pnr', label: 'Get PNR' },
      { id: 'get-penalty', label: 'Get Penalty' },
      { id: 'get-orders', label: 'Get Orders' },
      { id: 'cancel-booking', label: 'Cancel Booking' },
      { id: 'report-booking', label: 'Report Booking' },
      { id: 'get-custom-ticket', label: 'Get Custom Ticket' },
    ],
  },
  {
    id: 'support-ticket',
    label: 'Support Ticket',
    children: [
      { id: 'create-ticket', label: 'Create Ticket' },
      { id: 'update-ticket', label: 'Update Ticket' },
      { id: 'get-single-ticket', label: 'Get Single Ticket' },
      { id: 'delete-ticket', label: 'Delete Ticket' },
      { id: 'get-company-tickets', label: 'Get Company Tickets' },
    ],
  },
];

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'company-apis',
    'bank-apis',
    'booking-apis',
    'support-ticket',
  ]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-950/95 backdrop-blur-xl border-r border-slate-800/50 px-6 py-8">
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center gap-3 px-2">
          <Image 
            src={SkyightLogo} 
            alt="Skyight Logo" 
            className="h-10 w-auto"
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleSection(item.id)}
                      className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          expandedSections.includes(item.id) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedSections.includes(item.id) && (
                      <ul className="mt-1 ml-3 pl-3 border-l border-slate-700/50 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <button
                              onClick={() => scrollToSection(child.id)}
                              className="w-full text-left px-3 py-1.5 text-xs text-slate-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded-md transition-all"
                            >
                              {child.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex w-full items-center px-3 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
          <p className="text-xs text-slate-400 mb-2">Need help?</p>
          <a
            href="#support-ticket"
            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Create a support ticket →
          </a>
        </div>
      </div>
    </aside>
  );
}

