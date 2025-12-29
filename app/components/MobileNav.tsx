'use client';

import { useState } from 'react';
import Image from 'next/image';
import SkyightLogo from '@/app/assets/skyight-logo.svg';

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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center gap-3">
          <Image 
            src={SkyightLogo} 
            alt="Skyight Logo" 
            className="h-8 w-auto"
            priority
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-16 overflow-y-auto">
          <nav className="px-4 py-6">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.id)}
                        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg"
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
                        <ul className="mt-1 ml-4 pl-4 border-l border-slate-700/50 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <button
                                onClick={() => scrollToSection(child.id)}
                                className="w-full text-left px-4 py-2 text-sm text-slate-400 hover:text-cyan-400"
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
                      className="flex w-full items-center px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

