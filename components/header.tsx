'use client'

import { useContext } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ActiveSectionContext } from '@/context/active-section-context'

export default function Header() {
    const { activeSection, setActiveSection } = useContext(ActiveSectionContext)

    return (
        <header className='relative z-[999]'>
            <motion.div
                className='fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75'
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
                                className='relative inline-block px-3 py-1.5 text-[0.9rem] font-medium  text-gray-500 transition hover:text-gray-950 sm:p-3 dark:hover:text-gray-300'
                                onClick={() => {
                                    setActiveSection(name)
                                    console.log('test')
                                }}
                            >
                                {name}

                                {name === activeSection && (
                                    <motion.span
                                        className={cn(
                                            'absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800',
                                            {
                                                'text-gray-950 dark:text-gray-200': activeSection === name,
                                            },
                                        )}
                                        layoutId='activeSection'
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
