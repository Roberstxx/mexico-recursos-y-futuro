import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import agropecuarioImg from "@/assets/agropecuario.jpg";
import industriaImg from "@/assets/industria.jpg";
import serviciosImg from "@/assets/servicios.jpg";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  PageTransition,
} from "@/components/AnimationUtils";
import {
  Truck,
  Wifi,
  Home,
  Droplets,
  GraduationCap,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Factory,
  Wheat,
  Briefcase,
} from "lucide-react";

const sectors = [
  {
    img: agropecuarioImg,
    alt: "Agricultor en campos de maíz",
    label: "Sector Primario",
    title: "Desarrollo Agropecuario",
    pib: "3.8%",
    desc: "La agricultura, ganadería, silvicultura y pesca constituyen la base histórica de la economía mexicana. México es líder mundial en producción de aguacate, limón, chile y cerveza.",
    extra:
      "El libro explica que el campo ha sido uno de los grandes problemas estructurales del país, porque históricamente ha sufrido atraso frente al desarrollo urbano e industrial. También señala que el sector agropecuario produce alimentos y materias primas, absorbe una parte importante de la población económicamente activa y mantiene relaciones directas con la industria y los servicios.",
    facts: [
      "22 millones de hectáreas cultivadas",
      "5.5 millones de trabajadores agrícolas",
      "Exportaciones agrícolas: $40,000 MDD/año",
    ],
    book:
      "A pesar de su importancia, el campo enfrenta problemas como baja productividad, descapitalización, migración rural, minifundismo y rezago tecnológico.",
  },
  {
    img: industriaImg,
    alt: "Fábrica industrial mexicana",
    label: "Sector Secundario",
    title: "Desarrollo Industrial",
    pib: "29.5%",
    desc: "El sector industrial es el motor de las exportaciones, dominado por manufactura, automotriz y electrónica. Las maquiladoras y el T-MEC han convertido a México en plataforma global.",
    extra:
      "Desde la perspectiva del libro, la industria forma parte esencial de la evolución económica del país porque transforma materias primas en bienes de mayor valor y concentra buena parte del crecimiento urbano, tecnológico y financiero.",
    facts: [
      "1er exportador automotriz de LATAM",
      "Sector manufacturero: 17% del PIB",
      "5,000+ maquiladoras en frontera norte",
    ],
    book:
      "Sin embargo, la industrialización mexicana también presenta retos: dependencia tecnológica, desigualdad regional, concentración del ingreso y un crecimiento que muchas veces no se traduce en desarrollo equitativo.",
  },
  {
    img: serviciosImg,
    alt: "Mercado tradicional mexicano",
    label: "Sector Terciario",
    title: "Desarrollo de Servicios",
    pib: "63.8%",
    desc: "El sector servicios es la columna vertebral de la economía moderna, abarcando comercio, turismo, finanzas, telecomunicaciones y servicios profesionales.",
    extra:
      "El libro señala que el sector servicios abarca una amplia gama de actividades y funciones que cada vez adquieren mayor relevancia para satisfacer las necesidades del mercado interno y apoyar la expansión económica del país.",
    facts: [
      "45 millones de visitantes internacionales/año",
      "Mayor empleador del sector terciario",
      "Servicios financieros en expansión digital",
    ],
    book:
      "Su crecimiento refleja la transición de México hacia una economía donde predominan el comercio, los transportes, las comunicaciones, la educación, la vivienda, la salud y otros servicios indispensables para la población.",
  },
];

