import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import SectionHeader from './components/ui/SectionHeader';
import EndpointCard from './components/ui/EndpointCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />
      <div className="fixed inset-0 bg-linear-to-br from-cyan-950/20 via-transparent to-blue-950/20 pointer-events-none" />

      {/* Navigation */}
      <Sidebar />
      <MobileNav />

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 pt-20 lg:pt-8">

          {/* Hero Section */}
          <section id="overview" className="mb-16 scroll-mt-24">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-800/50 via-slate-900/50 to-slate-950 border border-slate-700/50 p-8 lg:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  B2B Partner Module
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Skyight API
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                    Documentation
                  </span>
                </h1>

                <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
                  The B2B Partner module is designed to integrate and expose third-party airline booking APIs to our business partners. This module acts as a middleware layer between B2B clients and airline service providers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: '🔍', title: 'Search Tickets', desc: 'Find airline tickets' },
                    { icon: '📝', title: 'Create Bookings', desc: 'Book flights easily' },
                    { icon: '🎫', title: 'Issue Tickets', desc: 'Confirm reservations' },
                    { icon: '📊', title: 'Track Bookings', desc: 'Manage all bookings' },
                    { icon: '🎟️', title: 'Support Tickets', desc: 'Get help when needed' },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-white">{feature.title}</p>
                        <p className="text-xs text-slate-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Authentication Notice */}
            <div className="mt-8 p-6 rounded-2xl bg-linear-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-amber-500/20">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-amber-400 mb-1">Authentication Required</h3>
                  <p className="text-sm text-slate-400">
                    Once your company is registered, you will receive a <code className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400 text-xs font-mono">secretToken</code> which must be included in all API requests.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Company APIs */}
          <section id="company-apis" className="mb-16">
            <SectionHeader
              id="company-apis-header"
              title="Company APIs"
              description="Manage your company profile, transactions, and wallet operations"
              icon={
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />

            <div className="space-y-6">
              <EndpointCard
                id="create-transaction"
                method="POST"
                endpoint="api/b2bpartner/company/create-transaction"
                title="Create Transaction"
                description="Load amount into your wallet. This transaction will be pending until approved by admin. You need to add funds before creating bookings."
                payload={`{
  "bank_name": "string",
  "bank_number": "string",
  "account_holder_name": "string",
  "document_number": "string",
  "payment_date": "string",
  "amount": "string",
  "comment": "string",
  "document": "file"
}`}
              />

              <EndpointCard
                id="update-company"
                method="PUT"
                endpoint="api/b2bpartner/update/company"
                title="Update Company"
                description="Modify your company details including name, location, and website."
                payload={`{
  "companyId": 0,
  "name": "string",
  "country": "string",
  "city": "string",
  "address": "string",
  "website": "string"
}`}
              />

              <EndpointCard
                id="delete-company-image"
                method="DELETE"
                endpoint="api/b2bpartner/company/image"
                title="Delete Company Image"
                description="Remove your company's profile image."
              />

              <EndpointCard
                id="upload-company-image"
                method="POST"
                endpoint="api/b2bpartner/company/image"
                title="Upload Company Image"
                description="Add or update your company's profile image."
              />

              <EndpointCard
                id="get-transactions"
                method="GET"
                endpoint="api/b2bpartner/company/get-transactions"
                title="Get Transactions"
                description="Retrieve all your wallet transactions history."
              />

              <EndpointCard
                id="get-company-kpi"
                method="GET"
                endpoint="api/b2bpartner/company/company-kpi"
                title="Get Company KPI"
                description="Retrieve key performance indicators for your company."
              />
            </div>
          </section>

          {/* Bank APIs */}
          <section id="bank-apis" className="mb-16">
            <SectionHeader
              id="bank-apis-header"
              title="Bank APIs"
              description="Access approved bank information for transactions"
              icon={
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
            />

            <div className="space-y-6">
              <EndpointCard
                id="get-all-banks"
                method="GET"
                endpoint="api/b2bpartner/bank"
                title="Get All Banks"
                description="Retrieve list of approved banks. Only transactions from these banks will be processed and approved."
              />
            </div>
          </section>

          {/* Booking APIs */}
          <section id="booking-apis" className="mb-16">
            <SectionHeader
              id="booking-apis-header"
              title="Booking APIs"
              description="Search flights, create bookings, and manage reservations"
              icon={
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              }
            />

            <div className="space-y-6">
              <EndpointCard
                id="get-active-routes"
                method="GET"
                endpoint="api/b2bpartner/booking-all-active-routes"
                title="Get All Active Routes"
                description="Retrieve all available city names and active flight routes."
              />

              <EndpointCard
                id="search-flights"
                method="GET"
                endpoint="api/b2bpartner/search"
                title="Search Flights"
                description="Search for available flights based on your criteria."
              />

              <EndpointCard
                id="create-booking"
                method="POST"
                endpoint="api/b2bpartner/booking"
                title="Create Booking"
                description="Create a new booking with traveller information and flight details."
                payload={`{
  "trip_type": "OneWay",
  "origin_location_code": "str",
  "origin_location_code_return": "string",
  "flight_duration": "string",
  "flight_duration_return": "string",
  "departure_terminal": "string",
  "departure_terminal_return": "string",
  "arrival_terminal": "string",
  "arrival_terminal_return": "string",
  "destination_location_code_return": "string",
  "destination_location_code": "str",
  "airline_code": "st",
  "airline_code_return": "st",
  "air_equip_type": "string",
  "air_equip_type_return": "string",
  "departure_date_time": "2024-01-15 10:30",
  "departure_date_time_return": "2024-01-20 14:00",
  "arrival_date_time": "2024-01-15 12:45",
  "arrival_date_time_return": "2024-01-20 16:15",
  "departure_date": "2024-01-15",
  "departure_date_return": "2024-01-20",
  "departure_time": "10:30",
  "departure_time_return": "14:00",
  "arrival_date": "2024-01-15",
  "arrival_date_return": "2024-01-20",
  "arrival_time": "12:45",
  "arrival_time_return": "16:15",
  "flight_number": "string",
  "flight_number_return": "string",
  "res_book_design_Code": "string",
  "res_book_design_Code_return": "string",
  "rph": "string",
  "rph_return": "string",
  "ref_number": "string",
  "ref_number_return": "string",
  "direction_id": 0,
  "direction_id_return": 0,
  "elapsed_time": 0,
  "elapsed_time_return": 0,
  "cabin_class": "string",
  "cabin_class_return": "string",
  "transaction_identifier": "string",
  "travellers": ["string"],
  "booking_class_avails": ["string"],
  "booking_class_avails_return": ["string"],
  "free_baggages": ["string"],
  "free_baggages_return": ["string"],
  "priceInfo": {
    "itin_total_fare": {
      "base_fare": {
        "amount": 0,
        "currency_code": "str",
        "decimal_places": 0
      },
      "total_fare": {
        "amount": 0,
        "currency_code": "str",
        "decimal_places": 0
      },
      "total_equiv_fare": {
        "amount": 0,
        "currency_code": "str",
        "decimal_places": 0
      }
    },
    "ptc_fare_break_downs": ["string"]
  }
}`}
              />

              <EndpointCard
                id="get-travellers"
                method="GET"
                endpoint="api/b2bpartner/getTravellers"
                title="Get Travellers Data"
                description="Retrieve all travellers that you created during booking process."
              />

              <EndpointCard
                id="get-company-bookings"
                method="GET"
                endpoint="api/b2bpartner/booking/company"
                title="Get All Company Bookings"
                description="Fetch all bookings associated with your company."
              />

              <EndpointCard
                id="get-booking-by-id"
                method="GET"
                endpoint="api/b2bpartner/booking/:id"
                title="Get Booking by ID"
                description="Fetch a single booking by its unique identifier."
              />

              <EndpointCard
                id="get-total-credits"
                method="GET"
                endpoint="api/b2bpartner/booking-credits"
                title="Get Total Credits"
                description="Fetch your remaining wallet credits balance."
              />

              <EndpointCard
                id="confirm-booking"
                method="POST"
                endpoint="api/b2bpartner/booking-issue"
                title="Confirm Booking"
                description="Confirm and issue a booking that you have created."
                payload={`{
  "pnr": "string"
}`}
              />

              <EndpointCard
                id="get-pnr"
                method="POST"
                endpoint="api/b2bpartner/booking-pnr"
                title="Get PNR"
                description="Retrieve PNR details to download booking information."
                payload={`{
  "pnr": "string"
}`}
              />

              <EndpointCard
                id="get-penalty"
                method="POST"
                endpoint="api/b2bpartner/getPenalty"
                title="Get Penalty"
                description="Get cancellation penalty information for a ticket."
                payload={`{
  "Items": [
    {
      "ticket_number": "string",
      "coupon_number": "string",
      "reference": "string",
      "zero_penalty": false
    }
  ]
}`}
              />

              <EndpointCard
                id="get-orders"
                method="GET"
                endpoint="api/b2bpartner/orders/company"
                title="Get Orders"
                description="Retrieve all confirmed bookings/orders for your company."
              />

              <EndpointCard
                id="cancel-booking"
                method="POST"
                endpoint="api/b2bpartner/booking-cancel-request-ticket"
                title="Cancel Booking"
                description="Request cancellation for a booking you have created."
                payload={`{
  "id": 0
}`}
              />

              <EndpointCard
                id="report-booking"
                method="POST"
                endpoint="api/b2bpartner/booking-user-ticket"
                title="Report Booking"
                description="Generate a report for bookings within specified date ranges."
                payload={`{
  "from_departure_date": "2024-01-01",
  "to_departure_date": "2024-01-31",
  "page_number": 0,
  "page_size": 0,
  "from_issue_date": "2024-01-01",
  "to_issue_date": "2024-01-31",
  "user_ticket_type": 0
}`}
              />

              <EndpointCard
                id="get-custom-ticket"
                method="GET"
                endpoint="api/b2bpartner/custom-ticket"
                title="Get Custom Ticket"
                description="Retrieve tickets that were created by admin."
              />
            </div>
          </section>

          {/* Support Ticket APIs */}
          <section id="support-ticket" className="mb-16">
            <SectionHeader
              id="support-ticket-header"
              title="Support Ticket"
              description="Create and manage support tickets for any issues or inquiries"
              icon={
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />

            <div className="space-y-6">
              <EndpointCard
                id="create-ticket"
                method="POST"
                endpoint="api/b2bpartner/ticket"
                title="Create Ticket"
                description="Create a new support ticket if you encounter any problems."
                payload={`{
  "title": "string",
  "description": "string"
}`}
              />

              <EndpointCard
                id="update-ticket"
                method="PUT"
                endpoint="api/b2bpartner/ticket"
                title="Update Ticket"
                description="Update an existing support ticket with new information or status."
                payload={`{
  "ticket_id": 0,
  "title": "string",
  "description": "string",
  "status": "open"
}`}
              />

              <EndpointCard
                id="get-single-ticket"
                method="GET"
                endpoint="api/b2bpartner/ticket"
                title="Get Single Ticket"
                description="Fetch details of a specific support ticket."
              />

              <EndpointCard
                id="delete-ticket"
                method="DELETE"
                endpoint="api/b2bpartner/ticket"
                title="Delete Ticket"
                description="Remove a support ticket from the system."
              />

              <EndpointCard
                id="get-company-tickets"
                method="GET"
                endpoint="api/b2bpartner/ticket/company"
                title="Get Company Tickets"
                description="Fetch all support tickets associated with your company."
              />
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 py-8 border-t border-slate-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="text-sm text-slate-400">Skyight B2B Partner API</span>
              </div>
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Techxudo. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
