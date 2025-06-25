import React, { useState, useEffect } from 'react'
import ProductBox from './product/product-box';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData } from '../redux/productSlice';
import ProductJson from '../product.json';
import ShowAllLink from './show-all-link';
import { Row } from 'react-bootstrap';


export default function OurTopCollection({setCurrentProductModal}) {
    const [rating, setRating] = useState(4)
    const [products, setProducts] = useState();
    useEffect(() => {
        const res = fetch(ProductJson)
            .then(res => res.json())
            .then((data) => setProducts(data))
        setProducts(ProductJson.products);
    })

    // const product = useSelector(data => data.product.ProductData);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchProductData());
    // },[dispatch])
    
    return (
        <>
            {/* <!-- Product tab Area Start --> */}
            {/* <!-- 1st Product tab start --> */}
            <div className="tab-pane fade show active" id="tab-pro-for-all">
                <Row>
                    {/* <!-- Product Content --> */}
                    {
                        products && products.map((d, i) => {
                            // const i = 4;
                            if (i <= 10) {
                                return (
                                    <ProductBox setCurrentProductModal={setCurrentProductModal} products={d} />
                                );
                            }
                        })
                    }
                    {/* <!-- Product Content --> */}

                    <ShowAllLink link={"#"} name={"Shop All Collection"}/>
                </Row>
            </div>
            {/* <!-- ec 1st Product tab end --> */}
            {/* <!-- ec 2nd Product tab start --> */}
            <div className="tab-pane fade" id="tab-pro-for-men">
                <Row>
                    {/* <!-- Product Content --> */}
                    {
                        products && products.map((d, i) => {
                            if (i <= 6) {
                                return (
                                    <ProductBox products={d} />
                                );
                            }
                        })
                    }
                    {/* <!-- Product Content --> */}

                    <ShowAllLink link={"#"} name={"Shop All Collection"}/>
                </Row>
            </div>
            {/* <!-- ec 2nd Product tab end --> */}
            {/* <!-- ec 3rd Product tab start --> */}
            <div className="tab-pane fade" id="tab-pro-for-women">
                <Row>
                    {/* <!-- Product Content --> */}
                    {
                        products && products.map((d, i) => {
                            if (i <= 6) {
                                return (
                                    <ProductBox products={d} />
                                );
                            }
                        })
                    }
                    {/* <!-- Product Content --> */}

                    <ShowAllLink link={"#"} name={"Shop All Collection"}/>
                </Row>
            </div>
            {/* <!-- ec 3rd Product tab end --> */}
            {/* <!-- ec 4th Product tab start --> */}
            <div className="tab-pane fade" id="tab-pro-for-child">
                <Row>
                    {/* <!-- Product Content --> */}
                    {
                        products && products.map((d, i) => {
                            if (i <= 3) {
                                return (
                                    <ProductBox products={d} />
                                );
                            }
                        })
                    }
                    {/* <!-- Product Content --> */}

                    <ShowAllLink link={"#"} name={"Shop All Collection"}/>
                </Row>
            </div>
            {/* <!-- ec 4th Product tab end --> */}
            {/* <!-- ec Product tab Area End --> */}
        </>
    )
}
