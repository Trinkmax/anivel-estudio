export const SITE = {
  name: "A Nivel",
  title: "A Nivel | Estudio de Arquitectura - Arq. Milagros Ribone",
  description:
    "Estudio de arquitectura de Milagros Ribone. Diseno residencial, comercial e interiorismo. Cada espacio, a nivel.",
  url: "https://anivel.ar",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mi", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#portfolio" },
  { label: "Proceso", href: "#process" },
  { label: "Contacto", href: "#contact" },
] as const;


export const SERVICES = [
  {
    title: "Arquitectura Residencial",
    description:
      "Diseno de viviendas que reflejan la identidad de cada cliente. Desde casas unifamiliares hasta edificios de departamentos.",
    icon: "home" as const,
  },
  {
    title: "Arquitectura Comercial",
    description:
      "Espacios comerciales funcionales y esteticos que potencian la experiencia del usuario y la identidad de marca.",
    icon: "building" as const,
  },
  {
    title: "Interiorismo",
    description:
      "Diseno de interiores que transforman espacios. Cada detalle pensado para crear ambientes unicos y funcionales.",
    icon: "interior" as const,
  },
  {
    title: "Remodelaciones",
    description:
      "Renovacion integral de espacios existentes. Respetamos la esencia del lugar mientras lo actualizamos.",
    icon: "renovation" as const,
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consulta",
    description: "Escuchamos tu vision y necesidades para entender el proyecto en profundidad.",
  },
  {
    number: "02",
    title: "Diseno",
    description: "Desarrollamos el proyecto a tu medida con propuestas creativas y funcionales.",
  },
  {
    number: "03",
    title: "Ejecucion",
    description: "Supervisamos cada detalle de la obra para garantizar la calidad.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Tu espacio, materializado. Acompanamiento hasta el ultimo detalle.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Milagros entendio exactamente lo que queriamos. Nuestra casa es todo lo que sonamos y mas.",
    name: "Maria y Juan",
    project: "Vivienda Unifamiliar",
  },
  {
    quote:
      "Profesionalismo y creatividad en cada etapa. El resultado supero nuestras expectativas.",
    name: "Carlos Mendez",
    project: "Local Comercial",
  },
  {
    quote:
      "Transformo nuestro departamento por completo. Un antes y despues increible.",
    name: "Laura Gutierrez",
    project: "Remodelacion Integral",
  },
] as const;

export const PORTFOLIO_ITEMS = [
  { title: "Casa Serrana", category: "Residencial", year: "2025" },
  { title: "Oficinas Norte", category: "Comercial", year: "2025" },
  { title: "Departamento Centro", category: "Interiorismo", year: "2024" },
  { title: "Casa del Lago", category: "Residencial", year: "2024" },
  { title: "Estudio Creativo", category: "Comercial", year: "2024" },
  { title: "Loft Industrial", category: "Remodelacion", year: "2023" },
] as const;

export const CONTACT = {
  instagram: "#",
  whatsapp: "#",
  email: "contacto@anivel.ar",
} as const;
