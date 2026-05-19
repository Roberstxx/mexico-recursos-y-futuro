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
  BookOpen,
  Briefcase,
  Building2,
  CircleDollarSign,
  Droplets,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Mail,
  PieChart,
  ReceiptText,
  Scale,
  Ship,
  TrendingDown,
  TrendingUp,
  Vote,
  Wallet,
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

const economicHighlights = [
  {
    icon: Ship,
    label: "Comercio exterior",
    value: "Exportaciones",
    desc: "Intercambio de bienes y servicios con otros países.",
  },
  {
    icon: PieChart,
    label: "Balanza de pagos",
    value: "Registro",
    desc: "Exportaciones, importaciones, inversión, turismo y flujos financieros.",
  },
  {
    icon: Wallet,
    label: "Gasto público",
    value: "Presupuesto",
    desc: "Recursos para servicios, infraestructura, educación, salud y programas sociales.",
  },
  {
    icon: TrendingUp,
    label: "Precios",
    value: "Inflación",
    desc: "Efectos directos en poder adquisitivo, consumo y calidad de vida.",
  },
];

const balanceItems = [
  { label: "Exportaciones", value: "72%", tone: "bg-primary" },
  { label: "Importaciones", value: "64%", tone: "bg-grana" },
  { label: "Inversión", value: "46%", tone: "bg-primary/60" },
  { label: "Turismo", value: "38%", tone: "bg-grana/70" },
];

const politicalTimeline = [
  {
    year: "1917",
    title: "Constitución vigente",
    desc: "Base jurídica de derechos, obligaciones, soberanía nacional y división de poderes.",
  },
  {
    year: "Instituciones",
    title: "Gobierno y vida pública",
    desc: "El funcionamiento institucional organiza decisiones políticas, económicas y sociales.",
  },
  {
    year: "Ciudadanía",
    title: "Participación democrática",
    desc: "La sociedad participa mediante elecciones, opinión pública y vigilancia ciudadana.",
  },
  {
    year: "Retos",
    title: "Transparencia y seguridad",
    desc: "México enfrenta desafíos de corrupción, seguridad y fortalecimiento institucional.",
  },
];

const partyCards = [
  {
    icon: Vote,
    title: "Procesos electorales",
    desc: "Presentan candidaturas y propuestas de gobierno durante las elecciones.",
  },
  {
    icon: Users,
    title: "Representación social",
    desc: "Expresan intereses, ideologías y necesidades de distintos grupos ciudadanos.",
  },
  {
    icon: Handshake,
    title: "Participación ciudadana",
    desc: "Promueven la intervención de la población en la vida democrática del país.",
  },
];

