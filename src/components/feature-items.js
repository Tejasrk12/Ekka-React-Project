import React from 'react'
import SectionTitle from './section-title'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FeatureItems() {
    return (
        <>
                <Col md={12} className="text-left">
                    <div className="section-title">
                        <SectionTitle bgTitle="Feature Items" MainTitle="Feature Items"/>
                    </div>
                </Col>

                <div className="ec-fre-products">
                    <div className="ec-fs-product">
                        <div className="ec-fs-pro-inner">
                            <Col lg={6} md={6} sm={6} className="ec-fs-pro-image-outer">
                                <div className="ec-fs-pro-image">
                                    <a href="#" className="image"><img className="main-image"
                                        src="assets/images/product-image/1_1.jpg" alt="Product" /></a>
                                    <a href="#" className="quickview" data-link-action="quickview" title="Quick view"
                                        data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><i
                                            className="fi-rr-eye"></i></a>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} className="ec-fs-pro-content">
                                <h5 className="ec-fs-pro-title"><Link to="#">Baby Toy
                                    Teddybear</Link>
                                </h5>
                                <div className="ec-fs-pro-rating">
                                    <span className="ec-fs-rating-icon">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star"></i>
                                    </span>
                                    <span className="ec-fs-rating-text">4 Review</span>
                                </div>
                                <div className="ec-fs-price">
                                    <span className="old-price">$549.00</span>
                                    <span className="new-price">$480.00</span>
                                </div>

                                <div className="countdowntimer"><span id="ec-fs-count-1"></span></div>
                                <div className="ec-fs-pro-desc">Lorem Ipsum is simply dummy text the printing and
                                    typesetting.
                                </div>
                                <div className="ec-fs-pro-book">Total Booking: <span>25</span></div>
                                <div className="ec-fs-pro-btn">
                                    <a href="#" className="btn btn-lg btn-secondary">Remind Me</a>
                                    <a href="#" className="btn btn-lg btn-primary">Book Now</a>
                                </div>
                            </Col>
                        </div>
                    </div>
                    <div className="ec-fs-product">
                        <div className="ec-fs-pro-inner">
                            <Col lg={6} md={6} sm={6} className="ec-fs-pro-image-outer">
                                <div className="ec-fs-pro-image">
                                    <a href="product-left-sidebar.html" className="image"><img className="main-image"
                                        src="assets/images/product-image/3_1.jpg" alt="Product" /></a>
                                    <a href="#" className="quickview" data-link-action="quickview" title="Quick view"
                                        data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><i
                                            className="fi-rr-eye"></i></a>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} className="ec-fs-pro-content">
                                <h5 className="ec-fs-pro-title"><a href="product-left-sidebar.html">Leather Purse For
                                    Women</a>
                                </h5>
                                <div className="ec-fs-pro-rating">
                                    <span className="ec-fs-rating-icon">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                    </span>
                                    <span className="ec-fs-rating-text">4 Review</span>
                                </div>
                                <div className="ec-fs-price">
                                    <span className="old-price">$300.00</span>
                                    <span className="new-price">$250.00</span>
                                </div>

                                <div className="countdowntimer"><span id="ec-fs-count-2"></span></div>
                                <div className="ec-fs-pro-desc">Lorem Ipsum is simply dummy text the printing and
                                    typesetting.
                                </div>
                                <div className="ec-fs-pro-book">Total Booking: <span>25</span></div>
                                <div className="ec-fs-pro-btn">
                                    <a href="#" className="btn btn-lg btn-secondary">Remind Me</a>
                                    <a href="#" className="btn btn-lg btn-primary">Book Now</a>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
        </>
    )
}

