'use client'

import React, { createContext, useState } from 'react'
import { links } from '@/lib/data'

export type SectionName = (typeof links)[number]['name']

type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType>({} as ActiveSectionContextType)

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}
