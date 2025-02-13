import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const PrevArrow = (props) => {
  const { className, onClick } = props;
    return (
      <div className={`${className}`}
        onClick={onClick}><FaArrowLeftLong /></div>
    );
}

export default PrevArrow


    