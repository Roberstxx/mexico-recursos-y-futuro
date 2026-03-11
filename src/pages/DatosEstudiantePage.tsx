import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AnimateIn, StaggerContainer, StaggerItem, PageTransition } from "@/components/AnimationUtils";
import { BookOpen, ArrowLeft, ArrowRight, User, Hash, BookText, Building2, Briefcase } from "lucide-react";

const studentFields = [
  { icon: User, label: "Nombre", value: "[Nombre del Estudiante]" },
  { icon: Hash, label: "Matrícula", value: "[Número de Matrícula]" },
  { icon: BookText, label: "Materia", value: "Recursos y Necesidades de México" },
  { icon: Building2, label: "Facultad", value: "[Facultad]" },
  { icon: Briefcase, label: "Carrera", value: "[Carrera]" },
];

const bibliography = [
  "Bassols Batalla, A. (2005). Recursos naturales de México: Teoría, conocimiento y uso. Editorial Nuestro Tiempo.",
  "CONEVAL. (2023). Medición de la pobreza en México. Consejo Nacional de Evaluación de la Política de Desarrollo Social.",
  "INEGI. (2024). Sistema de Cuentas Nacionales de México. Instituto Nacional de Estadística y Geografía.",
  "SEMARNAT. (2022). Informe de la Situación del Medio Ambiente en México. Secretaría de Medio Ambiente y Recursos Naturales.",
  "Banco de México. (2024). Informe Trimestral sobre la Inflación. Banxico.",
  "Secretaría de Economía. (2023). Información Estadística y Arancelaria. Gobierno de México.",
];

const DatosEstudiantePage = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <main className="bg-background text-foreground min-h-screen">
        {/* HERO */}
        <section className="section-recinto">
          <div className="p-6 md:p-12 lg:p-20">
            <motion.button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 font-body text-xs uppercase tracking-widest mb-8 text-recinto-foreground/50 hover:text-recinto-foreground transition-opacity"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ArrowLeft className="w-4 h-4" /> Inicio
            </motion.button>
            <motion.p
              className="font-body text-xs uppercase tracking-[0.3em] text-recinto-foreground/40 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              03 — Créditos
            </motion.p>
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold leading-[0.9] text-recinto-foreground"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Datos del<br />Estudiante
            </motion.h1>
          </div>
        </section>

        {/* Student Info */}
        <section className="border-t border-primary">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <h2 className="font-display text-2xl font-bold mb-8">Información Académica</h2>
            </AnimateIn>

            <StaggerContainer className="space-y-0" staggerDelay={0.1}>
              {studentFields.map((field) => (
                <StaggerItem key={field.label}>
                  <motion.div
                    className="border-b border-primary/20 py-5 flex items-center gap-4 group"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <field.icon className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                    <div>
                      <span className="font-body text-xs uppercase tracking-widest text-muted-foreground block">{field.label}</span>
                      <p className="font-display text-xl font-semibold mt-1">{field.value}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Bibliography */}
        <section className="border-t border-primary section-agave">
          <div className="p-6 md:p-12 lg:p-20">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-6 h-6 text-primary-foreground/60" />
                <h2 className="font-display text-2xl font-bold">Bibliografía</h2>
              </div>
            </AnimateIn>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {bibliography.map((ref, i) => (
                <StaggerItem key={i} direction="left">
                  <motion.div
                    className="border-l-2 border-grana/30 pl-6 py-2 hover:border-grana transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{ref}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-primary p-8 md:p-12 flex justify-between items-center">
          <button onClick={() => navigate("/sectores-economicos")} className="font-body text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Sectores Económicos
          </button>
          <button onClick={() => navigate("/")} className="group font-body text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors flex items-center gap-2">
            Volver al Inicio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

        {/* Footer */}
        <section className="border-t border-primary section-recinto p-8 md:p-12">
          <p className="font-body text-xs text-recinto-foreground/30 text-center">
            Exhibición académica interactiva · Recursos y Necesidades de México · 2025
          </p>
        </section>
      </main>
    </PageTransition>
  );
};

export default DatosEstudiantePage;
