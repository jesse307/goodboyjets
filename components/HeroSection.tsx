import Image from 'next/image';

export default function HeroSection() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567';

  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-16 md:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      {/* Logo */}
      <div className="mb-8 animate-bounce-slow">
        <Image
          src="/logo.svg"
          alt="Good Boy Jets Logo"
          width={220}
          height={80}
          priority
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Who's a <span className="text-[#FF9500]">Good Boy?</span>
      </h1>
      <p className="text-2xl md:text-3xl text-[#4A90E2] mb-4 font-semibold">
        You Are! ✈️🐕
      </p>
      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
        Fetch yourself a private jet with tail-wagging service!
        <br />
        Fast, friendly, and always ready to fly.
      </p>

      {/* Prominent Phone Number */}
      <div className="mb-8 p-6 bg-gradient-to-r from-[#FF9500]/20 to-[#4A90E2]/20 border-2 border-[#FF9500] rounded-2xl shadow-lg">
        <p className="text-sm text-gray-300 mb-2 uppercase tracking-wider">📞 Call the Pack - 24/7</p>
        <a
          href={`tel:${contactPhone}`}
          className="text-4xl md:text-5xl font-bold text-[#FF9500] hover:text-[#FFB84D] transition-colors block"
        >
          {contactPhone}
        </a>
        <p className="text-sm text-gray-400 mt-2">Tap to call & get treats (discounts)!</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`tel:${contactPhone}`}
          className="bg-[#FF9500] hover:bg-[#FFB84D] text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          🐾 Call the Pack
        </a>
        <a
          href="#quote"
          className="bg-[#4A90E2] hover:bg-[#6BA8F0] text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          ✈️ Request Quote
        </a>
      </div>

      {/* Playful tagline */}
      <p className="mt-12 text-gray-400 text-sm italic">
        No bones about it — we're the best in the sky! 🦴
      </p>
    </section>
  );
}
