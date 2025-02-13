import React from 'react'
import Flex from './Flex'
import Heading from './Heading'
import { FaHeart, FaCodeCompare, FaCartShopping } from "react-icons/fa6";
import Badge from './Badge';
import Image from './Image';
import { Link } from 'react-router-dom';
import Button from './Button';

const ProductTxt = ({ badgeName, imgSrc, textOneH, textTwoH, textThreeH, pHeadingTxt, pPrice, pColor }) => {
    return (
        <>
            <div className="group">
                <div className="relative">
                    <Badge badgeName={badgeName} className={"absolute top-5 left-5"} />
                    <Image imgSrc={imgSrc} imgAlt={"Image"} />

                    <div className="absolute bottom-0 left-0 right-0 bg-white p-5 invisible group-hover:visible">
                        <Flex className={"justify-end gap-x-3 items-center pb-2"}>
                            <Link to={"/"}>
                                <Heading as={"h3"} className={"font-DMSans text-[16px] text-menuColor hover:font-bold"} text={textOneH} />
                            </Link>
                            <FaHeart />
                        </Flex>
                        <Flex className={"justify-end gap-x-3 items-center pb-2"}>
                            <Link to={"/"}>
                                <Heading as={"h3"} className={"font-DMSans text-[16px] text-menuColor hover:font-bold"} text={textTwoH} />
                            </Link>
                            <FaCodeCompare />
                        </Flex>
                        <Flex className={"justify-end gap-x-3 items-center"}>
                            <Link to={"/"}>
                                <Heading as={"h3"} className={"font-DMSans text-[16px] text-menuColor hover:font-bold"} text={textThreeH} />
                            </Link>
                            <Button />
                            <FaCartShopping />
                        </Flex>
                    </div>
                </div>
                <div className="py-3">
                    <Flex className={"justify-between"}>
                        <Link to={"/shop"}>
                            <Heading as={"h2"} className={"font-DMSans font-bold text-[20px]"} text={pHeadingTxt} />
                        </Link>
                        <Heading as={"h4"} className={"font-DMSans text-menuColor text-[16px]"} text={pPrice} />
                    </Flex>
                    <Heading as={"h4"} className={"font-DMSans text-menuColor text-[16px] mt-3"} text={pColor} />
                </div>
            </div>

        </>
    )
}

export default ProductTxt