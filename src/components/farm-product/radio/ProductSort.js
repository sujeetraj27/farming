import React, { useEffect, useState } from 'react';

const ProductSort = ({ prsort, setItems }) => {

    const [sortFilter, setSortFilter] = useState({sort: " "});
    const length = prsort.length;
    let sort, sortProductsList;
    const sortProducts = (event) => {
        sort = event.target.value;
        // console.log(sort)
        // console.log(prsort)
        // console.log(prsort.slice())
       
        sortProductsList = prsort.slice().sort((a, b) => {
            let inta =parseInt(a.price.substring(0, a.price.length))
            let intb =parseInt(b.price.substring(0, b.price.length))
            return (sort === "lowest" ? (inta >intb ? 1 : -1) : (inta < intb ? 1 : -1))
        })
       // console.log("sortProduct", sortProductsList);
        setItems(sortProductsList)
    }

    useEffect(() =>{
        setSortFilter()
    }, [])
    //console.log(setSortFilter)

    return (
        <>
        <div className=" col sort_product">
            <h3>Product Sorting</h3>
        <div className="filter">
            <div className="filter-result"> Product: {length}</div>
            <div className="filter-sort">
                Sort:
                <select className="form-select" value={sortFilter} onChange={sortProducts}>
                    <option value="lowest">Lowest</option>
                    <option value="heighest">Heighest</option>
                </select>
                {""}
            </div>
        </div>
        </div>
        </>
    );
}

export default ProductSort;
