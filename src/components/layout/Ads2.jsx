import React from 'react'
import Container from '../../components/Container'
import Image from '../../components/Image'
import adsOne from '../../assets/ads4.png'
import Button from '../../components/Button'
import Heading from '../../components/Heading'
import Heading2 from '../../components/Heading2'

const Ads2 = () => {
  return (
    <>
    {/* Ads Part Start */}
    <div className="pb-20">
        <Container>
            <div className="w-full relative">
              <Image imgSrc={adsOne} imgAlt={"Image"} className={'sm:max-md:h-[200px]'}/>
              <div className="absolute top-14 left-[35%] sm:max-lg:top-2">
                <Heading as={"h1"} className={"font-DMSans font-bold text-[39px]"} text={"Phone of the year"} />
                <Heading2 className={"font-DMSans text-base text-menuColor mt-4 sm:max-lg:mt-0"}
                  text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.."} />
                <Button btnName={"Shop Now "} className={"py-4 px-12 mt-10 text-white bg-black sm:max-lg:mt-2"} />
              </div>
            </div>
        </Container>
      </div>
      {/* Ads Part End */}
    </>
  )
}

export default Ads2