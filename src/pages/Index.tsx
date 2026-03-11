import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/hero-landscape.jpg";
import recursosImg from "@/assets/recursos-naturales.jpg";
import industriaImg from "@/assets/industria.jpg";
import serviciosImg from "@/assets/servicios.jpg";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import { ArrowRight, Leaf, Factory, Users } from "lucide-react";

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
            className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4"
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
            className="font-body text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Una exploración visual de la tensión entre la riqueza natural del territorio mexicano
            y las necesidades de su población. Basado en el análisis del libro
            <em className="grana-accent"> Recursos y Necesidades de México</em>.
          </motion.p>
          <motion.div
            className="flex gap-4"
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
          {[
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
          ].map((card) => (
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
                    <span className="font-display text-6xl font-bold text-primary-foreground/20">{card.number}</span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <card.icon className="w-5 h-5 text-primary" />
                    <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{card.subtitle}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  <div className="mt-6 flex items-center gap-2 font-body text-xs uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
                    Explorar <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
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
              Exhibición Académica · 2025
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
};

export default Index;
