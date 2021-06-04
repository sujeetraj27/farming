import React, { Component, useEffect, useState } from 'react';


const PriceRadioFilter = ({ setItems, items }) => {

    //console.log(items)

    const MIN = 300;
    const MAX = 500;

    const [min, setMin] = useState(MIN);
    const [max, setMax] = useState(MAX);
    const [priceFilter, setPriceFilter] = useState([min, max]);

    const pricehandler = (e) => {
        //console.log(price)
        let minValuev = parseInt(e.target.attributes.min.value);
        let maxValuev = parseInt(e.target.attributes.max.value);
        const updatedItems = items.filter((elemPrice) => {
            let p = parseInt(elemPrice.price.substring(0, elemPrice.price.length))
            return minValuev < p && p <= maxValuev;
        });
        setItems(updatedItems)
    }

    useEffect(() => {
        setPriceFilter();
    }, [])

    return (
        <>
            <div className="container price-radio_btn ">
                <h3 >Price</h3>
                <label className="col-12">
                    <input name="group1" type="radio"
                        values={priceFilter}
                        min={Number.MIN_SAFE_INTEGER}
                        max={Number.MAX_SAFE_INTEGER}
                        onClick={pricehandler}
                    />
                    <span>All</span>
                </label>

                <label className="col-12">
                    <input name="group1" type="radio"
                        values={priceFilter}
                        min={300}
                        max={600}
                        onClick={pricehandler}
                    />
                    <span>300₹ - 600₹</span>
                </label>
                <label className="col-12">
                    <input name="group1" type="radio"
                        values={priceFilter}
                        min={600}
                        max={1000}
                        onClick={pricehandler}
                    />
                    <span>600₹ - 1000₹</span>
                </label>
                <label className="col-12">
                    <input name="group1" type="radio"
                        values={priceFilter}
                        min={1000}
                        max={1500}
                        onClick={pricehandler}
                    />
                    <span>1000₹ - 1500₹</span>
                </label>
                <label className="col-12">
                    <input name="group1" type="radio"
                        values={priceFilter}
                        min={1500}
                        max={2000}
                        onClick={pricehandler}
                    />
                    <span>1500₹ - 2000₹</span>
                </label>
                <label className="col-12">
                    <input name="group1" type="radio"
                        values={priceFilter}
                        min={2000}
                        max={3000}
                        onClick={pricehandler}
                    />
                    <span>2000₹ - 3000₹</span>
                </label>
            </div>
        </>
    );
}

export default PriceRadioFilter;




