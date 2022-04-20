import React, { useState } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'

export default function Tip(props) {
  const { size = 25, color = '#FEFEFE', text } = props
  const [active, setactive] = useState(false)
  return (
    <div className='relative'>
      <button
        onClick={() => setactive(!active)}
        onBlur={() => setactive(false)}
      >
        <QuestionMarkCircleIcon stroke={color} width={size} height={size} />
      </button>
      {text && (
        <div className={`${!active && 'hidden'} absolute`}>
          <p className='bg-light px-5 py-3 -ml-[60%] w-[250px] shadow text-primary'>
            {text}
          </p>
        </div>
      )}
    </div>
  )
}
