import React from 'react'
import Heading from '../../Heading'
import Flex from '../../Flex'
import Pagination from '../../Pagination'
import { AiOutlineBars } from "react-icons/ai";
import { FaCubesStacked } from "react-icons/fa6";
import Button from '../../layout/shopSidebar/Button';

const Sidebar = ({ handleClick, result }) => {
    return (
        <Flex>
            <div className="w-[20%]">
                <div className="pb-10" >
                    <Heading as={"h3"} className={"font-DMSans text-2xl font-bold"} text={'Shop by Category'} />

                    <div className="text-menuColor mt-3">
                        <Button onClickHandler={handleClick} value="Category 1" title="Category 1" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Category 2" title="Category 2" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Category 3" title="Category 3" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Category 4" title="Category 4" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Category 5" title="Category 5" className={'py-5 border-b-2'} />
                    </div>
                </div>

                <div className="pb-10">
                    <Heading as={"h3"} className={"font-DMSans text-2xl font-bold"} text={'Shop by Color'} />
                    <ul className="text-menuColor mt-3">
                        <li className='py-5 border-b-2'>
                            <Flex className={' items-center'}>
                                <div className='w-3 h-3 rounded-full bg-orange-600 mr-3'></div>
                                <Button onClickHandler={handleClick} value="Orange" title="Orange" />
                            </Flex>
                        </li>
                        <li className='py-5 border-b-2'>
                            <Flex className={' items-center'}>
                                <div className='w-3 h-3 rounded-full bg-lime-800 mr-3'></div>
                                <Button onClickHandler={handleClick} value="Lime" title="Lime" />
                            </Flex>
                        </li>
                        <li className='py-5 border-b-2'>
                            <Flex className={' items-center'}>
                                <div className='w-3 h-3 rounded-full bg-blue-800 mr-3'></div>
                                <Button onClickHandler={handleClick} value="Blue" title="Blue" />
                            </Flex>
                        </li>
                        <li className='py-5 border-b-2'>
                            <Flex className={' items-center'}>
                                <div className='w-3 h-3 rounded-full bg-yellow-600 mr-3'></div>
                                <Button onClickHandler={handleClick} value="Yellow" title="Yellow" />
                            </Flex>
                        </li>
                        <li className='py-5 border-b-2'>
                            <Flex className={' items-center'}>
                                <div className='w-3 h-3 rounded-full bg-teal-950 mr-3'></div>
                                <Button onClickHandler={handleClick} value="Teal" title="Teal" />
                            </Flex>
                        </li>
                    </ul>
                </div>

                <div className="pb-10">
                    <Heading as={"h3"} className={"font-DMSans text-2xl font-bold"} text={'Shop by Brand'} />

                    <div className="text-menuColor mt-3">
                        <Button onClickHandler={handleClick} value="One" title="One" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Two" title="Two" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Three" title="Three" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Four" title="Four" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value="Five" title="Five" className={'py-5 border-b-2'} />
                    </div>
                </div>

                <div className="pb-10">
                    <Heading as={"h3"} className={"font-DMSans text-2xl font-bold"} text={'Shop by Price'} />

                    <div className="text-menuColor mt-3">
                        <Button onClickHandler={handleClick} value='$9,00' title="$0.00 - $9.99" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value='$14,00' title="$10.00 - $19.99" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value='$20,00' title="$20.00 - $29.99" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value='$30,00' title="$30.00 - $39.99" className={'py-5 border-b-2'} />
                        <Button onClickHandler={handleClick} value='$40,00' title="$40.00 - $69.99" className={'py-5 border-b-2'} />
                    </div>
                </div>
            </div>
            <div className="w-[80%] ml-10">
                <Flex className={'justify-between items-center mb-16'}>
                    <div className="">
                        <Flex>
                            <div className='border-black bg-black px-3 py-2 text-white mr-5'><FaCubesStacked /></div>
                            <div className="border-2 bg-slate-200 px-3 py-2"><AiOutlineBars /></div>
                        </Flex>
                    </div>
                    <div className="">
                        <Flex>
                            <label className={"font-DMSans text-[16px] font-normal text-menuColor mr-10"}>
                                Sort by:
                                <select name="featured" className='pr-20 pl-3 ml-5 py-2 border focus:outline-none border-menuColor'>
                                    <option value="Featured">Featured</option>
                                    <option value="Featured">Featured</option>
                                    <option value="Featured">Featured</option>
                                </select>
                            </label>
                            <label className={"font-DMSans text-[16px] font-normal text-menuColor"}>
                                Show:
                                <select name="number" className='pr-20 pl-3 ml-5 py-2 border focus:outline-none border-menuColor'>
                                    <option value="36">36</option>
                                    <option value="56">56</option>
                                    <option value="70">70</option>
                                </select>
                            </label>
                        </Flex>
                    </div>
                </Flex>

                <div className="flex flex-wrap gap-x-1 gap-y-5 mb-28 border-b-8 border-b-amber-700-0">
                    {result}
                </div>


                <Pagination itemsPerPage={12} />
            </div>
        </Flex>
    )
}

export default Sidebar