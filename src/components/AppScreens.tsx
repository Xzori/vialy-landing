import screenDiscover from "figma:asset/695d267fed4015800fa7198bcc9a80fb5cecaf11.png";
import screenProfile from "figma:asset/eb4ac4acbb545c49ce2243f8edf3af66ea8da54d.png";
import screenCommunity from "figma:asset/b402fa0c72429dacc5824a14fd76bdc8d1d5d4dc.png";

export function AppScreens() {
  const screens = [
    {
      title: "Découvrir",
      description: "Parcours personnalisés par l'IA",
      image: screenDiscover,
    },
    {
      title: "Profil",
      description: "Ton compte et tes préférences",
      image: screenProfile,
    },
    {
      title: "Communauté",
      description: "Quêtes et classements",
      image: screenCommunity,
    },
  ];

  return (
    <section id="parcours" className="py-24 bg-orange-50/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Une expérience <span className="text-vialy-blue">fluide</span> et <span className="text-vialy-coral">intuitive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvre l'interface pensée pour rendre chaque promenade inoubliable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
                <img 
                  src={screen.image} 
                  alt={`Vialy App - ${screen.title}`} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-lg mb-1">{screen.title}</h3>
                <p className="text-sm text-gray-500">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}