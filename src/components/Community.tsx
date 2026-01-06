import { Trophy, Target, TrendingUp, Award, Footprints, Zap, Star, Compass } from "lucide-react";

export function Community() {
  const leaderboard = [
    { rank: 1, name: "Sophie Martin", points: 12500, badge: "🏆", borderColor: "border-vialy-coral" },
    { rank: 2, name: "Lucas Dubois", points: 11200, badge: "🥇", borderColor: "border-vialy-blue" },
    { rank: 3, name: "Emma Bernard", points: 10800, badge: "🥈", borderColor: "border-vialy-coral-light" },
    { rank: 4, name: "Thomas Petit", points: 9500, badge: "", borderColor: "border-gray-200" },
    { rank: 5, name: "Léa Moreau", points: 9100, badge: "", borderColor: "border-gray-200" },
  ];

  const badges = [
    { icon: Footprints, name: "Premiers Pas", unlocked: true, color: "var(--vialy-blue)" },
    { icon: Zap, name: "Coureur 3km", unlocked: false, color: "#CBD5E1" },
    { icon: Star, name: "Papillon social", unlocked: false, color: "#CBD5E1" },
    { icon: Target, name: "Marathonien", unlocked: false, color: "#CBD5E1" },
    { icon: Award, name: "Champion", unlocked: false, color: "#CBD5E1" },
    { icon: Compass, name: "Explorateur", unlocked: true, color: "var(--vialy-coral)" },
  ];

  return (
    <section id="communaute" className="py-24 bg-gradient-to-b from-orange-50/50 to-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-4 font-bold text-gray-900">
            Rejoins la <span className="text-vialy-coral">communauté</span> des explorateurs
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Partage tes découvertes, relève des défis et grimpe au classement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Stats Card */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-vialy-blue to-vialy-blue/80 rounded-3xl p-8 shadow-xl text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm opacity-90 mb-1 font-medium">CLASSEMENT</div>
                  <div className="text-5xl font-bold">#42</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90 mb-1 font-medium">POINTS</div>
                  <div className="text-5xl font-bold">2,450</div>
                </div>
              </div>
              
              <div className="h-px bg-white/30 my-6"></div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-1 font-bold">12</div>
                  <div className="text-xs opacity-90 uppercase tracking-wide font-medium">Parcours</div>
                </div>
                <div>
                  <div className="text-3xl mb-1 font-bold">5</div>
                  <div className="text-xs opacity-90 uppercase tracking-wide font-medium">Séries</div>
                </div>
                <div>
                  <div className="text-3xl mb-1 font-bold">8</div>
                  <div className="text-xs opacity-90 uppercase tracking-wide font-medium">Badges</div>
                </div>
              </div>
            </div>

            {/* Challenge Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-vialy-coral rounded-2xl flex items-center justify-center text-white text-2xl">
                  🏆
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl mb-1 font-bold text-gray-900">Défi de la Semaine</h3>
                  <p className="text-sm text-gray-500 font-medium">Complétez 5 parcours urbains</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl text-gray-900 font-bold">2/5</span>
                  <span className="text-vialy-coral font-bold">Récompense: +500 pts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-vialy-coral h-3 rounded-full transition-all"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard & Badges */}
          <div className="space-y-8">
            {/* Leaderboard */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-vialy-coral/10 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-vialy-coral" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Classement Global</h3>
                  <p className="text-sm text-gray-500 font-medium">Top explorateurs cette semaine</p>
                </div>
              </div>

              <div className="space-y-3">
                {leaderboard.slice(0, 3).map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-vialy-blue/5 to-vialy-coral/5 border border-vialy-blue/10"
                  >
                    <div className={`w-14 h-14 rounded-full border-4 ${user.borderColor} bg-gray-100 flex items-center justify-center text-2xl shadow-sm`}>
                      {user.badge}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                      <div className="text-xs text-vialy-blue font-bold">{user.points.toLocaleString()} pts</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-400">#{user.rank}</div>
                  </div>
                ))}
                {leaderboard.slice(3).map((user, index) => (
                  <div
                    key={index + 3}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center text-xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-700">{user.name}</div>
                      <div className="text-xs text-gray-500 font-medium">{user.points.toLocaleString()} pts</div>
                    </div>
                    <div className="text-xl text-gray-400 font-medium">#{user.rank}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges Collection */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl lg:text-3xl mb-6 font-bold text-gray-900">Collection de Badges</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="text-center group cursor-default">
                    <div 
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-2 transition-transform hover:scale-105 ${
                        badge.unlocked ? 'bg-gray-100' : 'bg-gray-50'
                      }`}
                      style={{ backgroundColor: badge.unlocked ? `color-mix(in srgb, ${badge.color}, transparent 85%)` : '#F9FAFB' }}
                    >
                      <badge.icon 
                        className="w-7 h-7" 
                        style={{ color: badge.unlocked ? badge.color : '#CBD5E1' }}
                      />
                    </div>
                    <p className={`text-xs font-medium ${badge.unlocked ? 'text-gray-900' : 'text-gray-400'}`}>
                      {badge.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}