'use client';
import Link from "next/link";

export default function DevBlog() {
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
            Empyrius Siege
          </h1>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Pitch Block */}
              {/* Development Timeline */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-400 mb-2">Pitch</h2>
                <p className="text-gray-400">What&apos;s this game about ?</p>
              </div>
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-8 border border-gray-600 mb-12">
                  <p className="text-xl text-gray-300 mb-6">
                    <strong>Empyrius Siege</strong> is a 2D action-roguelite where you play as a mercenary mecha fighting for faction lords in a galactic war. 
                    <br /><br />
                    Crush your enemies, see their remains before you and upgrade yourself from their reclaimed parts. Become an unstoppable machine, and shape the fate of the universe.
                  </p>
              </div>

            {/* Placeholder for future blog posts */}
            <div className="space-y-8">
              {/* Development Timeline */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-400 mb-2">Development History</h2>
                <p className="text-gray-400">Chronological updates from latest to earliest</p>
              </div>

              {/* Latest - Combat System Overhaul */}
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 border-l-4 border-l-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-purple-400">Finalizing stage gameplay loops</h3>
                  <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">September 2025</span>
                </div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <p className="text-gray-400 mb-4">
                      Updated the xp progression to be an editable exponential function, also balance for weapons to have a sweet first stage.
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Features:</strong> Update on XP scaling & weapon balance.
                    </div>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0">
                    <img 
                      src="/images/Current.png" 
                      alt="Current - Finalizing stage gameplay loops" 
                      className="w-full h-full object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Recent - Core Systems */}
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 border-l-4 border-l-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-400">Gameplay planning & communication</h3>
                  <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">August 2025</span>
                </div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <p className="text-gray-400 mb-4">
                      No code this time, holidays break. After vacations, I had to iterate on the target gameplay now that we have a nice base to work on. What are the next priorities and how could I communicate on this game ? Well, let&apos;s create a website. Hi there o/
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Features:</strong> HOLIDAYS ! Website creation, finalisation of gameplay loops, roadmap and priorities updates
                    </div>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0">
                    <img 
                      src="/images/holidays.png" 
                      alt="Holidays - Gameplay planning & communication" 
                      className="w-full h-full object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Mid Development - Weapon Systems */}
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 border-l-4 border-l-orange-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-orange-400">Refining core gameplay and adding variety</h3>
                  <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">July 2025</span>
                </div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <p className="text-gray-400 mb-4">
                      Big update on graphisms and sounds. Added bosses and steps during the stage, changed spawning to waves and added a timer. Now we have the main game loop implemented. We can also select weapons when leveling up, and have bonus stats when no more weapon room is available. 
                      Added possibility for the player to use multiple Mechas for later, and switched to factions for allies and enemies. Also worked on AI movements and attack behaviors, performance improvements and a main menu.
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Features:</strong> Turret selection UI on leveling up, global dynamic turret stats, range finder, graphisms & sounds for variety. First balance patch !
                    </div>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0">
                    <img 
                      src="/images/Build 3.png" 
                      alt="Build 3 - Refining core gameplay and adding variety" 
                      className="w-full h-full object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Early - Foundation */}
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 border-l-4 border-l-purple-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-purple-400">Creating project foundations</h3>
                  <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">June 2025</span>
                </div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <p className="text-gray-400 mb-4">
                      Classes structure for the game and core mecanics for combat : turrets, targeting, enemies with a spawner and allies. The game has evolved from basic movement to a combat system with few weapon types and a game loop with leveling up that gives flat stats to the player. Also with UI elements like HealthBar, explosions, and musics.
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Features:</strong> Core mechanics, player / ally / enemy and spawner system, turrets with stats and targeting systems, UI elements and music / sound integration
                    </div>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0">
                    <img 
                      src="/images/Build 2.png" 
                      alt="Build 2 - Creating project foundations" 
                      className="w-full h-full object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Initial - Prototype */}
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 border-l-4 border-l-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-400">Initial Prototype</h3>
                  <span className="text-sm text-gray-500 bg-gray-700 px-3 py-1 rounded-full">May 2025</span>
                </div>
                <div className="flex gap-6">
                  <div className="flex-1">
                    <p className="text-gray-400 mb-4">
                      The very beginning of Empyrius Siege. After a year of cooking ideas, planning stories, and testing prototypes, the &quot;3C&apos;s&quot;, story and main gameplay loops are ready. We can start coding in the actual game ! To start, added basic movement systems, initial character setup for the player, the camera, and a first enemy to have the smallest game loop.
                    </p>
                    <div className="text-sm text-gray-500">
                      <strong>Features:</strong> Initial character movement, first enemy, core interaction foundation
                    </div>
                  </div>
                  <div className="w-32 h-32 flex-shrink-0">
                    <img 
                      src="/images/Build 1.png" 
                      alt="Build 1 - Initial Prototype" 
                      className="w-full h-full object-cover rounded-lg border border-gray-600"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Roadmap Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-00">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">Roadmap</h3>
                  
                  <div className="space-y-6">
                    {/* Current Focus */}
                    <div>
                      <h4 className="text-lg font-semibold text-orange-400 mb-3">Current Focus : Alpha Build</h4>
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                          First implementation of all gameplay loops and core mechanics.
                        </p>
                      </div>
                    </div>

                    {/* Upcoming Steps */}
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Upcoming Steps</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Polish first stage gameplay loop : Harvest enemy remains</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Spawn remains on Enemy Death </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Create harvesting mechanic to gain XP</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Add static and generated props to harvest</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Create level, enemies and props for a second stage with the other faction.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Future Leaps */}
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Future Leaps</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Meta-progression</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Mission choice</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Faction system with 3rd Faction</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Faction upgrade trees</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Story & Galactic progression</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Polish</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Release ! </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
