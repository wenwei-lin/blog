import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TextGenerateEffect({ words, className = '' }: { words: string; className?: string }) {
  const [complete, setComplete] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true)
    }, 1000)
    
    return () => clearTimeout(timeout)
  }, [])
  
  return (
    <div className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {complete ? (
          words
        ) : (
          words.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))
        )}
      </motion.span>
    </div>
  )
}

