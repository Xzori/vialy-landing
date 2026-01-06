import { Button } from "./ui/button";
import { MagneticButton } from "./ui/MagneticButton";
import { Download, Compass } from "lucide-react";
import { scrollToSection } from "../hooks/useScrollToSection";
import screenDiscover from "figma:asset/0dab7a4cc1d44b2e8a4b042c1629857e31ce7b7c.png";
import { motion } from "framer-motion";

export function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const titleWords = ["Transformez", "vos", "marches", "en", "aventures"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 bg-noise z-0 pointer-events-none"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-vialy-blue/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-vialy-coral/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-purple-200/40 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-vialy-blue/10 rounded-full border border-vialy-blue/20 backdrop-blur-sm">
              <span className="text-vialy-blue font-semibold text-sm tracking-wide">✨ DÉCOUVREZ VOTRE VILLE AUTREMENT</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight font-bold text-gray-900 leading-[1.1] flex flex-wrap gap-x-2 sm:gap-x-3 justify-center lg:justify-start">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={
                    word === "marches" ? "text-vialy-blue" :
                      word === "aventures" ? "text-vialy-coral" : ""
                  }
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Vialy utilise l'IA pour créer des parcours personnalisés qui reconnectent les urbains à leur ville et à eux-mêmes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MagneticButton>
                <Button
                  onClick={() => scrollToSection('download')}
                  className="bg-vialy-coral hover:bg-vialy-coral/90 text-white px-8 py-6 rounded-2xl font-semibold shadow-lg shadow-vialy-coral/20 w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Rejoindre la liste d'attente
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  onClick={() => scrollToSection('about')}
                  variant="outline"
                  className="border-2 border-vialy-blue/20 text-vialy-blue hover:bg-vialy-blue/5 px-8 py-6 rounded-2xl bg-white/50 backdrop-blur-sm font-semibold w-full sm:w-auto"
                >
                  <Compass className="mr-2 h-5 w-5" />
                  Découvrir
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 sm:gap-8 justify-center lg:justify-start pt-6">
              <div>
                <div className="text-3xl text-vialy-blue font-bold">50K+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Utilisateurs</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl text-vialy-coral font-bold">200+</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Parcours</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl text-vialy-blue font-bold">4.8★</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Avis</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup with Real Screenshot */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
          >
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
              {/* Phone Frame */}
              <div className="relative w-[260px] h-[520px] sm:w-[320px] sm:h-[650px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-900/5">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative border-[4px] border-gray-900">
                  <img
                    src={screenDiscover}
                    alt="Vialy App - Découvrir"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top', marginTop: '-60px' }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 -right-6 sm:top-16 sm:-right-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 z-20 border border-white/50"
                variants={floatVariants}
                animate="animate"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-vialy-coral rounded-xl flex items-center justify-center text-white shadow-lg shadow-vialy-coral/30">🎯</div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Quête du jour</div>
                    <div className="text-sm font-bold text-gray-800">+150 pts</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-6 sm:bottom-20 sm:-left-12 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 z-20 border border-white/50"
                variants={floatVariants}
                animate="animate"
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-vialy-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-vialy-blue/30">🏆</div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Rang actuel</div>
                    <div className="text-sm font-bold text-gray-800">Explorer #42</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
