import { MapPin, Leaf, Building, Utensils, Palette } from "lucide-react";
import { useState } from "react";

export function MapExplorer() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Tout", icon: MapPin },
    { id: "culture", label: "Culture", icon: Palette },
    { id: "nature", label: "Nature", icon: Leaf },
    { id: "food", label: "Gastronomie", icon: Utensils },
  ];

  const pins = [
    { x: 35, y: 25, color: "var(--vialy-coral)", size: "large" },
    { x: 55, y: 30, color: "var(--vialy-coral)", size: "medium" },
    { x: 65, y: 35, color: "#6BCF7F", size: "large" },
    { x: 40, y: 50, color: "var(--vialy-coral-light)", size: "small" },
    { x: 50, y: 55, color: "var(--vialy-blue)", size: "medium" },
    { x: 32, y: 62, color: "#9D88E5", size: "large" },
    { x: 42, y: 68, color: "#9D88E5", size: "medium" },
    { x: 75, y: 65, color: "#6BCF7F", size: "large" },
    { x: 30, y: 80, color: "var(--vialy-coral)", size: "medium" },
    { x: 72, y: 85, color: "var(--vialy-coral-light)", size: "large" },
  ];

  return (
    <section className="py-24 bg-orange-50/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold text-gray-900">
            Explore ta ville avec une <span className="text-vialy-coral font-extrabold">carte interactive</span>
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Découvre des lieux cachés, filtre par catégorie et crée ton propre parcours d'aventure
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Map Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Filter Pills */}
            <div className="p-6 bg-gradient-to-b from-white to-orange-50/30 border-b border-gray-100">
              <div className="flex gap-3 flex-wrap justify-center">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all cursor-pointer hover:scale-105 active:scale-95 ${
                      activeFilter === filter.id
                        ? "bg-gray-900 text-white shadow-lg font-medium"
                        : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 font-medium"
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    <span className="text-sm">{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-[4/3] bg-gray-100">
              {/* Simulated Map Background */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              {/* Street Grid Overlay */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D1D5DB" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Major streets */}
                <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#9CA3AF" strokeWidth="1" opacity="0.3"/>
                <line x1="0" y1="60%" x2="100%" y2="65%" stroke="#9CA3AF" strokeWidth="1" opacity="0.3"/>
                <line x1="30%" y1="0" x2="35%" y2="100%" stroke="#9CA3AF" strokeWidth="1" opacity="0.3"/>
                <line x1="70%" y1="0" x2="72%" y2="100%" stroke="#9CA3AF" strokeWidth="1" opacity="0.3"/>
              </svg>

              {/* Map Pins */}
              {pins.map((pin, index) => {
                const sizes = {
                  small: "w-10 h-10",
                  medium: "w-12 h-12",
                  large: "w-14 h-14"
                };
                
                return (
                  <div
                    key={index}
                    className={`absolute ${sizes[pin.size as keyof typeof sizes]} -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <div 
                      className="w-full h-full rounded-full shadow-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:shadow-xl"
                      style={{ backgroundColor: pin.color }}
                    >
                      <MapPin className="w-1/2 h-1/2" fill="white" />
                    </div>
                    {/* Pulse effect */}
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-75"
                      style={{ backgroundColor: pin.color, animationDuration: '2s' }}
                    ></div>
                  </div>
                );
              })}

              {/* Legend Labels */}
              <div className="absolute top-4 left-4 bg-white rounded-2xl shadow-lg p-4 text-xs">
                <div className="text-gray-500 mb-2 font-medium">Paris, France</div>
                <div className="text-gray-900 font-bold">48 points d'intérêt</div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="p-6 bg-gradient-to-b from-orange-50/30 to-white">
              <div className="flex items-center justify-between max-w-3xl mx-auto">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-vialy-coral border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[#6BCF7F] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-vialy-blue border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-[#9D88E5] border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-vialy-coral-light border-2 border-white"></div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    <span className="text-gray-900 font-bold">5 catégories</span> de découverte
                  </div>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-vialy-blue to-vialy-coral text-white rounded-xl text-sm font-semibold shadow-md">
                  Nouvelle quête disponible 🎯
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
