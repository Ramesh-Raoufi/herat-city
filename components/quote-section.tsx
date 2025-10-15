export function QuoteSection() {
  return (
    <section className="py-20 bg-[#F5F3EE]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
          Gateway to the Silk Road
          <br />
          Alive with Imagination
        </h2>
        <p className="text-[#8B1538] text-xl font-semibold mb-8">
          Once you visit Herat, you become part of Herat.
        </p>
        <p className="text-gray-700 leading-relaxed mb-12 text-balance">
          Whether this is your first journey to Herat or a return to beloved streets, the city's blend of ancient poetry,
          artisan workshops, and bustling bazaars invites you to linger. Wander in the shadow of the Qala-e Ikhtiyaruddin,
          sip saffron tea in hidden gardens, and follow the call of live rubab music echoing through the Old City.
        </p>

        {/* Quote */}
        <div className="relative">
          <span className="text-[#8B1538] text-8xl font-serif absolute -left-4 -top-8 opacity-30">"</span>
          <p className="text-2xl lg:text-3xl font-serif italic text-gray-800 mb-4 text-balance">
            Herat remains a living crossroads of art, architecture, and craftsmanship.
          </p>
          <span className="text-[#8B1538] text-8xl font-serif absolute -right-4 -bottom-8 opacity-30">"</span>
        </div>

        <p className="text-sm text-gray-600 mt-8 uppercase tracking-wide">
          -- Cultural Heritage Magazine, Silk Road Weekly, Caravanserai Journal
        </p>
      </div>
    </section>
  )
}
