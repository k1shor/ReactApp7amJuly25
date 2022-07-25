import React from 'react'
import First from './First'

const Second = () => {
  return (
    <div>
        <First/>
        <p className='custom-alignment'>
            This is from second component.
        </p>
    </div>
  )
}

export default Second