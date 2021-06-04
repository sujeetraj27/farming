import React from 'react'

const ProductItems = ({proditems}) => {
 
    return (
        <div className="menu-items container-fluid mt-5">
            <div className="row1">
                <div className="col-12 mx-auto">
                    <div className="row col-12 col-md-12 col-sm-3">
                        {proditems.map(({ id, name, image, description, price, quntity, cartegory }) => {
                            return (
                                <div className="Item1 card col-12 col-md-4 col-sm-2 " style={{ width: "25rem" }}>
                                    <div className="Items-inside">
                                        <div className="col-12 col-md-12 col-lg-12 ">
                                            <img src={image} alt="" className=" card-img-top" />
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-12 hole_title ">
                                            <div className="main-title pt-4 pb-6">
                                                <h1>{name}</h1>
                                                <h5>{quntity}</h5>
                                                <p>{description}</p>
                                                <h5>{cartegory}</h5>
                                            </div>
                                            <div className="menu-price-book">
                                                <div className="price-book-devide  judstify-content-between align-item-center center">
                                                    <h2>Price: {price}</h2>
                                                    <a href="#">
                                                        <button className="btn btn-primary"> Order Now</button>
                                                    </a>
                                                </div>
                                                <p className="center">*Price may vary on selected date.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItems
