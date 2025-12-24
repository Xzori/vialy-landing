import { Trophy, Target, TrendingUp, Award, Footprints, Zap, Star, Compass } from "lucide-react";

export function Community() {
  const leaderboard = [
    { rank: 1, name: "Sophie Martin", points: 12500, badge: "🏆", borderColor: "border-[#F37466]" },
    { rank: 2, name: "Lucas Dubois", points: 11200, badge: "🥇", borderColor: "border-[#8CC6DC]" },
    { rank: 3, name: "Emma Bernard", points: 10800, badge: "🥈", borderColor: "border-[#F89F8F]" },
    { rank: 4, name: "Thomas Petit", points: 9500, badge: "", borderColor: "border-gray-200" },
    { rank: 5, name: "Léa Moreau", points: 9100, badge: "", borderColor: "border-gray-200" },
  ];

  const badges = [
    { icon: Footprints, name: "Premiers Pas", unlocked: true, color: "#8CC6DC" },
    { icon: Zap, name: "Coureur 3km", unlocked: false, color: "#CBD5E1" },
    { icon: Star, name: "Papillon social", unlocked: false, color: "#CBD5E1" },
    { icon: Target, name: "Marathonien", unlocked: false, color: "#CBD5E1" },
    { icon: Award, name: "Champion", unlocked: false, color: "#CBD5E1" },
    { icon: Compass, name: "Explorateur", unlocked: true, color: "#F37466" },
  ];

  return (
    <section id="communaute" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Rejoins la <span className="text-[#F37466]">communauté</span> des explorateurs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partage tes découvertes, relève des défis et grimpe au classement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Stats Card */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#8CC6DC] to-[#8CC6DC]/80 rounded-3xl p-8 shadow-xl text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm opacity-90 mb-1">CLASSEMENT</div>
                  <div className="text-5xl">#42</div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-90 mb-1">POINTS</div>
                  <div className="text-5xl">2,450</div>
                </div>
              </div>
              
              <div className="h-px bg-white/30 my-6"></div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl mb-1">12</div>
                  <div className="text-xs opacity-90 uppercase tracking-wide">Parcours</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">5</div>
                  <div className="text-xs opacity-90 uppercase tracking-wide">Séries</div>
                </div>
                <div>
                  <div className="text-3xl mb-1">8</div>
                  <div className="text-xs opacity-90 uppercase tracking-wide">Badges</div>
                </div>
              </div>
            </div>

            {/* Challenge Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#F37466] rounded-2xl flex items-center justify-center text-white text-2xl">
                  🏆
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1">Défi de la Semaine</h3>
                  <p className="text-sm text-gray-500">Complétez 5 parcours urbains</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl text-gray-900">2/5</span>
                  <span className="text-[#F37466]">Récompense: +500 pts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#F37466] h-3 rounded-full transition-all"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard & Badges */}
          <div className="space-y-8">
            {/* Leaderboard */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F37466]/10 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[#F37466]" />
                </div>
                <div>
                  <h3 className="text-2xl">Classement Global</h3>
                  <p className="text-sm text-gray-500">Top explorateurs cette semaine</p>
                </div>
              </div>

              <div className="space-y-3">
                {leaderboard.slice(0, 3).map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#8CC6DC]/5 to-[#F37466]/5"
                  >
                    <div className={`w-14 h-14 rounded-full border-4 ${user.borderColor} bg-gray-100 flex items-center justify-center text-2xl`}>
                      {user.badge}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">{user.name}</div>
                      <div className="text-xs text-[#8CC6DC]">{user.points.toLocaleString()} pts</div>
                    </div>
                    <div className="text-2xl">#{user.rank}</div>
                  </div>
                ))}
                {leaderboard.slice(3).map((user, index) => (
                  <div
                    key={index + 3}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center text-xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="text-sm">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.points.toLocaleString()} pts</div>
                    </div>
                    <div className="text-xl text-gray-500">#{user.rank}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges Collection */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl mb-6 uppercase tracking-wide">Collection de Badges</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-2 ${
                        badge.unlocked ? 'bg-gray-100' : 'bg-gray-50'
                      }`}
                      style={{ backgroundColor: badge.unlocked ? `${badge.color}15` : '#F9FAFB' }}
                    >
                      <badge.icon 
                        className="w-7 h-7" 
                        style={{ color: badge.unlocked ? badge.color : '#CBD5E1' }}
                      />
                    </div>
                    <p className={`text-xs ${badge.unlocked ? 'text-gray-700' : 'text-gray-400'}`}>
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