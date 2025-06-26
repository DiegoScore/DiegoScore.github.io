import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ items }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative flex md:items-start rounded-lg bg-cover px-8 py-12 bg-[#0A203E] md:p-0 mb-12 aos-init aos-animate" data-aos="fade-in">
      
      {/* Columna izquierda */}
      <div className="flex flex-col md:w-[60%] py-4 pl-3 z-10">

        <div className="flex flex-col relative mb-2">
          <h3 className="text-2xl font-semibold text-white">{items.title}</h3>
        </div>

        <div className="md:p-4 md:w-[105%] rounded bg-[#233c64] z-10">
          <p className="text-sm font-normal text-white">
            {items.desc}
          </p>
        </div>

        <div className="flex md:w-[105%] z-10 pt-4">
          <ul className="flex flex-wrap text-sm font-medium text-slate-400" style={{ WebkitTextStroke: '0.1px black' }}>
            {items.skills.map((e, i) => (
              <li className="pr-4" key={i}>
                <p>{e}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex relative mt-3">
          <a
            className="flex justify-between items-center text-white pr-4 hover:text-blue-500 duration-300"
            href={items.href}
            target="_blank"
            rel="noreferrer"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
              viewBox="0 0 24 24" className="min-h-[25px] min-w-[25px]" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 
                3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </a>
        </div>

        {/* Botón Pestaña */}
        {items.resultImgs && (
          <div className="mt-4">
            <button
              className="text-sm text-blue-400 hover:text-blue-300 underline w-fit"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? '▲ Ocultar resultados' : '▼ Mostrar resultados'}
            </button>

            {/* Contenido expandido */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden mt-4 space-y-6"
                >
                  <p className="text-white text-sm font-semibold mb-2">
                    Resultados del modelo:
                  </p>

                  {items.resultImgs.map(({ src, caption }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * i }}
                      className="space-y-1"
                    >
                      <img
                        src={src}
                        alt={`Resultado ${i + 1}`}
                        className="rounded-md w-full object-contain shadow-lg"
                      />
                      <p className="text-xs text-slate-300 italic">{caption}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Imagen derecha: fija en la parte superior */}
      <a
        className="hidden md:flex absolute top-12 right-8 w-[40%] h-[250px] z-0 overflow-hidden"
        href={items.href}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="relative w-full h-full bg-cover hover:bg-transparent duration-300"
          style={{ backgroundImage: `url(${items.img})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
