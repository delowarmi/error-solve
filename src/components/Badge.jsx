import React from 'react'

const Badge = ({badgeName,className}) => {
  return (
    <div className={`font-DMSans text-sm capitalize bg-black text-white py-2 px-10 ${className}`}>{badgeName}</div>
  )
}

export default Badge