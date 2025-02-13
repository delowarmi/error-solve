import React from 'react'

const Button = ({className,btnName}) => {
  return (
    <button className={`font-DMSans font-regular text-sm capitalize ${className}`}>{btnName}</button >
  )
}

export default Button