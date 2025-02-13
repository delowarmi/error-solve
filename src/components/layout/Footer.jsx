import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Menu from '../Menu'
import { Link } from 'react-router-dom'
import Heading from '../Heading'
import Logo from '../../assets/logo.png'
import Image from '../Image'
import { FaFacebookF, FaLinkedinIn, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer Part Start */}
      <div className="pb-10 pt-10 bg-menuBg">
        <Container>
          <Flex>
            <div className="w-[15%]">
              <Heading as={"h3"} className={"font-DMSans text-[16px] font-bold"} text={'MENU'} />
              <Menu className="text-menuColor mt-3">
                <Link to='/'><li className='mb-3'>Home</li></Link>
                <Link to='/shop'><li className='mb-3'>Shop</li></Link>
                <Link to='/about'><li className='mb-3'>About</li></Link>
                <Link to='/contacts'><li className='mb-3'>Contacts</li></Link>
                <Link to='/journal'><li>Journal</li></Link>
              </Menu>
            </div>
            <div className="w-[15%]">
              <Heading as={"h3"} className={"font-DMSans text-[16px] font-bold"} text={'SHOP'} />
              <ul className="text-menuColor mt-3">
                <Link to='/'><li className='mb-2'>Category 1</li></Link>
                <Link to='/'><li className='mb-2'>Category 2</li></Link>
                <Link to='/'><li className='mb-2'>Category 3</li></Link>
                <Link to='/'><li className='mb-2'>Category 4</li></Link>
                <Link to='/'><li>Category 5</li></Link>
              </ul>
            </div>
            <div className="w-[20%]">
              <Heading as={"h3"} className={"font-DMSans text-[16px] font-bold"} text={'HELP'} />
              <ul className="text-menuColor mt-3">
                <Link to='/'><li className='mb-2'>Privacy Policy</li></Link>
                <Link to='/'><li className='mb-2'>Terms & Conditions</li></Link>
                <Link to='/'><li className='mb-2'>Special E-shop</li></Link>
                <Link to='/'><li className='mb-2'>Shipping</li></Link>
                <Link to='/'><li>Secure Payments</li></Link>
              </ul>
            </div>
            <div className="w-[30%]">
              <Heading as={"h3"} className={"font-DMSans text-[16px] font-bold"} text={'(052) 611-5711'} />
              <Heading as={"h3"} className={"font-DMSans text-[16px] font-bold"} text={'company@domain.com'} />
              <Heading as={"p"} className={"font-DMSans text-[14px] text-menuColor mt-3"} text={'575 Crescent Ave. Quakertown, PA 18951'} />
            </div>
            <div className="w-[20%]">
              <Image imgSrc={Logo} imgAlt={"Image"} />
            </div>
          </Flex>
          <div className="pt-10">
            <Flex className={'justify-between items-center'}>
              <Flex>
                <FaFacebookF className='mr-3'/>
                <FaLinkedinIn className='mr-3'/>
                <FaInstagram  />
              </Flex>
              <Heading as={"p"} className={"font-DMSans text-[14px] text-menuColor mt-3"} text={'575 Crescent Ave. Quakertown, PA 18951'} />
            </Flex>
          </div>
        </Container>
      </div>
      {/* Footer Part End */}
    </>
  )
}

export default Footer