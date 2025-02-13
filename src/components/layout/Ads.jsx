import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import adsOne from '../../assets/ads1.png'
import adsTwo from '../../assets/ads2.png'
import adsThree from '../../assets/ads3.png'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Heading2 from '../../components/Heading2'

const Ads = () => {
  return (
    <>
    {/* Ads Part Start */}
    <div className="pt-40 pb-20">
        <Container>
          <Flex className={'sm:max-lg:flex-wrap'}>
            <div className="w-1/2 sm:max-md:w-full md:max-lg:w-[75%] sm:max-lg:mx-auto relative mr-9 sm:max-lg:mb-9 ">
              <Image imgSrc={adsOne} imgAlt={"Image"} />
              <div className="absolute bottom-14 left-10">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[39px]"} text={"Phones Sale"} />
                <Heading2 className={"font-DMSans text-base text-menuColor mt-4"}
                  text={"Up to #30%# sale for all Phones"} />
                <Button btnName={"Shop Now"} className={"py-4 px-12 mt-10 text-white bg-black "} />
              </div>
            </div>
            <div className="w-1/2 sm:max-md:w-full md:max-lg:w-[75%] sm:max-lg:mx-auto">
              <div className="relative mb-9">
                <Image imgSrc={adsTwo} imgAlt={"Image"} />
                <Flex className={"justify-start"}>
                  <div className="absolute top-16 left-10">
                    <Heading as={"h1"} className={"font-DMSans font-bold text-[39px] "} text={"Electronics Sale"} />
                    <Heading2 className={"font-DMSans text-base text-menuColor mt-4"}
                      text={"Up to #70%# sale for all Electronics"} />
                    <Button btnName={"Shop Now"} className={"py-4 px-12 mt-10 text-white bg-black "} />
                  </div>
                </Flex>
              </div>
              <div className="relative">
                <Image imgSrc={adsThree} imgAlt={"Image"} />
                <Flex className={"justify-start"}>
                  <div className="absolute top-16 left-10">
                    <Heading as={"h1"} className={"font-DMSans font-bold text-[39px] "} text={"Furniture Offer"} />
                    <Heading2 className={"font-DMSans text-base text-menuColor mt-4"}
                      text={"Up to #50%# sale for all furniture items!"} />
                    <Button btnName={"Shop Now"} className={"py-4 px-12 mt-10 text-white bg-black "} />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Ads Part End */}
    
    </>
  )
}

export default Ads