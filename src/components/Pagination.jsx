import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { AllData } from '../data'
import ProductTxt from './ProductTxt';
import Flex from './Flex';

function Items({ currentItems }) {

    return (
        <>
            <div className="mt-2">
                <Flex className={'flex-wrap'}>
                    {currentItems &&
                        currentItems.map((item) => (
                            <div className='w-[32%] mx-1 mb-5'>
                                <ProductTxt
                                    key={Math.random()}
                                    badgeName={'New'}
                                    imgSrc={item.img}
                                    textOneH={'Add to Wish List'}
                                    textTwoH={'Compare'}
                                    textThreeH={'Add to Cart'}
                                    pHeadingTxt={item.title}
                                    pPrice={item.price}
                                    pColor={item.color}
                                />
                            </div>
                        ))
                    }
                </Flex>
            </div>
        </>
    );
}

const Pagination = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = AllData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(AllData.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % AllData.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="mt-10">
                <Flex className={'justify-between items-center'}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=""
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel=""
                        renderOnZeroPageCount={null}
                        containerClassName='flex gap-x-4'
                        pageLinkClassName="bg-black px-3 py-1 rounded text-white"
                    />
                    <h2>{` Products from ${itemOffset + 1} to ${endOffset < AllData.length ? endOffset : AllData.length} of ${AllData.length}`} </h2>
                </Flex>
            </div>
        </>
    );
}

export default Pagination