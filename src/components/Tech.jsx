import React from "react";
import { SectionWrapper } from "../hoc";
import { techStack } from "../constants/reactIconsTech";
import { styles } from "../styles";
import { motion } from "framer-motion";

// Animación tipo slide up
const slideUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Barra de progreso visual

const ProgressBar = ({ level }) => {
  return (
    <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};




// Render general de secciones con íconos
const renderSection = (title, emoji, items = []) => (
  <motion.section
    className="bg-gradient-to-b from-[#0d1626] to-[#0f1e33] py-10 mb-5 mt-14 rounded-xl shadow-md"
    variants={slideUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex items-center justify-center gap-2 mb-8">
      <span className="text-2xl">{emoji}</span>
      <p className={`${styles.sectionSubText} text-center text-white`}>
        {title.toUpperCase()}
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-8 relative z-30">
      {items.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center w-24 h-28 p-3 rounded-xl bg-[#1f2937] hover:shadow-xl transition-transform duration-300 hover:scale-105"
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#111827] mb-2">
            <Icon size={32} className="text-white" />
          </div>
          <p className="text-center text-sm text-gray-300 font-semibold">
            {name}
          </p>
        </div>
      ))}
    </div>
  </motion.section>
);

// Render sección Aprendiendo con barras de progreso
// const renderLearningSection = (items = []) => (
//   <motion.section
//     className="bg-gradient-to-b from-[#0d1626] to-[#0f1e33] py-10 mb-5 mt-14 rounded-xl shadow-md"
//     variants={slideUpVariant}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//   >
//     <div className="flex items-center justify-center gap-2 mb-8">
//       <span className="text-2xl">🛠️📚</span>
//       <p className={`${styles.sectionSubText} text-center text-white`}>
//         APRENDIENDO
//       </p>
//     </div>

//     <div className="space-y-6 px-4">
//       {items.map(({ name, icon: Icon, level }) => (
//         <div key={name} className="flex items-center justify-between gap-4">
//           <div className="flex items-center gap-2 w-40">
//             <Icon size={20} className="text-white" />
//             <span className="text-sm text-white font-bold">{name}</span>
//           </div>
//           <div className="flex-1">
//             <ProgressBar level={level} />
//           </div>
//           <span className="text-sm text-white font-medium w-10 text-right">
//             {level}%
//           </span>
//         </div>
//       ))}
//     </div>
//   </motion.section>
// );

const Tech = () => {
  return (
    <div id="Tech" className="mb-8">
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Mi Stack Tecnológico
      </h2>

      {renderSection("Lenguajes y Frameworks", "🖥️", techStack.languagesFrameworks)}
      {renderSection("Herramientas y Entornos de Desarrollo", "⚙️", techStack.devTools)}
      {renderSection("Bases de Datos y BI", "💾", techStack.databasesBI)}
      {renderSection("Librerías de Machine Learning", "📚", techStack.mlLibraries)}
      {renderSection("Modelos y Técnicas ML", "🧪", techStack.mlTechniques)}
      {/* {renderLearningSection(techStack.learning)} */}
    </div>
  );
};

export default SectionWrapper(Tech, "");
