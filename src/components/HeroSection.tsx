import heroImg from "@/assets/hero-landscape.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-end">
      {/* Hero image with parallax-like fixed attachment */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Campos de agave en México al atardecer con montañas"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 p-6 md:p-12 lg:p-20 max-w-4xl">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Exhibición Académica Interactiva
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 text-foreground">
          Recursos y<br />
          Necesidades<br />
          de México
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
          Una exploración visual de la tensión entre la riqueza natural del territorio mexicano
          y las necesidades de su población. Basado en el análisis académico del libro
          <em className="grana-accent"> Recursos y Necesidades de México</em>.
        </p>
        <div className="flex gap-4 font-body text-xs uppercase tracking-widest">
          <button
            onClick={() => document.getElementById("recursos")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Explorar
          </button>
        </div>
      </div>

      {/* Bottom data strip */}
      <div className="relative z-10 border-t border-primary/30 grid grid-cols-3 divide-x divide-primary/30">
        {[
          { num: "1.964M", label: "km² de territorio" },
          { num: "126M", label: "habitantes" },
          { num: "12°", label: "economía mundial" },
        ].map((d) => (
          <div key={d.label} className="p-4 md:p-6">
            <span className="font-display text-2xl md:text-4xl font-bold">{d.num}</span>
            <span className="block font-body text-xs text-muted-foreground mt-1">{d.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
