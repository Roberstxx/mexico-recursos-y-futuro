import { useState, useEffect } from "react";

const sections = [
  { id: "inicio", label: "Inicio", coord: "19.4326° N" },
  { id: "recursos", label: "Recursos Naturales", coord: "23.6345° N" },
  { id: "poblacion", label: "Población", coord: "20.9674° N" },
  { id: "sectores", label: "Sectores Económicos", coord: "25.6866° N" },
  { id: "datos", label: "Datos", coord: "19.0414° N" },
];

const MapLegend = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="map-legend">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-body text-xs uppercase tracking-widest"
      >
        <span className="inline-block w-2 h-2 bg-grana" />
        Coordenadas
      </button>

      {isOpen && (
        <nav className="mt-4 flex flex-col gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-left text-xs font-body tracking-wide transition-colors py-1 border-l-2 pl-3 ${
                activeSection === s.id
                  ? "border-grana text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="block font-medium">{s.label}</span>
              <span className="text-[10px] text-muted-foreground">{s.coord}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MapLegend;
