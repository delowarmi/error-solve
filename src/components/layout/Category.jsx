import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

const Category = () => {
    const [selectCate, setSelectedCate] = useState("");

    const handleSelect = (event) => {
        setSelectedCate(event.target.value);
    };

    return (
        <div>
            <label><HiMiniBars3BottomLeft className='relative mr-1 inline-block' /> </label>
            <select value={selectCate} onChange={handleSelect} 
            className='bg-menuBg outline-none w-48 py-10 appearance-none cursor-pointer'>
                <option value="" disabled> Shop by Category </option>
                <option className='bg-black text-white' value="Accessories">Accessories</option>
                  <option className='bg-black text-white' value="Furniture">Furniture</option>
                  <option className='bg-black text-white' value="Electronics">Electronics</option>
                  <option className='bg-black text-white' value="Clothes">Clothes</option>
                  <option className='bg-black text-white' value="Bags">Bags</option>
                  <option className='bg-black text-white' value="Home appliances">Home appliances</option>
            </select>
        </div>
    )
}

export default Category