import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/hero-landscape.jpg";
import recursosImg from "@/assets/recursos-naturales.jpg";
import industriaImg from "@/assets/industria.jpg";
import serviciosImg from "@/assets/servicios.jpg";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import {
  ArrowRight,
  Leaf,
  Factory,
  Users,
  BarChart3,
  Droplets,
  GraduationCap,
  Wheat,
  Mountain,
} from "lucide-react";

const topicCards = [
  {
    img: recursosImg,
    icon: Leaf,
    title: "Recursos Naturales",
    subtitle: "La Tierra",
    desc: "Recursos renovables, no renovables, problemas ambientales, pobreza, desempleo y economía informal.",
    path: "/recursos-naturales",
    number: "01",
  },
  {
    img: industriaImg,
    icon: Factory,
    title: "Sectores Económicos",
    subtitle: "El Paisaje Económico",
    desc: "Desarrollo agropecuario, industrial y de servicios. Transporte, telecomunicaciones, vivienda y educación.",
    path: "/sectores-economicos",
    number: "02",
  },
  {
    img: serviciosImg,
    icon: Users,
    title: "Datos del Estudiante",
    subtitle: "Créditos",
    desc: "Información del estudiante, matrícula, facultad, carrera y bibliografía de las fuentes consultadas.",
    path: "/datos",
    number: "03",
  },
];

const sectorData = [
  { name: "Agropecuario", value: 3.8, label: "Sector primario" },
  { name: "Industria", value: 29.5, label: "Sector secundario" },
  { name: "Servicios", value: 63.8, label: "Sector terciario" },
];

const keyIndicators = [
  {
    icon: Mountain,
    value: "1.964M",
    label: "km² de territorio",
    desc: "México cuenta con gran diversidad geográfica, climática y ecológica.",
  },
  {
    icon: Users,
    value: "126M",
    label: "habitantes",
    desc: "La población influye directamente en el uso de recursos y en la demanda de servicios.",
  },
  {
    icon: Wheat,
    value: "3",
    label: "sectores productivos",
    desc: "La economía nacional se organiza en actividades primarias, secundarias y terciarias.",
  },
  {
    icon: GraduationCap,
    value: "1",
    label: "reto central",
    desc: "Convertir el crecimiento económico en desarrollo con equidad social.",
  },
];

