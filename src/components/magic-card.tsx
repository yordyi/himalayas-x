'use client'

import { cn } from '@/lib/utils'
import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface MagicCardProps extends Omit<HTMLMotionProps<'div'>, 'style'> {
  gradientColor?: string
  gradientSize?: number
  gradientOpacity?: number
  children: React.ReactNode
}

export function MagicCard({
  gradientColor = '#262626',
  gradientSize = 200,
  gradientOpacity = 0.7,
  className,
  children,
  ...props
}: MagicCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800',
        'transition-all duration-300 hover:scale-[1.02]',
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at ${position.x}px ${position.y}px, ${gradientColor}, transparent ${gradientOpacity * 100}%)`
        }}
      />
      {children}
    </motion.div>
  )
} 