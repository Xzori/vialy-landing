import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { scrollToSection, scrollToTop } from "../hooks/useScrollToSection";
import logoVialy from "figma:asset/9ef533a049266054c006b97c7fbeb9dba0ba9d7c.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => scrollToSection(sectionId), 100);
  };

  const navItems = [
    { id: 'fonctionnalites', label: 'Fonctionnalités' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'communaute', label: 'Communauté' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform active:scale-95">
            <img
              src={logoVialy}
              alt="Vialy Logo"
              className="w-12 h-12 rounded-2xl"
            />
            <span className="text-2xl">Vialy</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-vialy-blue transition-colors cursor-pointer hover:scale-105 active:scale-95"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button (Desktop) + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection('download')}
              className="bg-gradient-to-r from-vialy-blue to-vialy-coral hover:opacity-90 text-white px-6 rounded-xl hidden md:inline-flex hover:scale-105 active:scale-95 transition-transform shadow-lg hover:shadow-xl"
            >
              Liste d'attente
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="flex items-center gap-3">
                    <img
                      src={logoVialy}
                      alt="Vialy Logo"
                      className="w-10 h-10 rounded-xl"
                    />
                    <span className="text-xl font-bold">Vialy</span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-2 p-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="text-left px-4 py-3 text-gray-700 hover:text-vialy-blue hover:bg-vialy-blue/10 rounded-xl transition-colors font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="p-4 mt-auto">
                  <Button
                    onClick={() => handleNavClick('download')}
                    className="w-full bg-gradient-to-r from-vialy-blue to-vialy-coral hover:opacity-90 text-white py-6 rounded-xl font-semibold"
                  >
                    Rejoindre la liste d'attente
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}