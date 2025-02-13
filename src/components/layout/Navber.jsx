import React, { useRef, useState } from 'react'

import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Logo from '../../assets/logo.png'
import Menu from '../../components/Menu'
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom'
import Category from './Category';
import { useSelector } from 'react-redux'

const Navber = () => {

  // const navigate = useNavigate()
  // const cart = useSelector((state) => state.cart)

  // const getTotalQuantity = () => {
  //   let total = 0
  //   cart.forEach(item => {
  //     total += item.quantity
  //   })
  //   return total
  // }


  let dropRef = useRef(null);
  let handledrop = () => {
    if (dropRef.current.style.display == 'block') {
      dropRef.current.style.display = 'none'
    }
    else {
      dropRef.current.style.display = 'block'
    }
  }


  return (
    <>
      {/* Menu-top Part Start */}
      <div className="bg-white border-b border-borderColor py-5">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[15%]">
              <Image imgSrc={Logo} imgAlt={"Image"} />
            </div>
            <div className="w-[65%] sm:max-md:w-[100%] md:max-xl:w-[80%]">
              <Menu className="flex justify-center text-menuColor">
                <Link to='/'><li className={"hover:font-bold ml-10"} >Home</li></Link>
                <Link to='/Shop'><li className={"hover:font-bold ml-10"} >Shop</li></Link>
                <Link to='/About'><li className={"hover:font-bold ml-10"} >About</li></Link>
                <Link to='/contacts'><li className={"hover:font-bold ml-10"} >Contacts</li></Link>
                <Link to='/journal'><li className={"hover:font-bold ml-10"} >Journal</li></Link>
              </Menu>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu-top Part End */}


      {/* Menu Part Start */}
      <div className="bg-menuBg border-b border-borderColor">
        <Container>
          <Flex className={"items-center"}>
            <div className="w-[20%] sm:max-md:w-[35%] md:max-xl:w-[30%] relative">
              <Category />
            </div>

            <div className="w-[60%] sm:max-md:w-[50%] md:max-xl:w-[50%]">
              <form class="flex items-center justify-center relative">
                <input placeholder="Search Products" type="search" className='inline w-full border-0 bg-white py-3 pl-3 pr-3 leading-5 placeholder-gray-300 focus:outline-none' />
                <button type="submit" className='absolute right-4 top-0 bottom-0 text-xl'><IoSearch /></button>
              </form>
            </div>
            <div className="w-[20%] sm:max-md:w-[15%] md:max-xl:w-[20%] min-[420px]:w-[20%] max-[640px]:w-[20%]">
              <Flex className={"justify-end"}>
                <div className='relative' onClick={handledrop}>
                  <Flex>
                    <FaUser className='mr-1' />
                    <TiArrowSortedDown />
                  </Flex>
                  <div className="absolute top-10 right-0 bg-slate-50 border-2 z-10 w-32 hidden" ref={dropRef}>
                    <ul>
                      <Link><li className='bg-black text-white p-3'>My Account</li></Link>
                      <Link><li className='hover:bg-black hover:text-white p-3'>Log out</li></Link>
                    </ul>
                  </div>
                </div>

                {/* <div onClick={() => navigate('/cart')}> */}
                  <FaShoppingCart className="ml-5" />
                  {/* <p>{getTotalQuantity() || 0}</p> */}
                {/* </div> */}

              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Menu Part End */}
    </>
  )
}

export default Navber