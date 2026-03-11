import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Map, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Inicio", coord: "19.4326° N" },
  { path: "/recursos-naturales", label: "Recursos Naturales", coord: "23.6345° N" },
  { path: "/sectores-economicos", label: "Sectores Económicos", coord: "25.6866° N" },
  { path: "/datos", label: "Datos del Estudiante", coord: "19.0414° N" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="map-legend"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-body text-xs uppercase tracking-widest hover:text-grana transition-colors"
      >
        {isOpen ? <X className="w-3.5 h-3.5" /> : <Map className="w-3.5 h-3.5" />}
        <span className="inline-block w-2 h-2 bg-grana" />
        Coordenadas
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-4 flex flex-col gap-1"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => { navigate(item.path); setIsOpen(false); }}
                className={`text-left text-xs font-body tracking-wide transition-all py-2 border-l-2 pl-3 ${
                  location.pathname === item.path
                    ? "border-grana text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                <span className="block font-medium">{item.label}</span>
                <span className="text-[10px] text-muted-foreground">{item.coord}</span>
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
