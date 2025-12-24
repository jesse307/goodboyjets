export default function Footer() {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567';

  return (
    <footer className="py-12 px-4 bg-[#0f0f0f] border-t-4 border-[#FF9500]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-2xl mb-4 text-[#FF9500]">🐾 Good Boy Jets</h3>
            <p className="text-gray-400 text-sm">
              Your tail-wagging private jet service! Fast, friendly, and always ready to fly.
            </p>
            <p className="text-gray-500 text-xs mt-4 italic">
              "Best doggone jets in the sky!" 🦴
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[#4A90E2]">📞 Call the Pack</h3>
            <p className="text-gray-400 text-sm mb-2">
              <a href={`tel:${contactPhone}`} className="hover:text-[#FFB84D] transition-colors text-lg font-bold">
                {contactPhone}
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              🌙 Available 24/7 - We never sleep!
            </p>
            <p className="text-gray-500 text-xs mt-2">
              (Well, we do nap sometimes... but we're quick to wake!)
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">⚖️ The Fine Print</h3>
            <p className="text-gray-400 text-sm">
              Good Boy Jets is a network of trusted charter brokers. We don't operate aircraft ourselves (we'd get too distracted by squirrels).
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> All charter availability, pricing, and departure times are subject to aircraft and operator availability, regulatory requirements, weather, and operational constraints. Quoted response times and departure windows are typical estimates and not guaranteed. Good Boy Jets operates as a network of independent trusted charter brokers and does not act as a broker itself or operate aircraft. All flights are arranged through and provided by independent FAA Part 135 certified charter operators and brokers. By using this service, you acknowledge that charter arrangements depend on real-time availability and may be subject to change. No actual dogs were harmed in the making of this website.
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Good Boy Jets. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Made with ❤️ and lots of belly rubs
          </p>
        </div>
      </div>
    </footer>
  );
}
