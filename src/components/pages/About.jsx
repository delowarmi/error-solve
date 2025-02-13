import React from 'react'
import abimg1 from '../../assets/ab1.png'
import abimg2 from '../../assets/ab2.png'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import Breadcrumbs from '../layout/Breadcrumbs'
import Button from '../Button'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
      <div className="relative overflow-hidden ">
        <Container>
          <div className="w-full my-20">
            <Heading as={"h1"} className={"font-DMSans text-[49px] font-bold"} text={'Products'} />
            <Breadcrumbs />
          </div>

          <div className="pb-20">
            <Flex>
              <div className="w-1/2 gap-x-10 relative">
                <Image imgSrc={abimg1} className={'w-full'}/>
                <Link to='/shop'>
                <Button btnName={"Our Brands"} className={"py-4 px-12 text-white bg-black absolute w-44 mx-auto left-0 right-0 text-center bottom-10"} />
                </Link>
              </div>

              <div className="w-1/2 ml-10 relative">
                <Image imgSrc={abimg2} className={'w-full'}/>
                <Link to='/shop'>
                <Button btnName={"Our Brands"} className={"py-4 px-12 text-white bg-black absolute w-44 mx-auto left-0 right-0 text-center bottom-10"} />
                </Link>
              </div>
            </Flex>
          </div>
          <div className="py-6">
            <Heading as="p" text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style." 
            className={"font-DMSans text-[39px] text-fotterMenuColor leading-[52px]"} />
          </div>
          <div className="py-14">
            <Flex>
              <div className="w-1/3 px-5">
                <div className="py-4">
                  <Heading as="h2" text="Our Vision" className={"font-DMSans text-2xl font-bold text-fotterMenuColor capitalize "} />
                </div>
                <div className="py-4">
                  <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." 
                  className={"font-DMSans text-base text-fotterMenuColor leading-7 capitalize text-justify "} />
                </div>
              </div>

              <div className="w-1/3 px-5">
                <div className="py-4">
                  <Heading as="h2" text="Our Story" className={"font-DMSans text-2xl font-bold text-fotterMenuColor capitalize "} />
                </div>
                <div className="py-4">
                  <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." 
                  className={"font-DMSans text-base text-fotterMenuColor leading-7 capitalize  text-justify"} />
                </div>
              </div>

              <div className="w-1/3 px-5">
                <div className="py-4">
                  <Heading as="h2" text="Our Brands" className={"font-dm text-2xl font-bold text-fotterMenuColor capitalize "} />
                </div>
                <div className="py-4">
                  <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book." 
                  className={"font-DMSans text-base text-fotterMenuColor leading-7 capitalize text-justify"} />
                </div>
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  )
}

export default About