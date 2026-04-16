export function QuoteSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F4] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B1538' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center relative z-10">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A96E]" />
          <div className="w-2 h-2 rounded-full bg-[#C9A96E]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A96E]" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Gateway to the Silk Road
          <br />
          <span className="text-[#8B1538]">Alive with Imagination</span>
        </h2>
        <p className="text-[#C9A96E] text-lg font-semibold mb-10 tracking-wide">
          Once you visit Herat, you become part of Herat.
        </p>
        <p className="text-gray-600 leading-relaxed mb-16 text-lg max-w-3xl mx-auto">
          Whether this is your first journey to Herat or a return to beloved streets, the city&apos;s blend of ancient poetry,
          artisan workshops, and bustling bazaars invites you to linger. Wander in the shadow of the Qala-e Ikhtiyaruddin,
          sip saffron tea in hidden gardens, and follow the call of live rubab music echoing through the Old City.
        </p>

        {/* Quote */}
        <div className="relative bg-white rounded-2xl p-10 lg:p-14 shadow-sm border border-gray-100">
          <span className="text-[#8B1538] text-9xl font-serif absolute left-6 -top-6 opacity-20 leading-none select-none">&ldquo;</span>
          <p className="text-2xl lg:text-3xl font-serif italic text-gray-800 mb-6 leading-snug relative z-10">
            Herat remains a living crossroads of art, architecture, and craftsmanship.
          </p>
          <span className="text-[#8B1538] text-9xl font-serif absolute right-6 bottom-0 opacity-20 leading-none select-none">&rdquo;</span>
          <div className="h-px w-20 bg-[#C9A96E] mx-auto mb-4" />
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] relative z-10">
            Cultural Heritage Magazine &bull; Silk Road Weekly &bull; Caravanserai Journal
          </p>
        </div>
      </div>
    </section>
  )
}
