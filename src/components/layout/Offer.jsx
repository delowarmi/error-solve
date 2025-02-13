import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import ProductTxt from '../../components/ProductTxt'
import Flex from '../Flex'
import I5 from '../../assets/p5.png'
import I6 from '../../assets/p6.png'
import I7 from '../../assets/p7.png'
import I8 from '../../assets/p8.png'

const Offer = () => {
    return (
        <>
            {/* Seller Part Start */}
            <div className="pb-20">
                <Container>
                    <Heading as={"h1"} className={"font-DMSans capitalize text-[39px] pb-10 leading-9 font-bold"} text={"Our Bestsellers"} />
                    <Flex className={'sm:max-lg:flex-wrap'}>
                        <div className="px-2">
                            <ProductTxt
                                badgeName={'New'}
                                imgSrc={I5}
                                textOneH={'Add to Wish List'}
                                textTwoH={'Compare'}
                                textThreeH={'Add to Cart'}
                                pHeadingTxt={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="px-2">
                            <ProductTxt
                                badgeName={'New'}
                                imgSrc={I6}
                                textOneH={'Add to Wish List'}
                                textTwoH={'Compare'}
                                textThreeH={'Add to Cart'}
                                pHeadingTxt={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="px-2">
                            <ProductTxt
                                badgeName={'New'}
                                imgSrc={I7}
                                textOneH={'Add to Wish List'}
                                textTwoH={'Compare'}
                                textThreeH={'Add to Cart'}
                                pHeadingTxt={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                        <div className="px-2">
                            <ProductTxt
                                badgeName={'New'}
                                imgSrc={I8}
                                textOneH={'Add to Wish List'}
                                textTwoH={'Compare'}
                                textThreeH={'Add to Cart'}
                                pHeadingTxt={'Basic Crew Neck Tee'}
                                pPrice={'$44.00'}
                                pColor={'Black'}
                            />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Seller Part End */}
        </>
    )
}

export default Offer