import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { AppScreens } from "./components/AppScreens";
import { MapExplorer } from "./components/MapExplorer";
import { Community } from "./components/Community";
import { CTAFooter } from "./components/CTAFooter";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Features />
        <AppScreens />
        <MapExplorer />
        <Community />
      </main>
      
      <CTAFooter />
    </div>
  );
}