type CenterContentProps = {
  children: React.ReactNode
}

export function CenterContent({ children }: CenterContentProps) {
  return <div className="ml-auto mr-auto max-w-[1200px] pl-3 pr-3">{children}</div>
}
