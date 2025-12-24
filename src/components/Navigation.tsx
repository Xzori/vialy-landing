import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logoVialy from "figma:asset/9ef533a049266054c006b97c7fbeb9dba0ba9d7c.png";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer">
            <img 
              src={logoVialy} 
              alt="Vialy Logo" 
              className="w-12 h-12 rounded-2xl"
            />
            <span className="text-2xl">Vialy</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('fonctionnalites')} 
              className="text-gray-700 hover:text-[#8CC6DC] transition-colors"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => scrollToSection('parcours')} 
              className="text-gray-700 hover:text-[#8CC6DC] transition-colors"
            >
              Parcours
            </button>
            <button 
              onClick={() => scrollToSection('communaute')} 
              className="text-gray-700 hover:text-[#8CC6DC] transition-colors"
            >
              Communauté
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('download')}
              className="bg-gradient-to-r from-[#8CC6DC] to-[#F37466] hover:opacity-90 text-white px-6 rounded-xl hidden md:inline-flex"
            >
              Liste d'attente
            </Button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}