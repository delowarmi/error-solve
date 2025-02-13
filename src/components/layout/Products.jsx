import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import ProductTxt from '../../components/ProductTxt'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from '../../components/NextArrow'
import PrevArrow from '../../components/PrevArrow'
import { AllData } from '../../data'

const Products = () => {

  var settingss = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {/* Product Part Start */}
      <div className="py-20">
        <Container>
          <Heading as={"h1"} className={"font-DMSans capitalize text-[39px] pb-10 leading-9 font-bold"} text={"new arrival"} />
          <Slider {...settingss}>
            {AllData.map((item) => {
              return (
                <>
                  <ProductTxt
                    badgeName={'New'}
                    imgSrc={item.img}
                    textOneH={'Add to Wish List'}
                    textTwoH={'Compare'}
                    textThreeH={'Add to Cart'}
                    pHeadingTxt={'Basic Crew Neck Tee'}
                    pPrice={'$44.00'}
                    pColor={'Black'}
                  />
                </>
              )
            })}
          </Slider>
        </Container>
      </div>
      {/* Product Part End */}

    </>
  )
}

export default Products