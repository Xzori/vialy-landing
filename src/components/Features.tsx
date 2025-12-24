import { Sparkles, Users, MapPin } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Parcours IA personnalisés",
      description: "Notre IA crée des itinéraires uniques adaptés à tes envies, ton niveau d'énergie et ton temps disponible.",
      color: "#8CC6DC",
      bgColor: "bg-[#8CC6DC]/10",
    },
    {
      icon: Users,
      title: "Quêtes & communauté",
      description: "Relève des défis quotidiens, monte dans le classement et partage tes découvertes avec une communauté d'explorateurs urbains.",
      color: "#F37466",
      bgColor: "bg-[#F37466]/10",
    },
    {
      icon: MapPin,
      title: "Découverte locale",
      description: "Explore des lieux secrets, des histoires insolites et des points de vue méconnus à deux pas de chez toi.",
      color: "#8CC6DC",
      bgColor: "bg-[#8CC6DC]/10",
    },
  ];

  return (
    <section id="fonctionnalites" className="py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Pourquoi choisir <span className="text-[#F37466]">Vialy</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expérience de marche réinventée pour les urbains curieux
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
              </div>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}