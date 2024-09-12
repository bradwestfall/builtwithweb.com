import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

type ViewportObserverProps = {
  children: React.ReactNode
}

const ObserverContext = createContext<any>(null!)

export function ViewportObserver({ children }: ViewportObserverProps) {
  const [position, setPosition] = useState<number | null>(null)

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY // Scroll position from the top of the page
      setPosition(position)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const context = useMemo(() => {
    return {
      viewportPosition: position,
    }
  }, [position])

  return <ObserverContext.Provider value={context} children={children} />
}

type ViewportRangeProps = {
  children: React.ReactNode

  name: string
  className: string
  offset?: number
}

export function ViewportRange({ children, name, className, offset = 0, ...props }: ViewportRangeProps) {
  const [intersecting, setIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null!)
  const { viewportPosition } = useContext(ObserverContext)
  const [past, setPast] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIntersecting(!!entries[0].isIntersecting)
    })
    observer.observe(ref.current)
    const current = ref.current
    return () => {
      observer.unobserve(current)
    }
  }, [])

  useEffect(() => {
    if (intersecting) {
      const { y } = ref.current.getBoundingClientRect()
      setPast(y - offset < 0)
    }
  }, [viewportPosition, intersecting, offset])

  return (
    <div {...props} className={`${past ? name : ''} ${className}`} ref={ref}>
      {children}
    </div>
  )
}
