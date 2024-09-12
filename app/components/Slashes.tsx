type SlashesProps = {
  children: React.ReactNode
  className: string
}

export function Slashes({ children, className }: SlashesProps) {
  return (
    <div className={`flex ${className}`}>
      {children}
      <div className="transform -translate-x-[45%]">{children}</div>
    </div>
  )
}

type SlashClipProps = {
  className: string
}

export function SlashClip({ className }: SlashClipProps) {
  return (
    <div
      className={`aspect-[168/193] ${className}`}
      style={{ clipPath: 'polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%)' }}
    />
  )
}

export function Slash({ className, size = 10 }: { className?: string; size?: number }) {
  return (
    <div className="aspect-[168/193]" style={{ width: `${size}em` }}>
      <div
        className={className}
        style={{ height: '100%', width: '40%', transform: 'skew(332.5deg)', transformOrigin: 'bottom left' }}
      />
    </div>
  )
}
