import { Button } from "./ui/button";
import { Download, Compass } from "lucide-react";
import screenDiscover from "figma:asset/0dab7a4cc1d44b2e8a4b042c1629857e31ce7b7c.png";

export function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8CC6DC]/10 via-white to-[#F37466]/5">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#8CC6DC]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F37466]/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-[#8CC6DC]/20 rounded-full">
              <span className="text-[#8CC6DC]">✨ Découvrez votre ville autrement</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl tracking-tight">
              Transformez vos <span className="text-[#8CC6DC]">marches</span> en <span className="text-[#F37466]">aventures</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Vialy utilise l'IA pour créer des parcours personnalisés qui reconnectent les urbains à leur ville et à eux-mêmes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToDownload}
                className="bg-[#F37466] hover:bg-[#F37466]/90 text-white px-8 py-6 rounded-2xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Rejoindre la liste d'attente
              </Button>
              <Button 
                onClick={scrollToAbout}
                variant="outline" 
                className="border-2 border-[#8CC6DC] text-[#8CC6DC] hover:bg-[#8CC6DC]/10 px-8 py-6 rounded-2xl bg-white"
              >
                <Compass className="mr-2 h-5 w-5" />
                Découvrir
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div>
                <div className="text-3xl text-[#8CC6DC]">50K+</div>
                <div className="text-sm text-gray-500">Utilisateurs actifs</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl text-[#F37466]">200+</div>
                <div className="text-sm text-gray-500">Parcours uniques</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl text-[#8CC6DC]">4.8★</div>
                <div className="text-sm text-gray-500">Note moyenne</div>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup with Real Screenshot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screen Content - Real Screenshot (cropped to remove status bar) */}
                  <img 
                    src={screenDiscover} 
                    alt="Vialy App - Découvrir" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top', marginTop: '-60px' }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-12 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F37466] rounded-xl flex items-center justify-center text-white">🎯</div>
                  <div>
                    <div className="text-xs text-gray-500">Quête du jour</div>
                    <div className="text-sm">+150 pts</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float z-20" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8CC6DC] rounded-xl flex items-center justify-center text-white">🏆</div>
                  <div>
                    <div className="text-xs text-gray-500">Rang actuel</div>
                    <div className="text-sm">Explorer #42</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}