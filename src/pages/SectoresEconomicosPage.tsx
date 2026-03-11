import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import agropecuarioImg from "@/assets/agropecuario.jpg";
import industriaImg from "@/assets/industria.jpg";
import serviciosImg from "@/assets/servicios.jpg";
import { AnimateIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/AnimationUtils";
import { Truck, Wifi, Home, Droplets, GraduationCap, ArrowLeft, ArrowRight } from "lucide-react";

const sectors = [
  {
    img: agropecuarioImg,
    alt: "Agricultor en campos de maíz",
    label: "Sector Primario",
    title: "Desarrollo Agropecuario",
    pib: "3.8%",
    desc: "La agricultura, ganadería, silvicultura y pesca constituyen la base histórica de la economía mexicana. México es líder mundial en producción de aguacate, limón, chile y cerveza.",
    extra: "Sin embargo, el campo enfrenta baja productividad, minifundismo y falta de inversión tecnológica. El 22% de la población rural vive en pobreza extrema.",
    facts: ["22 millones de hectáreas cultivadas", "5.5 millones de trabajadores agrícolas", "Exportaciones agrícolas: $40,000 MDD/año"],
  },
  {
    img: industriaImg,
    alt: "Fábrica industrial mexicana",
    label: "Sector Secundario",
    title: "Desarrollo Industrial",
    pib: "29.5%",
    desc: "El sector industrial es el motor de las exportaciones, dominado por manufactura, automotriz y electrónica. Las maquiladoras y el T-MEC han convertido a México en plataforma global.",
    extra: "Persisten retos de valor agregado y dependencia tecnológica. La industria automotriz emplea a más de 900,000 personas directamente.",
    facts: ["1er exportador automotriz de LATAM", "Sector manufacturero: 17% del PIB", "5,000+ maquiladoras en frontera norte"],
  },
  {
    img: serviciosImg,
    alt: "Mercado tradicional mexicano",
    label: "Sector Terciario",
    title: "Desarrollo de Servicios",
    pib: "63.8%",
    desc: "El sector servicios es la columna vertebral de la economía moderna, abarcando comercio, turismo, finanzas, telecomunicaciones y servicios profesionales.",
    extra: "El turismo por sí solo contribuye con más de 8% del PIB. México es el sexto país más visitado del mundo.",
    facts: ["45 millones de visitantes internacionales/año", "Mayor empleador del sector terciario", "Servicios financieros en expansión digital"],
  },
];

const serviciosDetalle = [
  { icon: Truck, title: "Transporte", desc: "Red carretera de 407,000 km, sistema ferroviario en crecimiento con el Tren Maya y el Interoceánico. Los puertos de Manzanillo y Lázaro Cárdenas son claves para el comercio internacional." },
  { icon: Wifi, title: "Telecomunicaciones", desc: "84 millones de usuarios de internet. La reforma de 2013 transformó el sector, aunque persiste la brecha digital entre zonas urbanas y rurales." },
  { icon: Home, title: "Vivienda", desc: "Déficit habitacional de 8.5 millones de viviendas. INFONAVIT y FOVISSSTE atienden la demanda, pero la autoconstrucción informal sigue siendo la norma en muchas regiones." },
  { icon: Droplets, title: "Agua Potable", desc: "95% de cobertura urbana, 85% rural. El estrés hídrico afecta al 70% del territorio. La infraestructura de tratamiento de aguas es insuficiente." },
  { icon: GraduationCap, title: "Educación", desc: "Factor clave para el desarrollo. México invierte 4.9% del PIB en educación, con 36 millones de estudiantes. La calidad y equidad siguen siendo retos fundamentales." },
];

const SectoresEconomicosPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <main className="bg-background text-foreground min-h-screen">
        {/* HERO */}
        <section className="section-agave">
          <div className="p-6 md:p-12 lg:p-20">
            <motion.button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 font-body text-xs uppercase tracking-widest mb-8 text-primary-foreground/50 hover:text-primary-foreground transition-opacity"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4" /> Inicio
            </motion.button>
            <motion.p
              className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              02 — El Paisaje Económico
            </motion.p>
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Sectores<br />Económicos
            </motion.h1>
            <motion.p
              className="font-body text-base text-primary-foreground/70 max-w-xl mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              La economía mexicana se estructura en tres sectores que revelan la transición
              de un país agrario a una potencia de servicios y manufactura.
            </motion.p>
          </div>

          {/* PIB Treemap */}
          <motion.div
            className="flex h-20 md:h-28 border-t border-primary-foreground/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          >
            <div className="bg-primary-foreground/10 flex items-center justify-center" style={{ width: "3.8%" }}>
              <span className="font-body text-[9px] text-primary-foreground/60 hidden lg:block">3.8%</span>
            </div>
            <div className="grana-bg flex items-center justify-center border-l-2 border-primary" style={{ width: "29.5%" }}>
              <span className="font-body text-xs text-grana-foreground">Industria 29.5%</span>
            </div>
            <div className="section-recinto flex items-center justify-center border-l-2 border-primary" style={{ width: "66.7%" }}>
              <span className="font-body text-xs text-recinto-foreground">Servicios 63.8%</span>
            </div>
          </motion.div>
        </section>

        {/* EACH SECTOR */}
        {sectors.map((s, idx) => (
          <section key={s.title} className="border-t border-primary">
            <div className={`grid md:grid-cols-2 ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
              <motion.div
                className={`overflow-hidden h-[350px] md:h-[500px] ${idx % 2 === 1 ? "md:order-2" : ""}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={s.img}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
              </motion.div>
              <div className={`p-6 md:p-12 flex flex-col justify-center border-l border-primary/30 ${idx % 2 === 1 ? "md:order-1 md:border-l-0 md:border-r border-primary/30" : ""}`}>
                <AnimateIn>
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.label}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">{s.title}</h2>
                  <motion.span
                    className="font-display text-6xl md:text-7xl font-bold text-primary block mt-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    {s.pib}
                  </motion.span>
                  <span className="font-body text-xs text-muted-foreground">del PIB nacional</span>
                  <p className="font-body text-sm text-muted-foreground mt-6 leading-relaxed">{s.desc}</p>
                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{s.extra}</p>
                  <ul className="mt-6 space-y-2">
                    {s.facts.map((f) => (
                      <li key={f} className="font-body text-xs text-foreground flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 bg-grana mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              </div>
            </div>
          </section>
        ))}

        {/* SERVICIOS DETALLE */}
        <section className="border-t border-primary section-agave">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">Infraestructura y Servicios</h2>
              <p className="font-body text-sm text-primary-foreground/70 max-w-xl">
                Los pilares que sostienen el funcionamiento cotidiano del país y determinan la calidad de vida.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-primary-foreground/20" staggerDelay={0.1}>
            {serviciosDetalle.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  className="p-6 md:p-8 border-b border-r border-primary-foreground/20 h-full"
                  whileHover={{ backgroundColor: "hsl(155 24% 20% / 1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring" }}>
                    <s.icon className="w-8 h-8 text-primary-foreground/50 mb-5" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/70 mt-2 leading-relaxed">{s.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Navigation */}
        <section className="border-t border-primary p-8 md:p-12 flex justify-between items-center">
          <button onClick={() => navigate("/recursos-naturales")} className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Recursos Naturales
          </button>
          <button onClick={() => navigate("/datos")} className="group font-body text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors flex items-center gap-2">
            Datos del Estudiante <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </main>
    </PageTransition>
  );
};

export default SectoresEconomicosPage;
