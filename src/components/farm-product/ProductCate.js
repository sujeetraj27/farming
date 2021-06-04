import React from 'react'

const ProductCate = ({ items, catItems }) => {

    //console.log(items)

    const allCatValue = [... new Set(items.map((currElem) => {
        return currElem.category;
    }))]

    const filterMenu = (category) => {
        const updatedItems = items.filter((currElem) => {
            return currElem.category === category;
        });
        catItems(updatedItems);
    }

    return (

        <>
            <div className="col category">
                <h3>categories</h3>
                <div className="menu-tab ">
                    {
                        allCatValue.map((curClem) => {
                            
                            return <button className="btn btn-light" onClick={() => filterMenu(curClem)}>{curClem}</button>

                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductCate
