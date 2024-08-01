import React from 'react'

export default function Header(props) {
  return (
    <div className='container py-5' >
      <h1 className="text-2xl font-bold text-center">
        {props.title}
      </h1>
    </div>

  )
}
