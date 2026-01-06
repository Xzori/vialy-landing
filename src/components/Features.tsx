import { Sparkles, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Parcours IA personnalisés",
      description: "Notre IA crée des itinéraires uniques adaptés à tes envies, ton niveau d'énergie et ton temps disponible.",
      color: "var(--vialy-blue)",
      bgColor: "bg-vialy-blue/10",
      delay: 0,
    },
    {
      icon: Users,
      title: "Quêtes & communauté",
      description: "Relève des défis quotidiens, monte dans le classement et partage tes découvertes avec une communauté d'explorateurs urbains.",
      color: "var(--vialy-coral)",
      bgColor: "bg-vialy-coral/10",
      delay: 0.1,
    },
    {
      icon: MapPin,
      title: "Découverte locale",
      description: "Explore des lieux secrets, des histoires insolites et des points de vue méconnus à deux pas de chez toi.",
      color: "var(--vialy-blue)",
      bgColor: "bg-vialy-blue/10",
      delay: 0.2,
    },
  ];

  return (
    <section id="fonctionnalites" className="py-24 bg-gradient-to-b from-white to-orange-50/50 scroll-mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vialy-coral/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl tracking-tight mb-4 font-bold text-gray-900"
          >
            Pourquoi choisir <span className="text-vialy-coral">Vialy</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-700 font-medium max-w-2xl mx-auto"
          >
            Une expérience de marche réinventée pour les urbains curieux
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="h-full"
            >
              <motion.div
                className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/50 h-full flex flex-col transition-colors duration-300"
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(246, 111, 98, 0.2)" // subtle coral tint on border
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                <h3 className="text-2xl lg:text-3xl mb-4 font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed flex-grow">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}