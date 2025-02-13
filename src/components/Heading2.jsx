import React from 'react'

const Heading2 = ({text,className}) => {
  let spann = text.replace ("#", "<span class='colorchange'>").replace("#", "</span>") 
  return (
    <h5 className={`${className}`} dangerouslySetInnerHTML={{ __html:spann }}></h5>
  )
}

export default Heading2