import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className}`}
        onClick={onClick}><FaArrowRightLong /></div>
    );
}

export default NextArrow