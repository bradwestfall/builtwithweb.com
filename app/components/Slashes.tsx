import { Children } from 'react'

export function Slash({ className }: { className?: string }) {
  return (
    <div style={{ transform: 'skew(331deg)', transformOrigin: 'bottom left' }}>
      <div className={`${className} aspect-[67/193]`} />
    </div>
  )
}

type SlashesProps = {
  children: React.ReactNode // Meant to be <Slash /> elements
  className: string
}

export function Slashes({ children, className }: SlashesProps) {
  children = Children.map(children, (child, i) => {
    return (
      <div key={i} style={{ transform: `translateX(${i * 30}%)` }}>
        {child}
      </div>
    )
  })

  return <div className={`flex ${className}`}>{children}</div>
}

type SlashClipProps = {
  className: string
}

export function SlashClip({ className }: SlashClipProps) {
  return (
    <div
      className={`aspect-[167/193] ${className}`}
      style={{ clipPath: 'polygon(60% 0%, 100% 0%, 40% 100%, 0% 100%)' }}
    />
  )
}

export function SlashMask() {
  return (
    <svg width="0" height="0">
      <defs>
        <mask id="slash-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="150" cy="150" r="500" fill="black" />
        </mask>
      </defs>
    </svg>
    // <svg
    //   width="168px"
    //   height="193px"
    //   viewBox="0 0 168 193"
    //   version="1.1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    // >
    //   <defs>
    //     <mask id="slash-mask">
    //       <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
    //         <g id="Group" fill="#000000" fillRule="nonzero">
    //           <polygon id="Path" points="0 193 107.234043 0 168 0 64.3404255 193"></polygon>
    //         </g>
    //       </g>
    //     </mask>
    //   </defs>
    // </svg>
  )
}
