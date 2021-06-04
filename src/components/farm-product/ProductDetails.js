import React, { useEffect, useState } from 'react'
//import menu from './menu'
import ProductCate from './ProductCate'
import ProductItems from './ProductItems'
import PriceRadioFilter from './radio/PriceRadioFilter'
import ProductSort from './radio/ProductSort'

// const allCatValue = [... new Set(menu.map((currElem) => {
//     return currElem.category;
// }))]

const ProductDetails = () => {

    const [items, setItems] = useState(null);
    //const [catItems, setCatItems] = useState(allCatValue);
    const [original, setOriginal] = useState(null)
    //const [sortItems, setSortItems] = useState()

    // console.log("awer", items)


    // const filterMenu = (category) => {
    //     const updatedItems = items.filter((currElem) => {
    //         return currElem.category === category;
    //     });
    //     setItems(updatedItems);
    // }

    //console.log(JSON.stringify(menu))

    useEffect(() => {
        if (items == null) {
            loarData()
        }
    }, [])

    const loarData = async () => {
        const data = await fetch("https://60b64e9017d1dc0017b8785e.mockapi.io/data")
        const r = await data.json()
        setItems(r)
        setOriginal(r)

    }



    return (
        <>
            <h1 className="mt-3 center main-heading">Collections of All Type Catrgories Items</h1>
            <div className="container">
                <div className="row">
                    <div className="col-2 col-md-3 col-sm-6 card price_card">
                        {items && <PriceRadioFilter setItems={setItems} items={original} />}
                        {items && <ProductCate items={items} catItems={setItems} />}
                        {items && <ProductSort prsort={items} setItems={setItems} />}
                    </div>
                    <div className="col-10 col-md-9 col-sm-6">

                        {items && <ProductItems proditems={items} />}
                    </div>
                </div>
            </div>





        </>
    )
}

export default ProductDetails
