import React from 'react'
import { Link } from 'react-scroll';

export const NavItemsMobile = ({ data, onClickClose }) => {
    const { name, href } = data;

    return (
        <li className={`border-transparent flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm rounded-lg text-white drop-shadow-lg border`}>
            <Link
                className='w-full'
                to={href}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
            >
                <span onClick={onClickClose} className='block h-full w-full'>{name}</span>
            </Link>
        </li>
    )
}
