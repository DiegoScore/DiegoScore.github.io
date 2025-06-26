
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const Socials = [
    {
      name: "Discord",
      src: "/instagram.svg",
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
    },
    {
      name: "Instagram",
      src: "/discord.svg",
    },
  ];
  
  const experiences = [
    {
      title: "Desarrollador de Chatbot",
      company_name: "EccConsultores",
      iconBg: "#232631",
      date: "Julio 2019 - Agosto 2019",
      points: [
        "Mis responsabilidades incluyeron el manejo de JavaScript y la creación de un manual de uso para un chatbot dirigido a clientes que tuvieran la necesidad de cotizar una compra o arriendo de un inmobiliario que se ajustara a las necesidades del usuario, teniendo en cuenta su renta y ubicación."
      ],
    },
    {
      title: "Desarrollador de Software y Full Stack",
      company_name: "NEVAPE",
      iconBg: "#232631",
      date: "Diciembre 2021 - Febrero 2023",
      points: [
        "Gestioné un proyecto web utilizando metodología Agile.",
        "Desarrollé una aplicación que evaluaba el ciclo de vida y calculaba el impacto medioambiental.",
        "Utilicé Angular para el front-end y Node.js con MySQL para el back-end. Además, creé APIs personalizadas y un sistema de usuarios con historial de movimientos."
      ],
    },
    {
      title: "Ingeniero de Machine Learning",
      company_name: "CEN",
      iconBg: "#232631",
      date: "Febrero 2024 - Diciembre 2024",
      points: [
        "Desarrollé modelos de predicción de consumo eléctrico basados en redes neuronales recurrentes (RNN) con arquitectura LSTM para el Coordinador Eléctrico Nacional (CEN).",
        "El proyecto incluyó la preparación y análisis de datos históricos de consumo y temperatura (2017-2023), la experimentación con diferentes configuraciones arquitectónicas y la evaluación del rendimiento mediante métricas de error (MSE, MAE y RMSE). Los resultados permitieron anticipar sobrecargas y cortes de energía en periodos críticos, contribuyendo a una mejor planificación y control del sistema eléctrico chileno.",
      ],
    },
    {
      title: "Desarrollador de IA",
      company_name: "ChiquiBaratin",
      iconBg: "#232631",
      date: "Enero 2025 - Abril 2025",
      points: [
        "Desarrollé un modelo de reconocimiento de imágenes para la detección de imperfecciones en ropa de niños.",
        "Dentro de la organización tuve que gestionar el proyecto desde su inicio, lo que incluyó la recolección de datos, la creación y el desarrollo del modelo y la implementación del mismo en una aplicación web.",
        "En su desarrollo utilicé Python, Tensorflow y Keras para el modelo de IA y técnicas como Transfer-Learning y uso de Fine-Tuning.",
        "El modelo resultante fue capaz de identificar y clasificar las imperfecciones en la ropa en dos grupos: nuevo, casi nuevo y descarte. Y posteriormente pasa por otro modelo que las clasifica dependiendo de el defecto de la prenda, dentro de los cuales se destacaban dos subgrupos: motitas y manchas."
      ],
    },
  ];
  
  export { experiences, Socials};