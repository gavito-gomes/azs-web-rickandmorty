import React, { useState, useEffect, useCallback } from 'react'

export default function EpisodeDetails() {
  const [value1, setvalue1] = useState(1)
  const [value2, setvalue2] = useState(true)

  const a = useCallback(() => {
    console.log('A', value2)
    if (!value2) return
    setvalue1(2)
    setvalue2(false)
  }, [value2])

  useEffect(() => {
    a()
  }, [a])

  return (
    <div>
      EpisodeDetails {value1} {value2}
    </div>
  )
}
