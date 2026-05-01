import { useCallback } from 'react'

/**
 * Hook to smoothly scroll to a section by ID
 * @returns {(sectionId: string) => void}
 */
export function useScrollTo() {
  return useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])
}
