'use client'

import { clsx } from 'clsx'

export function Mark(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div 
      className="flex items-center justify-center text-4xl font-semibold text-black"
      style={{ 
        fontFamily: 'Times New Roman, serif',
        lineHeight: '0.8',
        fontSize: '2.5rem',
        paddingBottom: '4px'
      }}
      {...props}
    >
      ℌ
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <div className={clsx('flex items-center gap-3', props.className)}>
        <Mark className="size-12" />
        <span className="text-xl font-semibold tracking-tight">Himalayas X</span>
      </div>
    </div>
  )
}
