
import React, { useState } from 'react'

export const GifItem = ({title, url}) => {

  const [first, setFirst] = useState();

  return (
    <div className="card">
      <img src={url} alt={title} />  
      <p>{title}</p>
    </div>
  )
}
