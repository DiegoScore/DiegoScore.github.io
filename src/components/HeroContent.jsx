import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Contact from "./Contact";

const HeroContent = () => {
    return (
        <div
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start rounded">
                <div
                    className="Welcome-box py-[8px] px-[7px] border border-[#3b7ad1] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#3b7ad1] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Bienvenido a mi portafolio
                    </h1>
                </div>


                <div
                    className="flex flex-col gap-4 mt-6 text-3xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
            <span>Diego Campillay Manríquez</span>
            <span className="bg-clip-text text-blue-500">
                Computer Science Engineer
                </span>
                </div>


                <p
                    className="text-lg text-gray-300 my-5 max-w-[600px]"
                >

                    ¡Hola! Soy Diego, un Ingeniero civil en informática con capacidades óptimas en desarrollo de software, desarrollo web tanto front-end como back-end, desarrollo de modelos de Deep Learning, Machine Learning y aplicaciones con IA. Con experiencia laboral en trabajo en equipo y manejo efectivo de proyectos. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                </p>
                <div
                    className=""
                >
                    <Contact />
                </div>
            </div>

            <div
                className="w-full h-full flex justify-center items-center"
            >
                <img
                    src="/Astronauta2hd.webp"
                    alt="work icons"
                    height={750}
                    width={750}
                />
            </div>


            <div className='absolute bottom-10 right-10 lg:right-1/2'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                    />
                </div>
            </div>
        </div>


    );
};

export default HeroContent;