const apaReferences = [
  "Autor desconocido. (s.f.). Problemas económicos de México. Documento PDF proporcionado en clase.",
  "Constitución Política de los Estados Unidos Mexicanos. (1917). México.",
  "Banco de México. (s.f.). Información económica y financiera. https://www.banxico.org.mx/",
  "Instituto Nacional Electoral. (s.f.). Sistema político mexicano. https://www.ine.mx/",
  "Secretaría de Economía. (s.f.). Comercio exterior de México. https://www.gob.mx/se",
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

      {/* NUEVO CONTENIDO - SEGUNDO PARCIAL */}
      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <Globe2 className="w-5 h-5 text-primary" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Nuevo contenido del segundo parcial
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              Panorama Económico y Político de México
            </h2>
            <div className="space-y-4 font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
              <p>
                La economía y la política son elementos fundamentales para comprender
                el funcionamiento y desarrollo de un país. En México, factores como el
                comercio exterior, la balanza de pagos, el gasto gubernamental y la
                inflación influyen directamente en la estabilidad económica y en la
                calidad de vida de la población.
              </p>
              <p>
                Asimismo, el conocimiento de la Constitución Política, la situación
                política actual y el papel de los partidos políticos permite entender
                la organización del Estado y la participación ciudadana dentro de la
                sociedad.
              </p>
            </div>
          </AnimateIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-4 border-t border-primary" staggerDelay={0.1}>
          {economicHighlights.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-primary/25 h-full hover:bg-secondary/40 transition-colors"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-8 h-8 text-primary mb-5" />
                <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  {item.label}
                </p>
                <h3 className="font-display text-2xl font-bold mb-3">{item.value}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* TERCERA SUBCOMPETENCIA */}
      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-5">
              <CircleDollarSign className="w-5 h-5 text-primary" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Tercera Subcompetencia
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-5">
              Economía Nacional e Internacional
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Esta subcompetencia aborda los principales factores económicos que
              influyen en el desarrollo de México y su relación con otros países.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-primary">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="relative h-[360px] lg:h-auto min-h-[520px] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={industriaImg}
              alt="Industria mexicana vinculada con exportaciones y comercio internacional"
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
              <Ship className="w-10 h-10 mb-4 text-primary-foreground/70" />
              <p className="font-body text-xs uppercase tracking-[0.3em] opacity-70">
                Exportaciones, puertos y mercados globales
              </p>
            </div>
          </motion.div>

          <div className="p-6 md:p-12 lg:p-20 flex items-center">
            <AnimateIn>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                3.1 Comercio Exterior
              </p>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">
                México dentro de la economía global
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                El comercio exterior es el intercambio de bienes y servicios que México
                realiza con otros países. Esta actividad permite la importación y
                exportación de productos, favoreciendo el crecimiento económico, la
                generación de empleos y la obtención de divisas. México mantiene
                relaciones comerciales principalmente con Estados Unidos debido a su
                cercanía geográfica y a diversos tratados internacionales. El comercio
                exterior también impulsa la competitividad y la integración de México
                en la economía global.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {["Importaciones", "Exportaciones", "Tratados"].map((item) => (
                  <motion.div
                    key={item}
                    className="border border-primary/15 bg-secondary/25 p-4"
                    whileHover={{ y: -4, backgroundColor: "hsl(155 15% 88% / 0.55)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CircleDollarSign className="w-6 h-6 text-primary mb-3" />
                    <p className="font-body text-xs uppercase tracking-widest text-muted-foreground">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20 grid lg:grid-cols-[1fr_0.95fr] gap-10 items-center">
          <AnimateIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <PieChart className="w-5 h-5 text-primary" />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  3.2 Balanza de Pagos
                </p>
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Registro de la relación económica con el exterior
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                La balanza de pagos es un registro contable donde se anotan todas
                las transacciones económicas que México realiza con el resto del
                mundo durante un periodo determinado. Incluye exportaciones,
                importaciones, inversiones extranjeras, turismo y movimientos
                financieros. Su función principal es mostrar la situación económica
                internacional del país y determinar si existe superávit o déficit
                en las relaciones económicas con el exterior.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div className="border border-primary/20 bg-secondary/25 p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Panel financiero
                  </p>
                  <h4 className="font-display text-2xl font-bold mt-2">Flujos económicos</h4>
                </div>
                <BarChart3 className="w-9 h-9 text-primary" />
              </div>

              <div className="space-y-5">
                {balanceItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                      <span className="font-display text-xl font-bold">{item.value}</span>
                    </div>
                    <div className="h-4 bg-background border border-primary/10 overflow-hidden">
                      <motion.div
                        className={`h-full ${item.tone}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: item.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-primary section-agave">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="w-5 h-5 text-primary-foreground/70" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/50">
                3.3 Gasto y Déficit Gubernamental
              </p>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-4xl">
              Recursos públicos, servicios y estabilidad económica
            </h3>
            <p className="font-body text-sm md:text-base text-primary-foreground/70 leading-relaxed max-w-4xl">
              El gasto gubernamental representa los recursos económicos que el Estado
              utiliza para financiar servicios públicos, infraestructura, educación,
              salud y programas sociales. Cuando el gobierno gasta más dinero del que
              obtiene mediante impuestos y otros ingresos, se produce un déficit
              gubernamental. Este déficit puede provocar endeudamiento y afectar la
              estabilidad económica del país si no se administra adecuadamente.
            </p>
          </AnimateIn>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-3 border-t border-primary-foreground/20"
          staggerDelay={0.15}
        >
          {[
            { value: "Servicios", label: "salud, educación y seguridad pública" },
            { value: "Obras", label: "infraestructura y desarrollo regional" },
            { value: "Riesgo", label: "endeudamiento si el déficit no se controla" },
          ].map((item, index) => (
            <StaggerItem key={item.value}>
              <motion.div
                className="p-6 md:p-10 border-r border-primary-foreground/20 h-full"
                whileHover={{ backgroundColor: "hsl(155 24% 20% / 1)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-display text-6xl font-bold text-primary-foreground/15">
                  0{index + 1}
                </span>
                <h4 className="font-display text-2xl font-bold mt-4">{item.value}</h4>
                <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mt-3">
                  {item.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <ReceiptText className="w-5 h-5 text-primary" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                3.4 Inflación y Deflación
              </p>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">
              El movimiento de los precios en la vida cotidiana
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
              La inflación es el aumento generalizado y sostenido de los precios
              de bienes y servicios, lo que reduce el poder adquisitivo de la
              población. Por otro lado, la deflación ocurre cuando los precios
              disminuyen de manera continua, lo que puede provocar menor consumo,
              reducción de inversiones y desempleo. Ambos fenómenos influyen
              directamente en la economía nacional y en la calidad de vida de las
              personas.
            </p>
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            <motion.div
              className="border border-primary/20 bg-secondary/20 p-6 md:p-8 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <TrendingUp className="w-10 h-10 text-grana mb-5 group-hover:scale-110 transition-transform" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Inflación
              </p>
              <h4 className="font-display text-3xl font-bold mb-4">Precios en aumento</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Reduce el poder adquisitivo, encarece productos básicos y presiona
                el presupuesto familiar.
              </p>
            </motion.div>

            <motion.div
              className="border border-primary/20 bg-background p-6 md:p-8 group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <TrendingDown className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Deflación
              </p>
              <h4 className="font-display text-3xl font-bold mb-4">Precios en descenso</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Puede frenar el consumo, disminuir la inversión y afectar el empleo
                cuando se mantiene por mucho tiempo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CUARTA SUBCOMPETENCIA */}
      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-5">
              <Scale className="w-5 h-5 text-primary" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Cuarta Subcompetencia
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-5">
              Sistema Político y Constitucional de México
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
              Esta subcompetencia analiza la organización política de México, su
              marco constitucional y el papel de los partidos políticos en la
              democracia.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-primary">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-12 lg:p-20 flex items-center">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  4.1 Constitución Política de los E.U.M.
                </p>
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">
                La ley suprema del país
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                La Constitución Política de los Estados Unidos Mexicanos es la ley
                suprema que establece los derechos y obligaciones de los ciudadanos,
                así como la organización del gobierno mexicano. Promulgada en 1917,
                contiene principios fundamentales relacionados con la soberanía
                nacional, la democracia, la división de poderes y las garantías
                individuales. La Constitución es la base jurídica que regula la vida
                política, social y económica del país.
              </p>
            </AnimateIn>
          </div>

          <motion.div
            className="relative min-h-[420px] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={recursosImg}
              alt="Paisaje institucional mexicano con montañas y territorio nacional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-recinto via-primary/55 to-transparent" />
            <div className="absolute inset-x-8 bottom-8 border border-primary-foreground/25 bg-background/15 backdrop-blur-md p-6 text-primary-foreground">
              <Landmark className="w-9 h-9 mb-4 text-primary-foreground/75" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-3">
                Marco institucional
              </p>
              <p className="font-display text-2xl font-bold leading-tight">
                Soberanía, democracia y división de poderes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary section-agave">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-primary-foreground/70" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary-foreground/50">
                4.2 La Situación Política en México
              </p>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-6 max-w-4xl">
              Gobierno, instituciones y participación ciudadana
            </h3>
            <p className="font-body text-sm md:text-base text-primary-foreground/70 leading-relaxed max-w-4xl">
              La situación política de México está relacionada con el funcionamiento
              del gobierno, las instituciones públicas y la participación ciudadana.
              A lo largo de su historia, el país ha experimentado cambios políticos
              importantes que han influido en la democracia, la economía y el
              desarrollo social. Actualmente, México enfrenta retos relacionados con
              la transparencia, la seguridad, la corrupción y el fortalecimiento de
              las instituciones democráticas.
            </p>
          </AnimateIn>
        </div>

        <div className="border-t border-primary-foreground/20 px-6 md:px-12 lg:px-20 pb-12 lg:pb-20">
          <StaggerContainer className="grid md:grid-cols-4" staggerDelay={0.12}>
            {politicalTimeline.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="relative pt-10 md:pt-14 md:border-r border-primary-foreground/20 pr-6 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 left-0 w-3 h-3 bg-grana" />
                  <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/45 mb-3">
                    {item.year}
                  </p>
                  <h4 className="font-display text-xl font-bold mb-3">{item.title}</h4>
                  <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <Vote className="w-5 h-5 text-primary" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                4.3 Los Partidos Políticos
              </p>
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Organizaciones para representar ideas y propuestas
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
              Los partidos políticos son organizaciones que representan diferentes
              ideas y propuestas para gobernar el país. Su principal función es
              participar en procesos electorales y promover la participación ciudadana
              en la vida democrática. En México existen diversos partidos políticos
              con distintas ideologías, los cuales buscan influir en las decisiones
              del gobierno y representar los intereses de la sociedad.
            </p>
          </AnimateIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mt-10" staggerDelay={0.14}>
            {partyCards.map((card) => (
              <StaggerItem key={card.title}>
                <motion.div
                  className="border border-primary/20 bg-background p-6 md:p-8 h-full hover:bg-secondary/35 transition-colors"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280 }}
                >
                  <card.icon className="w-9 h-9 text-primary mb-5" />
                  <h4 className="font-display text-2xl font-bold mb-4">{card.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DISENADOR Y FUENTES */}
      <section className="border-t border-primary section-recinto">
        <div className="p-6 md:p-12 lg:p-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <AnimateIn>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-recinto-foreground/40 mb-4">
                Apartado del Diseñador
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-recinto-foreground mb-6">
                Diseñador de la Página
              </h2>
              <p className="font-body text-sm md:text-base text-recinto-foreground/65 leading-relaxed max-w-2xl">
                Proyecto académico desarrollado para la materia correspondiente al
                segundo parcial.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <motion.div
              className="border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-md p-6 md:p-8 shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 260 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                <div className="w-28 h-28 border border-primary-foreground/25 bg-background/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-4xl font-bold text-recinto-foreground">RM</span>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-recinto-foreground/40 mb-2">
                    Nombre
                  </p>
                  <h3 className="font-display text-3xl font-bold text-recinto-foreground">
                    Roberto Martín
                  </h3>
                  <p className="font-body text-sm text-recinto-foreground/65 mt-3">
                    Ingeniería en Sistemas Computacionales
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-primary-foreground/15">
                {[
                  { icon: GraduationCap, label: "Carrera" },
                  { icon: Mail, label: "Contacto" },
                  { icon: Briefcase, label: "Académico" },
                ].map((item) => (
                  <div key={item.label} className="text-recinto-foreground/70">
                    <item.icon className="w-6 h-6 mb-3 text-recinto-foreground/45" />
                    <p className="font-body text-xs uppercase tracking-widest">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-primary">
        <div className="p-6 md:p-12 lg:p-20">
          <AnimateIn>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Fuentes APA
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
              Referencias consultadas
            </h2>
          </AnimateIn>

          <StaggerContainer className="space-y-4 max-w-5xl" staggerDelay={0.08}>
            {apaReferences.map((reference, index) => (
              <StaggerItem key={reference} direction="left">
                <motion.div
                  className="border-l-2 border-primary/25 pl-5 py-3 hover:border-grana transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    <span className="font-display text-2xl font-bold text-primary mr-3">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {reference}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
