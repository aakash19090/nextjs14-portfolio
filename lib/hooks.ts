import { useContext, useEffect } from 'react'
import { ActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '@/context/active-section-context'

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { setActiveSection, timeOfLastClick } = useContext(ActiveSectionContext)

    const { ref, inView } = useInView({
        threshold,
    })

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 500) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, sectionName, timeOfLastClick])

    return {
        ref,
    }
}
