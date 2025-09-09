'use client';
import Link from "next/link";

export default function ProjectHealbot() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-block mb-8 text-green-400 hover:text-green-300 transition-colors"
          >
            ← Back
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-600 mb-4 leading-tight">
            Project Healbot
          </h1>
          <p className="text-xl text-gray-400">
            Development updates and insights from Project Healbot
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Placeholder for future blog posts */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-green-400">Coming Soon</h2>
              <p className="text-gray-400 mb-6">
                Development blog posts will appear here as the project progresses. Currently stalled for now, to focus on Empyrius Siege.
              </p>
              <div className="text-center">
                <Link 
                  href="/empyrius-siege" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg transition-all duration-300 font-semibold"
                >
                  View Empyrius Siege Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
