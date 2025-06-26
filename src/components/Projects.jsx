import React from 'react'
import ProjectCard from './ProjectCard'
import ModeloChiqui from '../assets/output-gpu.png'
import ModeloCEN from '../assets/Metodologia.png'
import ResultadosCEN from '../assets/Resultadocen.png'
import ResultadosCEN2 from '../assets/Resultadocen2.png'
import ResultadosChiqui from '../assets/Resultadochiqui.png'
import ResultadosChiqui2 from '../assets/Resultadochiqui2.png'
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from "../utils/motion";
const data = [
    {
        title: 'Modelo predictivo consumo eléctrico | CEN ',
        desc: 'Utilizando redes neuronales recurrentes (RNN) con arquitectura LSTM, el modelo predice el consumo eléctrico residencial a partir de series temporales de consumo y temperatura histórica. Se desarrollaron y compararon múltiples arquitecturas con distintas ventanas de predicción (24 horas y 7 días), incluyendo configuraciones con y sin variables climáticas. El sistema fue entrenado y evaluado con métricas como MAE, MSE y RMSE, obteniendo resultados óptimos para aplicaciones en planificación energética.',
        skills: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Deeep Learning', 'LSTM','RNN', 'Series de tiempo'],
        github: '#github',
        href: 'https://github.com/DiegoScore/Articulo_consumo_electrico',
        img: ModeloCEN,
        resultImgs: [{src: ResultadosCEN, caption: 'Resultados del modelo LSTM con ventana de 24 horas'}, {src: ResultadosCEN2, caption: 'Resultados del modelo LSTM.'}]
    },
    {
        title: 'Modelo reconocimiento de imágenes | ChiquiBaratin',
        desc: 'Utilizando redes neuronales profundas. El modelo identifica el estado de las prendas en tres categorías (nuevo, casi nuevo, descarte) y, si corresponde, detecta el tipo de defecto (motita o mancha) mediante una arquitectura jerárquica con dos modelos encadenados. El sistema fue desarrollado en Python con TensorFlow.',
        skills: ['Python', 'Tensorflow', 'Keras', 'CNN', 'Deep Learning', 'Numpy', 'Matplotlib', 'ML'],
        github: '#github',
        href: 'https://github.com/DiegoScore/Modelo-predictivo',
        img: ModeloChiqui,
        resultImgs: [{src: ResultadosChiqui, caption: 'Matriz de confusión modelo de categoría por estado de prenda.'}, {src: ResultadosChiqui2, caption: 'Matriz de confusión modelo de categoría por tipo de defecto.'}]
    },

]

const Projects = () => {
    return (
        <div className='' id='Projects'>

            <h4 className={`${styles.sectionHeadText} text-center`}>
                Proyectos
            </h4>
            <p className={`${styles.sectionSubText} text-center mb-10`}>
                Proyectos en los que he trabajado
            </p>


            <div className="flex justify-center">

                <div className="grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8">
                    {data.map((items, index) => (


                        <ProjectCard key={index} items={items} />


                    ))}
                </div>



            </div>
        </div>
    )
}

export default Projects
