import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import recursosImg from "@/assets/recursos-naturales.jpg";
import { AnimateIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/AnimationUtils";
import { Droplets, Sun, Wind, Gem, Fuel, Mountain, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";

const renovables = [
  { icon: Sun, title: "Energía Solar", desc: "México recibe una irradiación solar promedio de 5.5 kWh/m² diarios, ubicándolo entre los países con mayor potencial solar del mundo. El desierto de Sonora y la Península de Baja California concentran las mayores oportunidades." },
  { icon: Wind, title: "Energía Eólica", desc: "El Istmo de Tehuantepec es una de las regiones con mayores corrientes de viento aprovechables en América Latina. Actualmente se generan más de 7,000 MW de capacidad eólica instalada." },
  { icon: Droplets, title: "Recursos Hídricos", desc: "El país cuenta con 51 ríos principales y 653 acuíferos, aunque la distribución del agua es profundamente desigual entre norte y sur. El 77% del agua se usa en actividades agrícolas." },
];

const noRenovables = [
  { icon: Fuel, title: "Petróleo y Gas", desc: "México fue durante décadas uno de los principales productores de petróleo del mundo. Pemex sigue siendo pilar de la economía, aunque la producción ha declinado desde 2004. Las reservas probadas alcanzan los 5,786 millones de barriles." },
  { icon: Gem, title: "Minerales", desc: "Primer productor mundial de plata, con yacimientos importantes de oro, cobre, zinc y litio. La minería aporta aproximadamente 2.4% del PIB y genera más de 379,000 empleos directos." },
  { icon: Mountain, title: "Suelos y Bosques", desc: "64.5 millones de hectáreas de bosques y selvas, pero la deforestación avanza a un ritmo de 150,000 hectáreas anuales. La pérdida de suelo fértil amenaza la seguridad alimentaria." },
];

const RecursosNaturalesPage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <main className="bg-background text-foreground min-h-screen">
        {/* HERO */}
        <section className="relative h-[70vh] flex flex-col justify-end overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img src={recursosImg} alt="Selva y río en las montañas de México" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          </motion.div>

          <div className="relative z-10 p-6 md:p-12 lg:p-20 text-primary-foreground">
            <motion.button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 font-body text-sm uppercase tracking-widest mb-8 bg-primary-foreground/20 hover:bg-primary-foreground/40 backdrop-blur-sm px-5 py-3 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <ArrowLeft className="w-5 h-5" /> Inicio
            </motion.button>
            <motion.p
              className="font-body text-xs uppercase tracking-[0.3em] opacity-60 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              01 — La Tierra
            </motion.p>
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold leading-[0.9]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Recursos<br />Naturales
            </motion.h1>
            <motion.p
              className="font-body text-base opacity-80 max-w-xl mt-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              México es considerado un país megadiverso: alberga entre el 10% y 12% de la biodiversidad mundial.
            </motion.p>
          </div>
        </section>

        {/* RENOVABLES */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">Recursos Renovables</h2>
              <p className="font-body text-sm text-muted-foreground max-w-xl">
                Fuentes de energía y materias primas que se regeneran naturalmente y representan el futuro sustentable.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 border-t border-primary divide-y md:divide-y-0 md:divide-x divide-primary/30" staggerDelay={0.15}>
            {renovables.map((r) => (
              <StaggerItem key={r.title}>
                <motion.div
                  className="tectonic-card h-full group"
                  whileHover={{ backgroundColor: "hsl(155 15% 88% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                    <r.icon className="w-10 h-10 text-primary mb-6" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold mb-3">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* NO RENOVABLES */}
        <section className="border-t border-primary section-agave">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">Recursos No Renovables</h2>
              <p className="font-body text-sm text-primary-foreground/70 max-w-xl">
                Recursos que se agotan con la explotación y no se regeneran en escalas humanas de tiempo.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 border-t border-primary-foreground/20 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20" staggerDelay={0.15}>
            {noRenovables.map((r) => (
              <StaggerItem key={r.title}>
                <div className="p-6 md:p-10 h-full">
                  <r.icon className="w-10 h-10 text-primary-foreground/60 mb-6" />
                  <h3 className="font-display text-xl font-bold mb-3">{r.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* PROBLEMAS AMBIENTALES */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-grana" />
                <p className="font-body text-xs uppercase tracking-[0.3em] grana-accent">Crisis Ambiental</p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Problemas Ambientales</h2>
            </AnimateIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 border-t border-primary divide-y md:divide-y-0 md:divide-x divide-primary/30" staggerDelay={0.2}>
            {[
              { stat: "150K", unit: "ha/año", label: "de deforestación", desc: "La tala ilegal y el cambio de uso de suelo destruyen ecosistemas vitales para el equilibrio climático." },
              { stat: "70%", unit: "", label: "de cuerpos de agua contaminados", desc: "Ríos, lagos y acuíferos enfrentan contaminación industrial, agrícola y urbana sin tratamiento adecuado." },
              { stat: "2,500+", unit: "", label: "especies en riesgo", desc: "La pérdida de hábitat y el cambio climático amenazan la biodiversidad única de México." },
            ].map((d) => (
              <StaggerItem key={d.label}>
                <div className="p-6 md:p-10">
                  <motion.span
                    className="data-block grana-accent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    {d.stat}
                    <span className="text-lg font-body font-normal ml-1">{d.unit}</span>
                  </motion.span>
                  <h3 className="font-display text-lg font-bold mt-4">{d.label}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* POBLACIÓN - LA FRACTURA */}
        <section className="border-t border-primary section-recinto">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-recinto-foreground/40 mb-4">La Fractura</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-recinto-foreground">
                La riqueza de la tierra,<br />
                <motion.span
                  className="grana-accent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  la necesidad de su gente
                </motion.span>
              </h2>
            </AnimateIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 border-t border-grana/30 divide-y md:divide-y-0 md:divide-x divide-grana/30" staggerDelay={0.2}>
            {[
              { stat: "43.9%", title: "Pobreza", desc: "55.7 millones de personas viven en situación de pobreza. 8.5 millones en pobreza extrema, sin acceso a alimentación adecuada. La pobreza se concentra en Chiapas, Guerrero y Oaxaca." },
              { stat: "55.6%", title: "Economía Informal", desc: "Más de la mitad de la población ocupada trabaja sin acceso a seguridad social, prestaciones laborales ni estabilidad económica. Es el reflejo estructural de un modelo que no incluye a todos." },
            ].map((d) => (
              <StaggerItem key={d.title}>
                <div className="p-8 md:p-12" style={{ borderColor: "hsl(var(--grana) / 0.3)" }}>
                  <motion.span
                    className="data-block grana-accent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {d.stat}
                  </motion.span>
                  <h3 className="font-display text-xl font-bold mt-4 text-recinto-foreground">{d.title}</h3>
                  <p className="font-body text-sm text-recinto-foreground/60 mt-2 leading-relaxed max-w-md">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="border-t border-grana/30 p-8 md:p-12 grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { stat: "3.3%", title: "Desempleo", desc: "La tasa oficial no refleja el subempleo ni las condiciones precarias de millones de trabajadores." },
              { stat: "21M", title: "Sin Acceso a Salud", desc: "Millones carecen de acceso efectivo a servicios de salud, agravando la vulnerabilidad social." },
              { stat: "16.2%", title: "Rezago Educativo", desc: "19 millones de personas de 15+ años no completaron la educación básica obligatoria." },
            ].map((d) => (
              <StaggerItem key={d.title}>
                <div>
                  <span className="font-display text-3xl font-bold grana-accent">{d.stat}</span>
                  <h4 className="font-display text-lg font-semibold mt-2 text-recinto-foreground">{d.title}</h4>
                  <p className="font-body text-sm text-recinto-foreground/60 mt-1 leading-relaxed">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Navigate to next */}
        <section className="border-t border-primary p-8 md:p-12 flex flex-wrap justify-between items-center gap-4">
          <motion.button
            onClick={() => navigate("/")}
            className="font-body text-sm uppercase tracking-widest bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-6 py-4 transition-all duration-300 flex items-center gap-3 shadow-md"
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowLeft className="w-5 h-5" /> Inicio
          </motion.button>
          <motion.button
            onClick={() => navigate("/sectores-economicos")}
            className="group font-body text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-grana px-6 py-4 transition-all duration-300 flex items-center gap-3 shadow-lg"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            Sectores Económicos <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </section>
      </main>
    </PageTransition>
  );
};

export default RecursosNaturalesPage;
