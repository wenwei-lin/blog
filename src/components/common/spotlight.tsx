import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightProps {
  className?: string
  fill?: string
}

export default function Spotlight({ className = '', fill = 'white' }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const mouseCoords = useRef({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return
      
      const div = divRef.current
      const rect = div.getBoundingClientRect()
      
      mouseCoords.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      
      div.style.setProperty('--mouse-x', `${mouseCoords.current.x}px`)
      div.style.setProperty('--mouse-y', `${mouseCoords.current.y}px`)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <div
      ref={divRef}
      className={cn(
        'pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute',
        className
      )}
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${fill}0A, transparent 40%)`,
      }}
    />
  )
}

