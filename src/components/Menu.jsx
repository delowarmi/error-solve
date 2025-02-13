import React from 'react'

const Menu = ({children,className}) => {
  return (
    <ul className={`font-DMSans text-sm capitalize ${className}`}>
      {children}
    </ul>
  )
}

export default Menu