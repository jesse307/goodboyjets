'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      from_airport_or_city: formData.get('from_airport_or_city') as string,
      to_airport_or_city: formData.get('to_airport_or_city') as string,
      date_time: formData.get('date_time') as string,
      pax: parseInt(formData.get('pax') as string, 10),
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      urgency: 'urgent' as const,
      notes: formData.get('notes') as string || undefined,
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      router.push('/thanks');
    } catch {
      setError('Ruh-roh! Something went wrong. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  }

  return (
    <section id="quote" className="py-16 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#242424]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          🐾 Fetch Your Flight Quote!
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Fill out the form below and we'll have your tail wagging with excitement!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#2a2a2a] p-8 rounded-2xl border-2 border-[#FF9500]/30">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="from_airport_or_city" className="block text-sm font-medium mb-2 text-[#FF9500]">
                🛫 From (Airport or City) *
              </label>
              <input
                type="text"
                id="from_airport_or_city"
                name="from_airport_or_city"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#FF9500] text-white transition-colors"
                placeholder="e.g., LAX or Los Angeles"
              />
            </div>

            <div>
              <label htmlFor="to_airport_or_city" className="block text-sm font-medium mb-2 text-[#FF9500]">
                🛬 To (Airport or City) *
              </label>
              <input
                type="text"
                id="to_airport_or_city"
                name="to_airport_or_city"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#FF9500] text-white transition-colors"
                placeholder="e.g., JFK or New York"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date_time" className="block text-sm font-medium mb-2 text-[#4A90E2]">
                📅 Departure Date & Time *
              </label>
              <input
                type="datetime-local"
                id="date_time"
                name="date_time"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#4A90E2] text-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="pax" className="block text-sm font-medium mb-2 text-[#4A90E2]">
                👥 Passengers (Good Boys & Girls) *
              </label>
              <input
                type="number"
                id="pax"
                name="pax"
                required
                min="1"
                max="50"
                defaultValue="1"
                className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#4A90E2] text-white transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#FF9500]">
                😊 Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#FF9500] text-white transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#FF9500]">
                📱 Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#FF9500] text-white transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#4A90E2]">
              ✉️ Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#4A90E2] text-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium mb-2 text-gray-300">
              📝 Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gray-700 rounded-xl focus:outline-none focus:border-[#FF9500] text-white resize-none transition-colors"
              placeholder="Bringing furry friends? Special requests? Let us know!"
            />
          </div>

          {error && (
            <div className="bg-red-900/30 border-2 border-red-600 text-red-200 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#FF9500] to-[#FFB84D] hover:from-[#FFB84D] hover:to-[#FF9500] disabled:bg-gray-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            {isSubmitting ? '✈️ Fetching your quote...' : '🐾 Get My Quote!'}
          </button>

          <p className="text-sm text-gray-400 text-center">
            We promise to treat your info like our favorite tennis ball! 🎾
          </p>
        </form>
      </div>
    </section>
  );
}
