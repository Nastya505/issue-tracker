"use client";

import React from 'react'
import Link from 'next/link';
import classnames from 'classnames';
import { IoBug } from "react-icons/io5";

import { usePathname } from 'next/navigation';



const NavBar = () => {
    const links = [
        {label:"Dashboard", href:"/"},
        {label:"Issues", href:"/issues"}
    ];

    const currentPath = usePathname();

  return (
    <nav className="flex gap-10 border-b mb-5 p-5 items-center">
        <Link href='/'><IoBug color='#75a164' size="1.7em"/></Link>
        <ul className='flex gap-6'>
            {links.map(({label, href}) => 
            <li key={href}>
                <Link 
                className={classnames({
                    "text-zinc-500": currentPath !== href,
                    "text-zinc-900": currentPath === href,
                    "hover:text-zinc-800 transition-colors": true
                })}
                href={href}>
                    {label}
                </Link>
            </li>
            ) }
        </ul>
    </nav>

  )
}

export default NavBar;