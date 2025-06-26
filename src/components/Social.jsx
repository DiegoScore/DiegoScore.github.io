import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import LinkIcon from '../utils/icons/link';
import { styles } from "../styles";
const Social = () => {
    return (
        <div className='max-w-[48rem] mx-auto px-4 mb-24' id='Contact'>
            <h2 className={`${styles.sectionHeadText} text-center`}>
                Contáctame
            </h2>
            <p className={`${styles.sectionSubText} text-center mb-10`}>
                Encuéntrame en cualquiera de estas redes, responderé lo antes posible.
            </p>
            <ul className="animated-list grid flex-grow py-4 gap-5 md:grid-cols-2">
                <li className="col-span-1 transition-opacity">
                    <a target="_blank" href="https://github.com/DiegoScore" className="border-grey-custom inline-grid w-full rounded-lg border p-2 no-underline transition-opacity">
                        <div className="flex items-center gap-3">
                            <FaGithub className='h-8 w-8' />
                            GitHub
                            <LinkIcon className="text-secondary ml-auto h-5 w-5" />
                        </div>
                    </a>
                </li>
                <li className="col-span-1 transition-opacity">
                    <a target="_blank" href="mailto:diego.campillay.m@gmail.com" className="border-grey-custom inline-grid w-full rounded-lg border p-2 no-underline transition-opacity">
                        <div className="flex items-center gap-3">
                            <SiGmail className='h-8 w-8' />
                            Correo
                            <LinkIcon className="text-secondary ml-auto h-5 w-5" />
                        </div>
                    </a>
                </li>
                <li className="col-span-1 transition-opacity md:col-span-2 md:justify-self-center md:min-w-[320px]">
                    <a target="_blank" href="https://www.linkedin.com/in/diego-leonardo-campillay-manriquez-4b5096234" className="border-grey-custom inline-grid w-full rounded-lg border p-2 no-underline transition-opacity">
                        <div className="flex items-center gap-3">
                            <FaLinkedin className='h-8 w-8' />
                            Linkedin
                            <LinkIcon className="text-secondary ml-auto h-5 w-5" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Social