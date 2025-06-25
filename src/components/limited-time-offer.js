import React from 'react'

export default function LimitedTimeOffer() {
    return (
        <>
            <div className="col-md-12 text-left">
                <div className="section-title">
                    <h2 className="ec-bg-title">Limited Time Offer</h2>
                    <h2 className="ec-title">Limited Time Offer</h2>
                </div>
            </div>

            <div className="ec-spe-products">
                <div className="ec-fs-product">
                    <div className="ec-fs-pro-inner">
                        <div className="ec-fs-pro-image-outer col-lg-6 col-md-6 col-sm-6">
                            <div className="ec-fs-pro-image">
                                <a href="product-left-sidebar.html" className="image"><img className="main-image"
                                    src="assets/images/product-image/8_1.jpg" alt="Product" /></a>
                                <a href="#" className="quickview" data-link-action="quickview" title="Quick view"
                                    data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><i
                                        className="fi-rr-eye"></i></a>
                            </div>
                        </div>
                        <div className="ec-fs-pro-content col-lg-6 col-md-6 col-sm-6">
                            <h5 className="ec-fs-pro-title"><a href="product-left-sidebar.html">Smart watch
                                Firebolt</a>
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
                                <span className="old-price">$200.00</span>
                                <span className="new-price">$180.00</span>
                            </div>
                            <div className="countdowntimer"><span id="ec-fs-count-3"></span></div>
                            <div className="ec-fs-pro-desc">Lorem Ipsum is simply dummy text the printing and
                                typesetting.
                            </div>
                            <div className="ec-fs-pro-book">Total Booking: <span>25</span></div>
                            <div className="ec-fs-pro-btn">
                                <a href="#" className="btn btn-lg btn-secondary">Remind Me</a>
                                <a href="#" className="btn btn-lg btn-primary">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ec-fs-product">
                    <div className="ec-fs-pro-inner">
                        <div className="ec-fs-pro-image-outer col-lg-6 col-md-6 col-sm-6">
                            <div className="ec-fs-pro-image">
                                <a href="product-left-sidebar.html" className="image"><img className="main-image"
                                    src="assets/images/product-image/10_1.jpg" alt="Product" /></a>
                                <a href="#" className="quickview" data-link-action="quickview" title="Quick view"
                                    data-bs-toggle="modal" data-bs-target="#ec_quickview_modal"><i
                                        className="fi-rr-eye"></i></a>
                            </div>
                        </div>
                        <div className="ec-fs-pro-content col-lg-6 col-md-6 col-sm-6">
                            <h5 className="ec-fs-pro-title"><a href="product-left-sidebar.html">Casual Shoes Men</a>
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
                                <span className="old-price">$120.00</span>
                                <span className="new-price">$95.00</span>
                            </div>

                            <div className="countdowntimer"><span id="ec-fs-count-4"></span></div>
                            <div className="ec-fs-pro-desc">Lorem Ipsum is simply dummy text the printing and
                                typesetting.
                            </div>
                            <div className="ec-fs-pro-book">Total Booking: <span>25</span></div>
                            <div className="ec-fs-pro-btn">
                                <a href="#" className="btn btn-lg btn-secondary">Remind Me</a>
                                <a href="#" className="btn btn-lg btn-primary">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

