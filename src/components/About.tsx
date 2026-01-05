export function About() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-vialy-coral/10 rounded-full mb-4">
            <span className="text-vialy-coral">À propos de Vialy</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl tracking-tight">
            L'app qui transforme tes marches en <span className="text-vialy-blue">aventures personnalisées</span> grâce à l'IA
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Dans un monde urbain où nous passons souvent à côté des trésors cachés de nos villes, 
            Vialy réinvente la promenade quotidienne. Notre intelligence artificielle analyse tes préférences, 
            ton humeur et ton environnement pour créer des parcours uniques qui réveillent ta curiosité 
            et te reconnectent à l'essence de ta ville.
          </p>
        </div>
      </div>
    </section>
  );
}
