'use client'

import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='relative z-[999]'>
            <motion.div
                className='fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            ></motion.div>

            <nav className='fixed left-1/2 top-0 -translate-x-1/2 py-[3px] sm:top-6'>
                <ul className='flex w-[22rem] flex-wrap items-center justify-center sm:w-[initial] sm:flex-nowrap'>
                    {links.map(({ name, hash }) => (
                        <motion.li
                            key={name}
                            className='relative inline-block'
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={hash}
                                className='inline-block px-3 py-1.5 text-[0.9rem] font-medium  text-gray-500 transition hover:text-gray-950 sm:p-3'
                            >
                                {name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
