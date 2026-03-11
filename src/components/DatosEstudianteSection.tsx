import { BookOpen } from "lucide-react";

const DatosEstudianteSection = () => {
  return (
    <section id="datos" className="border-t border-primary">
      <div className="section-recinto">
        <div className="p-6 md:p-12 lg:p-20">
          <p className="font-body text-xs uppercase tracking-[0.3em] opacity-50 mb-4">
            04 — Créditos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Datos del Estudiante
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Student info */}
            <div>
              <div className="space-y-6">
                {[
                  { label: "Nombre", value: "[Nombre del Estudiante]" },
                  { label: "Matrícula", value: "[Número de Matrícula]" },
                  { label: "Materia", value: "Recursos y Necesidades de México" },
                  { label: "Facultad", value: "[Facultad]" },
                  { label: "Carrera", value: "[Carrera]" },
                ].map((d) => (
                  <div key={d.label} className="border-b border-recinto-foreground/10 pb-3">
                    <span className="font-body text-xs uppercase tracking-widest opacity-40">{d.label}</span>
                    <p className="font-display text-lg font-semibold mt-1">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bibliography */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 opacity-60" />
                <h3 className="font-display text-xl font-bold">Bibliografía</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Bassols Batalla, A. (2005). Recursos naturales de México: Teoría, conocimiento y uso. Editorial Nuestro Tiempo.",
                  "CONEVAL. (2023). Medición de la pobreza en México. Consejo Nacional de Evaluación de la Política de Desarrollo Social.",
                  "INEGI. (2024). Sistema de Cuentas Nacionales de México. Instituto Nacional de Estadística y Geografía.",
                  "SEMARNAT. (2022). Informe de la Situación del Medio Ambiente en México. Secretaría de Medio Ambiente y Recursos Naturales.",
                  "Banco de México. (2024). Informe Trimestral sobre la Inflación. Banxico.",
                ].map((ref, i) => (
                  <li key={i} className="font-body text-sm opacity-70 leading-relaxed border-l-2 border-grana/30 pl-4">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-recinto-foreground/10 p-6 md:p-12">
          <p className="font-body text-xs opacity-30 text-center">
            Exhibición académica interactiva · Recursos y Necesidades de México · 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default DatosEstudianteSection;