const thematicStats = [
  {
    icon: Leaf,
    title: "Recursos",
    stat: "Renovables y no renovables",
    desc: "La riqueza natural de México incluye agua, suelos, flora, fauna y minerales.",
  },
  {
    icon: Droplets,
    title: "Agua",
    stat: "Uso desigual",
    desc: "El acceso al agua y su aprovechamiento sustentable siguen siendo un desafío nacional.",
  },
  {
    icon: Factory,
    title: "Economía",
    stat: "Servicios dominan",
    desc: "La actividad económica actual se concentra principalmente en el sector terciario.",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src={heroImg}
            alt="Campos de agave en México al atardecer con montañas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 p-6 md:p-12 lg:p-20 max-w-4xl">
          <motion.p
            className="font-body text-xs uppercase tracking-[0.3em] text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Exhibición Académica Interactiva
          </motion.p>

          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.88] mb-6 text-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Recursos y{" "}
            <motion.span
              className="grana-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Necesidades
            </motion.span>
            <br />
            de México
          </motion.h1>

          <motion.p
            className="font-body text-base md:text-lg text-white max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Una exploración visual de la tensión entre la riqueza natural del territorio mexicano
            y las necesidades de su población. Basado en el análisis del libro
            <em className="grana-accent"> Problemas económicos de México y sustentabilidad</em>.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.button
              onClick={() => navigate("/recursos-naturales")}
              className="group bg-primary text-primary-foreground px-10 py-5 font-body text-sm uppercase tracking-widest hover:bg-grana transition-all duration-300 flex items-center gap-3 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Explorar
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => navigate("/sectores-economicos")}
              className="group bg-background/70 backdrop-blur-sm text-foreground px-10 py-5 font-body text-sm uppercase tracking-widest border border-primary/20 hover:bg-background transition-all duration-300 flex items-center gap-3 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ver sectores
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Data strip */}
        <motion.div
          className="relative z-10 border-t border-primary/30 grid grid-cols-3 divide-x divide-primary/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {[
            { num: "1.964M", label: "km² de territorio" },
            { num: "126M", label: "habitantes" },
            { num: "12°", label: "economía mundial" },
          ].map((d) => (
            <div key={d.label} className="p-4 md:p-6 bg-background/80 backdrop-blur-sm">
              <span className="font-display text-2xl md:text-4xl font-bold">{d.num}</span>
              <span className="block font-body text-xs text-muted-foreground mt-1">{d.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* TOPIC CARDS */}
      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Contenido
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl">
              Explora los temas de la exhibición
            </h2>
          </AnimateIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 border-t border-primary" staggerDelay={0.15}>
          {topicCards.map((card) => (
            <StaggerItem key={card.path}>
              <motion.div
                className="group cursor-pointer border-r border-primary/30 last:border-r-0 overflow-hidden"
                onClick={() => navigate(card.path)}
                whileHover={{ backgroundColor: "hsl(155 15% 88% / 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[280px] overflow-hidden">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="font-display text-6xl font-bold text-primary-foreground/20">
                      {card.number}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <card.icon className="w-5 h-5 text-primary" />
                    <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {card.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-body text-xs uppercase tracking-widest bg-primary text-primary-foreground px-5 py-3 group-hover:bg-grana group-hover:gap-3 transition-all duration-300 shadow-md">
                    Explorar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* GRAPH SECTION */}
      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-5 h-5 text-primary" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Panorama visual
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
              Una lectura rápida de la estructura económica de México
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Estas visualizaciones resumen la relación entre territorio, población,
              recursos y sectores productivos. Sirven como introducción a los temas
              desarrollados en la exhibición.
            </p>
          </AnimateIn>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] border-t border-primary">
          {/* BARRAS */}
          <div className="p-6 md:p-12 border-r border-primary/20">
            <AnimateIn>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Participación de sectores
              </p>
            </AnimateIn>

            <div className="space-y-6">
              {sectorData.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <h3 className="font-display text-xl font-bold">{item.name}</h3>
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                    <span className="font-display text-2xl font-bold text-primary">
                      {item.value}%
                    </span>
                  </div>

                  <div className="w-full h-5 bg-secondary overflow-hidden">
                    <motion.div
                      className={`h-full ${
                        item.name === "Agropecuario"
                          ? "bg-primary/50"
                          : item.name === "Industria"
                          ? "bg-grana"
                          : "bg-primary"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 p-6 border border-primary/15 bg-secondary/30"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                La mayor parte de la economía mexicana se concentra en los servicios,
                mientras que la industria conserva un peso decisivo y el sector agropecuario
                mantiene una importancia estratégica por su relación con los alimentos,
                el territorio y la población rural.
              </p>
            </motion.div>
          </div>

          {/* TARJETAS LADO DERECHO */}
          <div className="p-6 md:p-12">
            <AnimateIn>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Indicadores clave
              </p>
            </AnimateIn>

            <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
              {keyIndicators.map((item) => (
                <StaggerItem key={item.label}>
                  <motion.div
                    className="border border-primary/15 p-6 h-full bg-background hover:bg-secondary/30 transition-colors"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-7 h-7 text-primary mb-4" />
                    <span className="font-display text-3xl font-bold block">{item.value}</span>
                    <span className="font-body text-xs uppercase tracking-widest text-muted-foreground block mt-1">
                      {item.label}
                    </span>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
                      {item.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* THEMATIC STRIP */}
      <section className="border-t border-primary section-agave">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
              Ejes del análisis
            </h2>
            <p className="font-body text-sm text-primary-foreground/70 max-w-2xl leading-relaxed">
              El proyecto relaciona naturaleza, economía y sociedad para mostrar que
              los recursos del país no pueden entenderse sin considerar las necesidades
              de la población.
            </p>
          </AnimateIn>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-3 border-t border-primary-foreground/20"
          staggerDelay={0.15}
        >
          {thematicStats.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="p-6 md:p-10 border-r border-primary-foreground/20 last:border-r-0 h-full"
                whileHover={{ backgroundColor: "hsl(155 24% 20% / 1)" }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-8 h-8 text-primary-foreground/60 mb-5" />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mb-2">
                  {item.title}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3">{item.stat}</h3>
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20 grid lg:grid-cols-2 gap-10 items-center">
          <AnimateIn>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Recorrido sugerido
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-2xl">
                Empieza por los recursos y termina en las necesidades sociales
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
                El recorrido ideal de esta página comienza con la riqueza natural del país,
                continúa con los sectores económicos y termina con los datos del estudiante
                y las fuentes que respaldan el proyecto.
              </p>
            </div>
          </AnimateIn>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.button
              onClick={() => navigate("/recursos-naturales")}
              className="bg-primary text-primary-foreground px-6 py-6 text-left shadow-lg hover:bg-grana transition-all"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-body text-xs uppercase tracking-widest block mb-2">
                Paso 1
              </span>
              <span className="font-display text-2xl font-bold block">
                Recursos Naturales
              </span>
            </motion.button>

            <motion.button
              onClick={() => navigate("/sectores-economicos")}
              className="bg-secondary text-secondary-foreground px-6 py-6 text-left shadow-lg hover:bg-primary hover:text-primary-foreground transition-all"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-body text-xs uppercase tracking-widest block mb-2">
                Paso 2
              </span>
              <span className="font-display text-2xl font-bold block">
                Sectores Económicos
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Bottom quote */}
      <section className="border-t border-primary section-recinto">
        <div className="p-12 md:p-20 lg:p-32 text-center">
          <AnimateIn>
            <blockquote className="font-display text-2xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto text-recinto-foreground">
              "Comprender los recursos de México es comprender la tensión entre lo que
              <span className="grana-accent"> la tierra ofrece</span> y lo que
              <span className="grana-accent"> el pueblo necesita</span>."
            </blockquote>
            <p className="font-body text-xs text-recinto-foreground/40 mt-8 uppercase tracking-widest">
              Exhibición Académica · 2026
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
};

export default Index;
