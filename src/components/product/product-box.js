import React from 'react';
import { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
export default function ProductBox({setCurrentProductModal,products:{name,description,old_price,new_price,rating,main_image_url,product_url,target_modal,discount,sale_tag,new_sale_tag}}) {

    if(discount!="" || sale_tag!="" || new_sale_tag!=""){
        discount =discount;
        sale_tag =sale_tag;
        new_sale_tag =new_sale_tag;
    }
    
    return (
        <Col lg={3} md={6} sm={6} xs={12} className="mb-6 ec-product-content">
            <div className="ec-product-inner">
                <div className="ec-pro-image-outer">
                    <div className="ec-pro-image">
                        <a href={product_url} className="image">
                            <img className="main-image" src={main_image_url} alt="Product" />
                        </a>
                         
                        <span className="percentage">{discount}</span>
                    
                        {sale_tag !== undefined ? <span className="flags"><span className={sale_tag}>{sale_tag}</span></span> : null}
                        {new_sale_tag!== undefined ? <span className="flags"><span className={new_sale_tag}>{new_sale_tag}</span></span>: null}

                        <a href="#" className="quickview" data-link-action="quickview" title="Quick view" onClick={()=>setCurrentProductModal({name,description,old_price,new_price,rating,main_image_url,product_url,target_modal,discount,sale_tag,new_sale_tag})} data-bs-toggle="modal" data-bs-target={target_modal}>
                            <i className="fi-rr-eye"></i>
                        </a>
                        <div className="ec-pro-actions">
                            <a href="#" className="ec-btn-group compare" title="Compare">
                                <i className="fi fi-rr-arrows-repeat"></i>
                            </a>
                            <Button title="Add To Cart" className="add-to-cart">
                                <i className="fi-rr-shopping-basket"></i> Add To Cart
                            </Button>
                            <a className="ec-btn-group wishlist" title="Wishlist"><i className="fi-rr-heart"></i></a>
                        </div>
                    </div>
                </div>

                <div className="ec-pro-content">
                    <h5 className="ec-pro-title"><a href={product_url}>{name}</a></h5>
                    <div className="ec-pro-rating">
                    {Array.from({ length: rating }, (_, index) => {
                        
                        return (
                            <>
                                <i key={index}  className="ecicon eci-star fill" color={index < rating ? '#ff6262' : '#b2b2b2'} />
                            </>
                        );
                    })}
                        {/* <i className="ecicon eci-star fill"></i>
                        <i className="ecicon eci-star fill"></i>
                        <i className="ecicon eci-star fill"></i>
                        <i className="ecicon eci-star "></i>
                        <i className="ecicon eci-star"></i> */}
                    </div>
                    <span className="ec-price">
                        <span className="old-price">{old_price}</span>
                        <span className="new-price">{new_price}</span>
                    </span>
                </div>
            </div>
        </Col>
    )
}


