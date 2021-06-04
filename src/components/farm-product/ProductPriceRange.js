import React, { useState } from 'react';
import menu from './menu'
import Range from 'react-range'


const allCatePrice = [... new Set(menu.map((currElemPrice) => {
    return currElemPrice.price;
}))]

console.log(allCatePrice)

const ProductPriceRange = () => {


    const MIN = 0;
    const MAX = 100;
    const [min, setMin] = useState(MIN);
    const [max, setMax] = useState(MAX);
    const [priceFilter, setPriceFilter] = useState([min, max]);

    setMin( items.reduce((m, p) => (p.allCatePrice < m ? p.allCatePrice : m), Infinity));
    setMax(items.reduce((m, p) => (p.allCatePrice > m ? p.allCatePrice : m), -Infinity));

    const [items, setItems] = useState(menu);
    const [catePrices, setCatePrices] = useState(allCatePrice);


    const filterPriceMenu = (price) => {
        const updatedPrice = menu.filter((currElemPrice) => {
            return currElemPrice.price === price;
        });
        setItems(updatedPrice);
    }

    //const [value, setValue] = useState([2,10]);




    //  const rangeSelector = (event, newValue) => {
    //     setValue(newValue);
    //     console.log(newValue)
    //   };
    return (
        <div className="range">
            <Range />

        </div>




    );
}

export default ProductPriceRange;
