'use client'

interface GradientBackgroundProps {
  className?: string
}

export function GradientBackground({ className = '' }: GradientBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 -z-10 h-full w-full bg-white ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(#e5e7eb 1px, transparent 1px), radial-gradient(#e5e7eb 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px',
      }}
    />
  )
}

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      {...props}
    >
      <div
        className="absolute left-[calc(50%-33rem)] top-[calc(50%-33rem)] h-[66rem] w-[66rem] opacity-50"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, #f472b6 0%, #60a5fa 50%, #c084fc 100%)',
        }}
      />
    </div>
  )
}
