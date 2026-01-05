import { Sparkles, Users, MapPin } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Parcours IA personnalisés",
      description: "Notre IA crée des itinéraires uniques adaptés à tes envies, ton niveau d'énergie et ton temps disponible.",
      color: "var(--vialy-blue)",
      bgColor: "bg-vialy-blue/10",
    },
    {
      icon: Users,
      title: "Quêtes & communauté",
      description: "Relève des défis quotidiens, monte dans le classement et partage tes découvertes avec une communauté d'explorateurs urbains.",
      color: "var(--vialy-coral)",
      bgColor: "bg-vialy-coral/10",
    },
    {
      icon: MapPin,
      title: "Découverte locale",
      description: "Explore des lieux secrets, des histoires insolites et des points de vue méconnus à deux pas de chez toi.",
      color: "var(--vialy-blue)",
      bgColor: "bg-vialy-blue/10",
    },
  ];

  return (
    <section id="fonctionnalites" className="py-24 bg-gradient-to-b from-white to-orange-50/50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 font-bold text-gray-900">
            Pourquoi choisir <span className="text-vialy-coral font-extrabold">Vialy</span> ?
          </h2>
          <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            Une expérience de marche réinventée pour les urbains curieux
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
              </div>
              <h3 className="text-2xl mb-4 font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}