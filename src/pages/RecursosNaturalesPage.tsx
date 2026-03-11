import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import recursosImg from "@/assets/recursos-naturales.jpg";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  PageTransition,
} from "@/components/AnimationUtils";
import {
  Droplets,
  Sun,
  Wind,
  Gem,
  Fuel,
  Mountain,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  Leaf,
} from "lucide-react";

const renovables = [
  {
    icon: Sun,
    title: "Energía Solar",
    desc: "México posee condiciones naturales favorables para el aprovechamiento de fuentes limpias de energía. En la actualidad, la energía solar representa una opción estratégica porque el territorio nacional recibe altos niveles de radiación solar en amplias regiones del país, especialmente en el norte.",
    extra:
      "Desde la perspectiva del desarrollo sustentable, el aprovechamiento de recursos renovables debe satisfacer necesidades presentes sin comprometer a las generaciones futuras.",
  },
  {
    icon: Wind,
    title: "Energía Eólica",
    desc: "Las características geográficas de México permiten aprovechar el viento como fuente renovable de energía. Regiones como el Istmo de Tehuantepec destacan por su potencial para impulsar proyectos eólicos que contribuyan a diversificar la producción energética nacional.",
    extra:
      "El uso responsable de estas fuentes se vincula con el equilibrio entre bienestar humano y bienestar ecológico.",
  },
  {
    icon: Droplets,
    title: "Recursos Hídricos",
    desc: "El agua es uno de los recursos naturales más importantes para la vida y para las actividades económicas. El libro destaca que la geografía física estudia la hidrografía del país, mientras que el desarrollo sustentable considera prioritario el cuidado de los recursos de agua dulce.",
    extra:
      "Su aprovechamiento racional resulta indispensable para la agricultura, el consumo humano, la industria y la preservación ambiental.",
  },
];

const noRenovables = [
  {
    icon: Fuel,
    title: "Petróleo y Gas",
    desc: "El libro señala que los minerales no metálicos susceptibles de explotación incluyen el petróleo, el carbón de piedra, el gas y otros materiales energéticos. También afirma que la explotación, producción, refinación y comercialización del petróleo han constituido una base importante de la vida económica nacional.",
    extra:
      "Aunque siguen siendo fundamentales para la economía, su uso intensivo plantea retos ambientales y obliga a pensar en un desarrollo más sustentable.",
  },
  {
    icon: Gem,
    title: "Minerales",
    desc: "México posee gran cantidad de recursos minerales, clasificados en metálicos y no metálicos. Históricamente, estos recursos han desempeñado una función relevante en la vida económica del país por su relación con la industria, la construcción y la exportación.",
    extra:
      "Su extracción debe realizarse con planeación para evitar el deterioro ambiental y el agotamiento de zonas con alto valor ecológico.",
  },
  {
    icon: Mountain,
    title: "Suelos y Aprovechamiento del Territorio",
    desc: "La geografía física estudia los suelos como base del aprovechamiento productivo del país. El texto explica que México presenta gran diversidad de suelos, pero muchos no están suficientemente estudiados, por lo que su explotación suele ser inadecuada y tiende a provocar degradación progresiva.",
    extra:
      "Por eso, el uso del territorio requiere equilibrio entre producción económica, conservación ecológica y bienestar social.",
  },
];

const problemasAmbientales = [
  {
    stat: "150K",
    unit: "ha/año",
    label: "de deforestación",
    desc: "La tala ilegal y el cambio de uso de suelo destruyen ecosistemas vitales para el equilibrio climático.",
    book:
      "El libro advierte que la riqueza vegetal de México se ha destruido históricamente por la explotación irracional, sobre todo de los bosques, y subraya la urgencia de frenar la tala inmoderada y promover una explotación racional.",
  },
  {
    stat: "70%",
    unit: "",
    label: "de cuerpos de agua contaminados",
    desc: "Ríos, lagos y acuíferos enfrentan contaminación industrial, agrícola y urbana sin tratamiento adecuado.",
    book:
      "Dentro de los aspectos ambientales del desarrollo sustentable, el texto considera prioritario el cuidado del agua dulce y reconoce que en el país existen ciudades con graves problemas de agua potable y saneamiento.",
  },
  {
    stat: "2,500+",
    unit: "",
    label: "especies en riesgo",
    desc: "La pérdida de hábitat y el cambio climático amenazan la biodiversidad única de México.",
    book:
      "El libro resalta que la fauna y la flora deben conservarse porque forman parte del ecosistema donde habita el ser humano y porque muchas especies se encuentran amenazadas por la acción depredadora.",
  },
];

