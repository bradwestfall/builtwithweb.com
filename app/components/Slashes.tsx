// export function Slash({ className }: { className?: string }) {
//   return (
//     <div style={{ transform: 'skew(331deg)', transformOrigin: 'bottom left' }}>
//       <div className={`${className} aspect-[67/193]`} />
//     </div>
//   )
// }

// type SlashesProps = {
//   children: React.ReactNode // Meant to be <Slash /> elements
//   className: string
// }

// export function Slashes({ children, className }: SlashesProps) {
//   children = Children.map(children, (child, i) => {
//     return (
//       <div key={i} style={{ transform: `translateX(${i * 30}%)` }}>
//         {child}
//       </div>
//     )
//   })

//   return <div className={`flex ${className}`}>{children}</div>
// }

type SlashClipProps = {
  className?: string
}

export function Slashes({ className }: SlashClipProps) {
  return (
    <svg
      viewBox="0 0 255 193"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group" fill="currentColor" fillRule="nonzero">
          <polygon id="Path" points="87 193 194.234043 0 255 0 151.340426 193"></polygon>
          <polygon id="Path" points="0 193 107.234043 0 168 0 64.3404255 193"></polygon>
        </g>
      </g>
    </svg>
  )
}
