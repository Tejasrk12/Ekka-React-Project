import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import OurTopCollection from '../components/our-top-collection';
import BannerSlider from '../components/banner-slider';
import TopCategories from '../components/top-categories';
import BannerBlock from '../components/banner-block';
import FeatureItems from '../components/feature-items';
import LimitedTimeOffer from '../components/limited-time-offer';
import TopVendor from '../components/top-vendor';
import ServicesBox from '../components/services-box';
import OfferSection from '../components/offer-section';
import NewArrivals from '../components/new-arrivals';
import Testimonials from '../components/testimonials';
import BrandItem from '../components/brand-item';
import InstagramFeed from '../components/instagram-feed';
import PopupNews from '../components/popup-news';
import RecentPurchase from '../components/recent-purchase';
import WhatsappNeedHelp from '../components/whatsapp-need-help';
import ResponsiveFooterMenu from '../components/responsive-footer-menu';
import Loader from '../components/loader';
import ProductQuickReviewModal from '../components/product/product-quick-review-modal';
import OurTopCollectionFilter from '../components/our-top-collection-filter';
import SectionTitle from '../components/section-title'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function usePageTitle(title){
    useEffect(()=>{
        document.title = title;
    },[title])
}

export default function Home() {
    usePageTitle("Home - Ekka");
    const [currentProductModal, setCurrentProductModal] = useState({});
    return (
        <>
            <div id="ec-overlay">
                <Loader />
            </div>

            {/* <!-- Main Slider Start --> */}
            <div className="sticky-header-next-sec ec-main-slider section section-space-pb">
                <BannerSlider />
            </div>
            {/* <!-- Main Slider End --> */}

            <section className="section ec-product-tab section-space-p" id="collection">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="section-title">
                                <SectionTitle>
                                    <h2 className="ec-bg-title">Our Top Collection</h2>
                                    <h2 className="ec-title">Our Top Collection</h2>
                                    <p className="sub-title">Browse The Collection of Top Products</p>
                                </SectionTitle>
                            </div>
                        </Col>

                        {/* <!-- Tab Start --> */}
                        <Col md={12} className="text-center">
                            <ul className="ec-pro-tab-nav nav justify-content-center">
                                <OurTopCollectionFilter />
                            </ul>
                        </Col>
                        {/* <!-- Tab End --> */}
                    </Row>
                    <Row>
                        <Col>
                            <div className="tab-content">
                                <OurTopCollection setCurrentProductModal={setCurrentProductModal} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* <!-- ec Banner Section Start --> */}
            <section className="ec-banner section section-space-p ">
                <Container>
                    {/* <!-- ec Banners Start --> */}
                    <div className="ec-banner-inner">
                        {/* <!--ec Banner Start --> */}
                        <div className="ec-banner-block ec-banner-block-2">
                            <Row>
                                <BannerBlock />
                            </Row>
                            {/* <!-- ec Banner End --> */}
                        </div>
                        {/* <!-- ec Banners End --> */}
                    </div>
                </Container>
            </section>
            {/* <!-- ec Banner Section End --> */}

            {/* <!--  Category Section Start --> */}
            <section className="section ec-category-section section-space-p" id="categories">
                <TopCategories />
            </section>
            {/* <!-- Category Section End --> */}

            {/* <!--  Feature & Special Section Start --> */}
            <section className="section ec-fre-spe-section section-space-p d-none" id="offers">
                <Container>
                    <Row>
                        {/* <!--  Feature Section Start --> */}
                        <Col lg={6} md={6} sm={6} className="ec-fre-section margin-b-30" data-animation="slideInRight">
                            <FeatureItems />
                        </Col>
                        {/* <!--  Feature Section End --> */}

                        {/* <!--  Special Section Start --> */}
                        <Col lg={6} md={6} sm={6} className="ec-spe-section" data-animation="slideInLeft">
                            <LimitedTimeOffer />
                        </Col>
                        {/* <!--  Special Section End --> */}
                    </Row>
                </Container>
            </section>
            {/* <!-- Feature & Special Section End --> */}

            {/* <!--  Top Vendor Section Start --> */}
            <section className="section section-space-p" id="vendors">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="section-title">
                                <SectionTitle>
                                    <h2 className="ec-bg-title">Top Vendor</h2>
                                    <h2 className="ec-title">Top Vendor</h2>
                                    <p className="sub-title">Browse the value <Link to="#" >All Vendors.</Link></p>
                                </SectionTitle>
                            </div>
                        </Col>
                    </Row>
                    <Row className="margin-minus-t-15 margin-minus-b-15">
                        <TopVendor />
                    </Row>
                </Container>
            </section>
            {/* <!--  Top Vendor Section End --> */}

            {/* <!--  services Section Start --> */}
            <section className="section ec-services-section section-space-p" id="services">
                <h2 className="d-none">Services</h2>
                <Container>
                    <Row>
                        <ServicesBox />
                    </Row>
                </Container>
            </section>
            {/* <!--services Section End --> */}

            {/* <!--  offer Section Start --> */}
            <section className="section ec-offer-section section-space-p section-space-m">
                <SectionTitle>
                    <h2 className="d-none">Offer</h2>
                </SectionTitle>
                <Container>
                    <Row className="justify-content-end">
                        <Col xl={6} lg={7} md={7} sm={7} className="align-self-center ec-offer-content">
                            <OfferSection />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <!-- offer Section End --> */}

            {/* <!-- New Product Start --> */}
            <section className="section ec-new-product section-space-p" id="arrivals">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="section-title">
                                <SectionTitle>
                                    <h2 className="ec-bg-title">New Arrivals</h2>
                                    <h2 className="ec-title">New Arrivals</h2>
                                    <p className="sub-title">Browse The Collection of Top Products</p>
                                </SectionTitle>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {/* <!-- New Product Content --> */}
                        <NewArrivals setCurrentProductModal={setCurrentProductModal} />
                    </Row>
                </Container>
            </section>
            {/* <!-- New Product end --> */}

            {/* <!-- ec testmonial Start --> */}
            <section className="section ec-test-section section-space-ptb-100 section-space-m" id="reviews">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="section-title">
                                <SectionTitle>
                                    <h2 className="ec-bg-title">Testimonial</h2>
                                    <h2 className="ec-title">Client Review</h2>
                                    <p className="sub-title mb-3">What say client about us</p>
                                </SectionTitle>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="ec-test-outer">
                            <ul id="ec-testimonial-slider">
                                <Testimonials />
                            </ul>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <!-- ec testmonial end --> */}

            {/* <!-- Ec Brand Section Start --> */}
            <section className="section ec-brand-area section-space-p">
                <SectionTitle>
                    <h2 className="d-none">Brand</h2>
                </SectionTitle>
                <Container>
                    <Row>
                        <div className="ec-brand-outer">
                            <li id="ec-brand-slider">
                                <BrandItem />
                            </li>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <!-- Ec Brand Section End --> */}

            {/* <!-- Ec Instagram Start --> */}
            <section className="section ec-instagram-section module section-space-p" id="insta">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="section-title">
                                <SectionTitle>
                                    <h2 className="ec-bg-title">Instagram Feed</h2>
                                    <h2 className="ec-title">Instagram Feed</h2>
                                    <p className="sub-title">Share your store with us</p>
                                </SectionTitle>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="ec-insta-wrapper">
                    <div className="ec-insta-outer">
                        <Container>
                            <div className="">
                                <InstagramFeed />
                            </div>
                        </Container>
                    </div>
                </div>
            </section>
            {/* <!-- Ec Instagram End --> */}


            {/* <!-- Modal --> */}
            <div className="modal fade" id="ec_quickview_modal" tabindex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="row">
                                <ProductQuickReviewModal product={currentProductModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal end --> */}

            {/* <!-- Newsletter Modal Start --> */}
            <div id="ec-popnews-bg"></div>
            <div id="ec-popnews-box">
                <PopupNews />
            </div>
            {/* <!-- Newsletter Modal end --> */}

            {/* <!-- Footer navigation panel for responsive display --> */}
            <div className="ec-nav-toolbar">
                <Container>
                    <div className="ec-nav-panel">
                        <ResponsiveFooterMenu />
                    </div>
                </Container>
            </div>
            {/* <!-- Footer navigation panel for responsive display end --> */}

            {/* <!-- Recent Purchase Popup  --> */}

            <RecentPurchase />

            {/* <!-- Recent Purchase Popup end --> */}

            {/* <!-- Cart Floating Button --> */}
            <div className="ec-cart-float">
                <a href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                    <div className="header-icon"><i className="fi-rr-shopping-basket"></i>
                    </div>
                    <span className="ec-cart-count cart-count-lable">3</span>
                </a>
            </div>
            {/* <!-- Cart Floating Button end --> */}

            {/* <!-- Whatsapp --> */}
            <div className="ec-style ec-right-bottom">
                {/* <!-- Start Floating Panel Container --> */}
                <div className="ec-panel">
                    {/* <!-- Panel Header --> */}
                    <div className="ec-header">
                        <strong>Need Help?</strong>
                        <p>Chat with us on WhatsApp</p>
                    </div>
                    {/* <!-- Panel Content --> */}
                    <div className="ec-body">
                        <ul>
                            <WhatsappNeedHelp />
                        </ul>
                    </div>
                </div>
                {/* <!--/ End Floating Panel Container --> */}
                {/* <!-- Start Right Floating Button--> */}
                <div className="ec-right-bottom">
                    <div className="ec-box">
                        <div className="ec-button rotateBackward">
                            <img className="whatsapp" src="assets/images/common/whatsapp.png" alt="whatsapp icon" />
                        </div>
                    </div>
                </div>
                {/* <!--/ End Right Floating Button--> */}
            </div>
            {/* <!-- Whatsapp end --> */}

            {/* <!-- Feature tools --> */}
            {/* <SidebarTool /> */}
            {/* <!-- Feature tools end --> */}


        </>
    )
}