const poblacionCards = [
  {
    stat: "43.9%",
    title: "Pobreza",
    desc: "55.7 millones de personas viven en situación de pobreza. 8.5 millones en pobreza extrema, sin acceso a alimentación adecuada. La pobreza se concentra en Chiapas, Guerrero y Oaxaca.",
    book:
      "El desarrollo sustentable, según el libro, también implica equidad en la distribución del ingreso y busca eliminar el problema de la pobreza para elevar el nivel de vida de la población.",
  },
  {
    stat: "55.6%",
    title: "Economía Informal",
    desc: "Más de la mitad de la población ocupada trabaja sin acceso a seguridad social, prestaciones laborales ni estabilidad económica. Es el reflejo estructural de un modelo que no incluye a todos.",
    book:
      "La obra vincula los problemas del desarrollo desigual con el subempleo y con formas precarias de inserción laboral que limitan el bienestar social y la seguridad económica de millones de personas.",
  },
];

const indicadoresSociales = [
  {
    stat: "3.3%",
    title: "Desempleo",
    desc: "La tasa oficial no refleja el subempleo ni las condiciones precarias de millones de trabajadores.",
    book:
      "La geografía económica estudia la población económicamente activa y su relación con los sectores productivos; por ello, el desempleo no solo es un dato laboral, sino un problema estructural del desarrollo.",
  },
  {
    stat: "21M",
    title: "Sin Acceso a Salud",
    desc: "Millones carecen de acceso efectivo a servicios de salud, agravando la vulnerabilidad social.",
    book:
      "Entre los aspectos sociales del desarrollo sustentable, el libro incluye explícitamente la protección y promoción de la salud humana como condición básica del bienestar.",
  },
  {
    stat: "16.2%",
    title: "Rezago Educativo",
    desc: "19 millones de personas de 15+ años no completaron la educación básica obligatoria.",
    book:
      "El texto considera la educación como uno de los indicadores esenciales del desarrollo, ya que elevar el nivel de vida requiere reducir el analfabetismo y el rezago educativo.",
  },
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
            <img
              src={recursosImg}
              alt="Selva y río en las montañas de México"
              className="w-full h-full object-cover"
            />
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
              Recursos
              <br />
              Naturales
            </motion.h1>

            <motion.p
              className="font-body text-base opacity-80 max-w-2xl mt-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Para comprender los problemas económicos de México es necesario
              conocer los principales recursos naturales y humanos del país. La
              geografía física estudia elementos como relieve, hidrografía,
              climas, suelos, flora, fauna y minerales; mientras que la
              geografía económica analiza la relación entre población,
              territorio y actividades productivas.
            </motion.p>
          </div>
        </section>

        {/* INTRO LIBRO */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <AnimateIn>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Base conceptual
                  </p>
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                  Recursos, población y desarrollo
                </h2>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                  El libro <span className="font-semibold italic">Problemas económicos de México y sustentabilidad</span>
                  explica que los recursos naturales del país provienen de la
                  naturaleza y se dividen en flora, fauna y minerales. Además,
                  señala que la actividad económica transforma el espacio
                  geográfico para satisfacer necesidades humanas, por lo que el
                  aprovechamiento de estos recursos debe realizarse de forma
                  racional, buscando siempre el equilibrio entre crecimiento
                  económico, bienestar social y conservación ambiental.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="border border-primary/20 bg-secondary/30 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-bold">
                    Desarrollo sustentable
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Es el que satisface las necesidades esenciales de la
                  generación presente sin comprometer la capacidad de satisfacer
                  las necesidades de las generaciones futuras.
                </p>
                <div className="mt-5 pt-5 border-t border-primary/15">
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Sus áreas principales
                  </p>
                  <ul className="space-y-2 font-body text-sm text-muted-foreground">
                    <li>• Bienestar humano</li>
                    <li>• Bienestar ecológico</li>
                    <li>• Interacciones entre sociedad y naturaleza</li>
                  </ul>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* RENOVABLES */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
                Recursos Renovables
              </h2>
              <p className="font-body text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Son recursos que pueden regenerarse de manera natural si se
                aprovechan racionalmente. En esta categoría destacan el agua,
                los bosques, la vegetación, los suelos y diversas fuentes de
                energía limpia que hoy representan una alternativa para el
                desarrollo sustentable del país.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer
            className="grid md:grid-cols-3 border-t border-primary divide-y md:divide-y-0 md:divide-x divide-primary/30"
            staggerDelay={0.15}
          >
            {renovables.map((r) => (
              <StaggerItem key={r.title}>
                <motion.div
                  className="tectonic-card h-full group"
                  whileHover={{ backgroundColor: "hsl(155 15% 88% / 0.4)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <r.icon className="w-10 h-10 text-primary mb-6" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {r.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {r.desc}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-foreground/80 border-t border-primary/10 pt-4">
                    {r.extra}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* NO RENOVABLES */}
        <section className="border-t border-primary section-agave">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
                Recursos No Renovables
              </h2>
              <p className="font-body text-sm text-primary-foreground/70 max-w-2xl leading-relaxed">
                Son recursos que se agotan con la explotación y no se regeneran
                en escalas humanas de tiempo. México posee minerales y
                energéticos que han sido fundamentales para su desarrollo
                económico, aunque su uso intensivo también ha generado impactos
                ambientales y desigualdades territoriales.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer
            className="grid md:grid-cols-3 border-t border-primary-foreground/20 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20"
            staggerDelay={0.15}
          >
            {noRenovables.map((r) => (
              <StaggerItem key={r.title}>
                <div className="p-6 md:p-10 h-full">
                  <r.icon className="w-10 h-10 text-primary-foreground/60 mb-6" />
                  <h3 className="font-display text-xl font-bold mb-3">
                    {r.title}
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-4">
                    {r.desc}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/90 leading-relaxed border-t border-primary-foreground/10 pt-4">
                    {r.extra}
                  </p>
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
                <p className="font-body text-xs uppercase tracking-[0.3em] grana-accent">
                  Crisis Ambiental
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Problemas Ambientales
              </h2>
              <p className="font-body text-sm text-muted-foreground max-w-3xl leading-relaxed">
                El desarrollo sustentable exige evitar una crisis ambiental que
                afecte de forma irreversible a la ecología. Entre los principales
                retos del país destacan la deforestación, la contaminación del
                agua, la degradación del suelo y la pérdida de biodiversidad,
                problemas que afectan tanto al medio natural como a la calidad
                de vida de la población.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer
            className="grid md:grid-cols-3 border-t border-primary divide-y md:divide-y-0 md:divide-x divide-primary/30"
            staggerDelay={0.2}
          >
            {problemasAmbientales.map((d) => (
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
                    <span className="text-lg font-body font-normal ml-1">
                      {d.unit}
                    </span>
                  </motion.span>
                  <h3 className="font-display text-lg font-bold mt-4">
                    {d.label}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                    {d.desc}
                  </p>
                  <p className="font-body text-sm mt-4 leading-relaxed border-t border-primary/10 pt-4 text-foreground/80">
                    {d.book}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* POBLACIÓN */}
        <section className="border-t border-primary section-recinto">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-grana" />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-recinto-foreground/40">
                  La Fractura
                </p>
              </div>

              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-recinto-foreground">
                La riqueza de la tierra,
                <br />
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

              <p className="font-body text-sm md:text-base text-recinto-foreground/70 max-w-3xl mt-6 leading-relaxed">
                La geografía económica estudia el crecimiento demográfico, la
                distribución de la población, la densidad, la población
                económicamente activa y su relación con los sectores económicos.
                Por ello, temas como la pobreza, el desempleo y la economía
                informal forman parte de los problemas estructurales del
                desarrollo nacional.
              </p>
            </AnimateIn>
          </div>

          <StaggerContainer
            className="grid md:grid-cols-2 border-t border-grana/30 divide-y md:divide-y-0 md:divide-x divide-grana/30"
            staggerDelay={0.2}
          >
            {poblacionCards.map((d) => (
              <StaggerItem key={d.title}>
                <div
                  className="p-8 md:p-12"
                  style={{ borderColor: "hsl(var(--grana) / 0.3)" }}
                >
                  <motion.span
                    className="data-block grana-accent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {d.stat}
                  </motion.span>
                  <h3 className="font-display text-xl font-bold mt-4 text-recinto-foreground">
                    {d.title}
                  </h3>
                  <p className="font-body text-sm text-recinto-foreground/60 mt-2 leading-relaxed max-w-md">
                    {d.desc}
                  </p>
                  <p className="font-body text-sm text-recinto-foreground/80 mt-4 leading-relaxed border-t border-grana/20 pt-4 max-w-lg">
                    {d.book}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer
            className="border-t border-grana/30 p-8 md:p-12 grid md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            {indicadoresSociales.map((d) => (
              <StaggerItem key={d.title}>
                <div>
                  <span className="font-display text-3xl font-bold grana-accent">
                    {d.stat}
                  </span>
                  <h4 className="font-display text-lg font-semibold mt-2 text-recinto-foreground">
                    {d.title}
                  </h4>
                  <p className="font-body text-sm text-recinto-foreground/60 mt-1 leading-relaxed">
                    {d.desc}
                  </p>
                  <p className="font-body text-sm text-recinto-foreground/80 mt-3 leading-relaxed">
                    {d.book}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* CITA / REFERENCIAS */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Referencia bibliográfica
                </p>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Fuente consultada
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
                  En esta página se retomaron definiciones y explicaciones de las
                  unidades de geografía económica y desarrollo sustentable del
                  país, especialmente sobre recursos naturales, población,
                  pobreza, desarrollo sustentable y problemas ambientales.
                </p>
              </div>
            </AnimateIn>
          </div>
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
            Sectores Económicos{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </section>
      </main>
    </PageTransition>
  );
};

export default RecursosNaturalesPage;
