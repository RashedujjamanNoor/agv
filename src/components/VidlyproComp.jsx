import React from "react";

// React component: Modern dark theme with red accent and circular gradient background
// Tailwind CSS required

export default function VidlyproComp() {
  const vidlyFeatures = [
    "In-house team of 40+ Experts",
    "Results oriented",
    "Experience with 500+ Clients",
    "Proven DFY Content Funnel",
    "Personalised CRM",
    "24/7 Support, Anytime You Need Us",
  ];

  const bonuses = [
    "Free Go High Level Subscription",
    "Free 1-on-1 Consultancy",
  ];

  const otherAgencyNotes = [
    "Freelance / distributed teams",
    "Outcome not guaranteed",
    "Limited client experience",
    "No proven done-for-you funnel",
    "Generic CRM or third-party tools",
    "Office hours support only",
  ];

  return (
    <div
      id="why-us"
      className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center p-6 md:p-12"
    >
      {/* Background Red Circle Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-red-600/30 rounded-full blur-3xl" />
        <div className="absolute w-[900px] h-[900px] bg-red-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Why Choose <span className="text-red-500">Vidly Pro</span>?
          </h1>
          <p className="mt-3 text-gray-300">
            Compare our agency to others and see the difference in quality,
            performance, and results.
          </p>
        </header>

        {/* Combined Comparison Card */}
        <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-br from-red-900/50 to-black rounded-3xl p-8 shadow-2xl border border-red-800/30 backdrop-blur-sm">
          {/* Vidly Pro */}
          <article className="rounded-2xl bg-red-700/20 p-6 border border-red-700/30 shadow-xl hover:shadow-red-600/40 transition">
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Vidly Pro ✅
            </h2>
            <ul className="space-y-3">
              {vidlyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-200 text-sm md:text-base">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-red-600/30 pt-4">
              <h3 className="text-sm uppercase tracking-wider text-red-400 mb-2">
                Bonuses Included
              </h3>
              <ul className="space-y-2">
                {bonuses.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-sm">
                      +
                    </span>
                    <span className="text-gray-200 text-sm md:text-base">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Other Agencies */}
          <article className="rounded-2xl bg-gray-900/50 p-6 border border-red-800/20 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">
              Other Agencies ❌
            </h2>
            <ul className="space-y-3">
              {otherAgencyNotes.map((n) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-400 text-sm md:text-base">
                    {n}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <footer className="mt-10 text-center text-sm text-gray-400">
          <p>
            Vidly Pro — Setting the new standard for video editing agencies
            worldwide.
          </p>
        </footer>
      </div>
    </div>
  );
}
