const siteUrl = "http://localhost:3000";

const pages = [
  {
    path: "/",
    title: "Criadero de Toros en Arequipa | Bravura Andina",
    description:
      "Criadero de toros en Arequipa especializado en seleccion ganadera, reproductores fuertes y asesoria para productores del sur del Peru.",
    ogTitle: "Bravura Andina - Criadero de Toros en Arequipa",
    ogDescription:
      "Reproductores seleccionados, manejo responsable y experiencia ganadera en Arequipa.",
    image: "/images/criadero-arequipa.png",
    priority: 1,
  },
  {
    path: "/blog",
    title: "Blog Ganadero en Arequipa | Crianza y Seleccion de Toros",
    description:
      "Consejos sobre crianza de toros, seleccion de reproductores y manejo ganadero adaptado al clima de Arequipa.",
    ogTitle: "Blog Ganadero de Bravura Andina",
    ogDescription:
      "Aprende sobre nutricion, sanidad y seleccion de toros reproductores.",
    image: "/images/criadero-arequipa.png",
    priority: 0.8,
  },
  {
    path: "/contacto",
    title: "Contacto | Criadero de Toros Bravura Andina Arequipa",
    description:
      "Contacta con Bravura Andina para consultas sobre toros reproductores, visitas al criadero y asesoria ganadera en Arequipa.",
    ogTitle: "Contacta con Bravura Andina",
    ogDescription:
      "Agenda una visita al criadero o solicita informacion sobre nuestros reproductores.",
    image: "/images/criadero-arequipa.png",
    priority: 0.7,
  },
];

const blogPosts = [
  {
    title: "Como elegir un toro reproductor",
    excerpt:
      "Una guia breve para evaluar conformacion, temperamento, sanidad y origen genetico antes de comprar.",
  },
  {
    title: "Manejo ganadero en clima seco",
    excerpt:
      "Buenas practicas para hidratacion, sombra y alimentacion en zonas altoandinas de Arequipa.",
  },
  {
    title: "Registros para mejorar el hato",
    excerpt:
      "Controlar peso, fertilidad y salud permite tomar mejores decisiones de seleccion.",
  },
];

module.exports = {
  siteUrl,
  pages,
  blogPosts,
};
