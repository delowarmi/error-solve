import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Heading from '../../components/Heading'
import { FaTruck, FaUndo } from "react-icons/fa";
import { TbNumber2 } from "react-icons/tb";

const Information = () => {
  return (
    <>
    {/* Information Part Start */}
    <div className="bg-white py-8 border-b border-gray-200">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="w-[30%]">
              <Flex className={"items-center"}>
                <TbNumber2 className='pr-2 text-3xl' />
                <Heading as={"h4"} className={"font-DMSans text-[16px] text-menuColor"} text={"Two years warranty"} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={"items-center justify-center"}>
                <FaTruck className='pr-2 text-3xl' />
                <Heading as={"h4"} className={"font-DMSans text-[16px] text-menuColor"} text={"Two years warranty"} />
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={"items-center justify-end"}>
                <FaUndo className='pr-2 text-3xl' />
                <Heading as={"h4"} className={"font-DMSans text-[16px] text-menuColor"} text={"Two years warranty"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Information Part End */}
    </>
  )
}

export default Information