import { useCallback, useEffect, useState } from 'react'

type Props = {
  list: string[]
  paused?: boolean
  min?: number
  max?: number
}

export function Typewriter({ list, paused = false, min = 100, max = 150 }: Props) {
  const [direction, setDirection] = useState<1 | -1>(1)

  const [textPosition, setTextPosition] = useState(0)
  const [text, setText] = useState(list[0])
  const [displayText, setDisplayText] = useState('')

  const nextInList = useCallback(() => {
    let i = list.findIndex((t) => t === text)
    if (i === list.length - 1) i = -1
    setText(list[i + 1])
  }, [list, text])

  useEffect(() => {
    if (!paused) {
      const latency = Math.random() * (max - min) + min

      if (direction === 1 && textPosition - 1 === text.length) {
        setTimeout(() => {
          setDirection(-1)
        }, latency * 2)
      } else if (direction === -1 && textPosition === -1) {
        setTimeout(() => {
          setDirection(1)
          nextInList()
        }, latency * 2)
      } else {
        setTimeout(() => {
          console.log('main')
          setDisplayText(text.substring(0, textPosition))
          setTextPosition(textPosition + direction)
        }, latency)
      }
    }
  }, [direction, nextInList, paused, text, textPosition])

  return <>{displayText}</>
}