const serviciosDetalle = [
  {
    icon: Truck,
    title: "Transporte",
    desc: "Red carretera de 407,000 km, sistema ferroviario en crecimiento con el Tren Maya y el Interoceánico. Los puertos de Manzanillo y Lázaro Cárdenas son claves para el comercio internacional.",
    book:
      "El libro relaciona el desarrollo de los servicios con la ampliación de carreteras, aeropuertos, líneas ferroviarias y sistemas de transporte colectivo, porque estas obras permiten integrar regiones, movilizar mercancías y favorecer la actividad económica.",
  },
  {
    icon: Wifi,
    title: "Telecomunicaciones",
    desc: "84 millones de usuarios de internet. La reforma de 2013 transformó el sector, aunque persiste la brecha digital entre zonas urbanas y rurales.",
    book:
      "En el sector servicios, las comunicaciones cumplen una función estratégica porque facilitan la integración del mercado interno y fortalecen la organización económica y social del país.",
  },
  {
    icon: Home,
    title: "Vivienda",
    desc: "Déficit habitacional de 8.5 millones de viviendas. INFONAVIT y FOVISSSTE atienden la demanda, pero la autoconstrucción informal sigue siendo la norma en muchas regiones.",
    book:
      "El libro define la vivienda como una necesidad básica que debe proteger a sus moradores, otorgar higiene, privacidad, comodidad y contar con servicios públicos como agua, luz y drenaje. También subraya que el déficit de vivienda sigue siendo uno de los principales desafíos económicos y sociales.",
  },
  {
    icon: Droplets,
    title: "Agua Potable y Alcantarillado",
    desc: "95% de cobertura urbana, 85% rural. El estrés hídrico afecta al 70% del territorio. La infraestructura de tratamiento de aguas es insuficiente.",
    book:
      "El texto considera el acceso al agua potable y al drenaje como parte esencial del bienestar humano. Señala que aún existen millones de personas sin agua potable o sin drenaje conectado a sus viviendas, lo que muestra que el desarrollo no ha sido suficiente ni equitativo.",
  },
  {
    icon: GraduationCap,
    title: "Educación",
    desc: "Factor clave para el desarrollo. México invierte 4.9% del PIB en educación, con 36 millones de estudiantes. La calidad y equidad siguen siendo retos fundamentales.",
    book:
      "La educación aparece en el libro como uno de los indicadores centrales del desarrollo sustentable y del bienestar humano. Mejorar la educación significa elevar capacidades, reducir desigualdades y fortalecer las posibilidades de desarrollo económico y social.",
  },
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
              Sectores
              <br />
              Económicos
            </motion.h1>

            <motion.p
              className="font-body text-base text-primary-foreground/70 max-w-2xl mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              La economía mexicana se organiza en tres grandes sectores:
              agropecuario, industrial y de servicios. Su evolución muestra la
              transición de un país con base rural hacia una estructura
              dominada por la industria, el comercio y los servicios, aunque
              con profundas desigualdades regionales y sociales.
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
            <div
              className="bg-primary-foreground/10 flex items-center justify-center"
              style={{ width: "3.8%" }}
            >
              <span className="font-body text-[9px] text-primary-foreground/60 hidden lg:block">
                3.8%
              </span>
            </div>
            <div
              className="grana-bg flex items-center justify-center border-l-2 border-primary"
              style={{ width: "29.5%" }}
            >
              <span className="font-body text-xs text-grana-foreground">
                Industria 29.5%
              </span>
            </div>
            <div
              className="section-recinto flex items-center justify-center border-l-2 border-primary"
              style={{ width: "66.7%" }}
            >
              <span className="font-body text-xs text-recinto-foreground">
                Servicios 63.8%
              </span>
            </div>
          </motion.div>
        </section>

        {/* INTRO LIBRO */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <AnimateIn>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Enfoque del libro
                  </p>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                  Cómo se entiende la economía nacional
                </h2>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  El libro analiza la evolución de los sectores agropecuario,
                  industrial y de servicios como parte esencial de la estructura
                  económica de México. También señala que no basta con crecer:
                  para hablar de verdadero desarrollo es necesario mejorar la
                  educación, la vivienda, la salud, el empleo, la distribución
                  del ingreso y el bienestar general de la población.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="border border-primary/20 bg-secondary/30 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-bold">
                    Idea central
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Los sectores económicos no funcionan por separado: están
                  conectados entre sí. El campo aporta alimentos y materias
                  primas, la industria transforma productos y los servicios
                  hacen posible la circulación, organización y consumo de bienes
                  en toda la economía.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* EACH SECTOR */}
        {sectors.map((s, idx) => (
          <section key={s.title} className="border-t border-primary">
            <div
              className={`grid md:grid-cols-2 ${
                idx % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <motion.div
                className={`overflow-hidden h-[350px] md:h-[500px] ${
                  idx % 2 === 1 ? "md:order-2" : ""
                }`}
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

              <div
                className={`p-6 md:p-12 flex flex-col justify-center border-l border-primary/30 ${
                  idx % 2 === 1
                    ? "md:order-1 md:border-l-0 md:border-r border-primary/30"
                    : ""
                }`}
              >
                <AnimateIn>
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {s.label}
                  </span>

                  <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                    {s.title}
                  </h2>

                  <motion.span
                    className="font-display text-6xl md:text-7xl font-bold text-primary block mt-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    {s.pib}
                  </motion.span>

                  <span className="font-body text-xs text-muted-foreground">
                    del PIB nacional
                  </span>

                  <p className="font-body text-sm text-muted-foreground mt-6 leading-relaxed">
                    {s.desc}
                  </p>

                  <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                    {s.extra}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {s.facts.map((f) => (
                      <li
                        key={f}
                        className="font-body text-xs text-foreground flex items-start gap-2"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-grana mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <p className="font-body text-sm leading-relaxed text-foreground/80">
                      {s.book}
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </section>
        ))}

        {/* RELACIONES INTERSECTORIALES */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-5">
                <Factory className="w-5 h-5 text-primary" />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Interdependencia
                </p>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Relaciones entre sectores
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-primary/15 p-6">
                  <Wheat className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">
                    El campo abastece
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    El sector agropecuario provee alimentos y materias primas
                    para la población y para la industria, además de sostener
                    parte importante del empleo rural.
                  </p>
                </div>

                <div className="border border-primary/15 p-6">
                  <Factory className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">
                    La industria transforma
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    El sector industrial procesa materias primas, produce bienes
                    y genera encadenamientos con el comercio, la construcción,
                    el transporte y los servicios financieros.
                  </p>
                </div>

                <div className="border border-primary/15 p-6">
                  <Briefcase className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">
                    Los servicios articulan
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    El sector servicios facilita la circulación, comunicación,
                    distribución y consumo, por lo que conecta al campo y a la
                    industria con la vida cotidiana de la población.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* SERVICIOS DETALLE */}
        <section className="border-t border-primary section-agave">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
                Infraestructura y Servicios
              </h2>
              <p className="font-body text-sm text-primary-foreground/70 max-w-2xl leading-relaxed">
                Son pilares que sostienen el funcionamiento cotidiano del país y
                determinan la calidad de vida de la población. En el libro, estos
                temas se relacionan con el bienestar humano, el desarrollo social
                y la posibilidad de construir un desarrollo sustentable.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-primary-foreground/20"
            staggerDelay={0.1}
          >
            {serviciosDetalle.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  className="p-6 md:p-8 border-b border-r border-primary-foreground/20 h-full"
                  whileHover={{ backgroundColor: "hsl(155 24% 20% / 1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <s.icon className="w-8 h-8 text-primary-foreground/50 mb-5" />
                  </motion.div>

                  <h3 className="font-display text-lg font-semibold">
                    {s.title}
                  </h3>

                  <p className="font-body text-sm text-primary-foreground/70 mt-2 leading-relaxed">
                    {s.desc}
                  </p>

                  <p className="font-body text-sm text-primary-foreground/90 mt-4 leading-relaxed border-t border-primary-foreground/10 pt-4">
                    {s.book}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* CIERRE */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Conclusión
                </p>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Necesidades de México
              </h2>

              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-4xl">
                El estudio de los sectores económicos muestra que México necesita
                fortalecer de manera equilibrada el campo, la industria y los
                servicios. El crecimiento económico solo será verdadero desarrollo
                cuando se traduzca en mejor educación, vivienda digna, acceso al
                agua potable, empleo suficiente, infraestructura moderna y menor
                desigualdad social y regional.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* REFERENCIA */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Referencia bibliográfica
              </h2>

              <div className="border border-primary/20 bg-secondary/20 p-6 md:p-8 max-w-4xl">
                <p className="font-body text-sm md:text-base leading-relaxed text-muted-foreground">
                  Méndez Morales, José Silvestre.{" "}
                  <span className="italic">
                    Problemas económicos de México y sustentabilidad
                  </span>
                  . 7.ª ed. México: McGraw-Hill/Interamericana Editores, 2012.
                </p>

                <p className="font-body text-sm mt-4 leading-relaxed text-muted-foreground">
                  Para esta sección se retomaron ideas sobre la evolución de los
                  sectores económico, el desarrollo agropecuario, el sector
                  servicios, educación, vivienda, agua potable y desarrollo
                  sustentable.
                </p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-primary p-8 md:p-12 flex flex-wrap justify-between items-center gap-4">
          <motion.button
            onClick={() => navigate("/recursos-naturales")}
            className="font-body text-sm uppercase tracking-widest bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-6 py-4 transition-all duration-300 flex items-center gap-3 shadow-md"
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowLeft className="w-5 h-5" /> Recursos Naturales
          </motion.button>

          <motion.button
            onClick={() => navigate("/datos")}
            className="group font-body text-sm uppercase tracking-widest bg-primary text-primary-foreground hover:bg-grana px-6 py-4 transition-all duration-300 flex items-center gap-3 shadow-lg"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            Datos del Estudiante{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </section>
      </main>
    </PageTransition>
  );
};

export default SectoresEconomicosPage;
