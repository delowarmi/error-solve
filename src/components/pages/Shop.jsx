import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Breadcrumbs from '../layout/Breadcrumbs'
import { useState } from 'react'
import ProductTxt from '../ProductTxt'
import { AllData } from '../../data'
import Sidebar from '../layout/shopSidebar/Sidebar'

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // ------------ Filtering -----------
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(AllData, selected) {
        let filteredProducts = AllData;

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, brands, price, title }) =>
                    category === selected ||
                    color === selected ||
                    brands === selected ||
                    price === selected ||
                    title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, price, color }) => (
                <ProductTxt
                    key={Math.random()}
                    badgeName={'New'}
                    imgSrc={img}
                    textOneH={'Add to Wish List'}
                    textTwoH={'Compare'}
                    textThreeH={'Add to Cart'}
                    pHeadingTxt={title}
                    pPrice={price}
                    pColor={color}
                />
            )
        );
    }


const result = filteredData(AllData, selectedCategory);


return (
    <div>
        <div className="pb-20 relative overflow-hidden">
            <Container>
                <div className="w-full my-20">
                    <Heading as={"h1"} className={"font-DMSans text-[49px] font-bold"} text={'Products'} />
                    <Breadcrumbs />
                </div>
                <Sidebar handleClick={handleClick} result={result}/>
            </Container>
        </div>
    </div>
)
}

export default Shop