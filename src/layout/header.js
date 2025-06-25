import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SocialButton from '../components/social-button';
import TopHeaderMenu from '../components/top-header-menu';
import HeaderUserIcon from '../components/header-user-icon';
import HeaderWishlist from '../components/header-wishlist';
import HeaderCart from '../components/header-cart';
import HeaderTopMsg from '../components/header-top-msg';
import HeaderLogo from '../components/header-logo';
import HeaderSearch from '../components/header-search';
import HeaderMenuDesk from '../components/header-menu-desk';
import HeaderMenuMob from '../components/header-menu-mob';
import SidebarBestSeller from '../components/sidebar-best-seller';
import SidebarCategory from '../components/sidebar-category';
import { Col, Container, Row } from 'react-bootstrap';
// import SideCartTop from '../components/cart/side-cart-top';
// import SideCartBottom from '../components/cart/side-cart-bottom';

export default function Header() {
    // Social Box //
    const SocialBox = [
        {
            "name": "facebook",
            "link": "/",
            "icon": <><i className="ecicon eci-facebook"></i></>
        },
        {
            "name": "twitter",
            "link": "/",
            "icon": <><i className="ecicon eci-twitter"></i></>
        },
        {
            "name": "instagram",
            "link": "/",
            "icon": <><i className="ecicon eci-instagram"></i></>
        },
        {
            "name": "linkedin",
            "link": "/",
            "icon": <><i className="ecicon eci-linkedin"></i></>
        },
    ]
    // Social Box //

    // Menu //
    const [toggleMenu, setToggleMenu] = useState(null);
    const [toggleMenu1, setToggleMenu1] = useState(null);
    const handleToggleClick1 = () => {
        if (toggleMenu == null) {
            setToggleMenu("ec-open");
        } else {
            setToggleMenu(null);
        }
    }
    const handleToggleClick2 = () => {
        if (toggleMenu1 == null) {
            setToggleMenu1("ec-open");
        } else {
            setToggleMenu1(null);
        }
    }
    return (
        <>
            {/* <!-- Header start  --> */}
            <header className="ec-header">
                {/* <!--Ec Header Top Start --> */}
                <div className="header-top">
                    <Container>
                        <Row className="align-items-center">
                            {/* <!-- Header Top social Start --> */}
                            <Col className="text-left header-top-left d-none d-lg-block">
                                <div className="header-top-social">
                                    <span className="social-text text-upper">Follow us on:</span>
                                    <ul className="mb-0">
                                        <SocialButton social={SocialBox} />
                                    </ul>
                                </div>
                            </Col>
                            {/* <!-- Header Top social End --> */}
                            {/* <!-- Header Top Message Start --> */}
                            <Col className="text-center header-top-center">
                                <div className="header-top-message text-upper">
                                    <HeaderTopMsg text={<><span>Free Shipping</span>This Week Order Over - $75</>} />
                                </div>
                            </Col>
                            {/* <!-- Header Top Message End --> */}
                            {/* <!-- Header Top Language Currency --> */}
                            <Col className="header-top-right d-none d-lg-block">
                                <div className="header-top-lan-curr d-flex justify-content-end">
                                    <TopHeaderMenu />
                                </div>
                            </Col>
                            {/* <!-- Header Top Language Currency --> */}
                            {/* <!-- Header Top responsive Action --> */}
                            <Col className="d-lg-none ">
                                <div className="ec-header-bottons">
                                    {/* <!-- Header User Start --> */}
                                    <div className="ec-header-user dropdown">
                                        <HeaderUserIcon />
                                    </div>
                                    {/* <!-- Header User End --> */}
                                    {/* <!-- Header Cart Start --> */}
                                    <Link to="#" className="ec-header-btn ec-header-wishlist">
                                        <HeaderWishlist />
                                    </Link>
                                    {/* <!-- Header Cart End --> */}
                                    {/* <!-- Header Cart Start --> */}
                                    <Link to="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                        <HeaderCart />
                                    </Link>
                                    {/* <!-- Header Cart End --> */}
                                    <Link to="javascript:void(0)" className="ec-header-btn ec-sidebar-toggle"  onClick={() => handleToggleClick2()}>
                                        <i className="fi fi-rr-apps"></i>
                                    </Link>
                                    {/* <!-- Header menu Start --> */}
                                    <Link to="#ec-mobile-menu" className="ec-header-btn ec-side-toggle d-lg-none" onClick={() => handleToggleClick1()}>
                                        <i className="fi fi-rr-menu-burger"></i>
                                    </Link>
                                    {/* <!-- Header menu End --> */}
                                </div>
                            </Col>
                            {/* <!-- Header Top responsive Action --> */}
                        </Row>
                    </Container>
                </div>
                {/* <!-- Ec Header Top  End --> */}
                {/* <!-- Ec Header Bottom  Start --> */}
                <div className="ec-header-bottom d-none d-lg-block">
                    <Container className="position-relative">
                        <Row>
                            <div className="ec-flex">
                                {/* <!-- Ec Header Logo Start --> */}
                                <div className="align-self-center">
                                    <div className="header-logo">
                                        <HeaderLogo />
                                    </div>
                                </div>
                                {/* <!-- Ec Header Logo End --> */}

                                {/* <!-- Ec Header Search Start --> */}
                                <div className="align-self-center">
                                    <div className="header-search">
                                        <HeaderSearch />
                                    </div>
                                </div>
                                {/* <!-- Ec Header Search End --> */}

                                {/* <!-- Ec Header Button Start --> */}
                                <div className="align-self-center">
                                    <div className="ec-header-bottons">

                                        {/* <!-- Header User Start --> */}
                                        <div className="ec-header-user dropdown">
                                            <HeaderUserIcon />
                                        </div>
                                        {/* <!-- Header User End --> */}
                                        {/* <!-- Header wishlist Start --> */}
                                        <Link to="#" className="ec-header-btn ec-header-wishlist">
                                            <HeaderWishlist />
                                        </Link>
                                        {/* <!-- Header wishlist End --> */}
                                        {/* <!-- Header Cart Start --> */}
                                        <Link href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                            <HeaderCart />
                                        </Link>
                                        {/* <!-- Header Cart End --> */}
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
                {/* <!-- Ec Header Button End --> */}
                {/* <!-- Header responsive Bottom  Start --> */}
                <div className="ec-header-bottom d-lg-none">
                    <Container className="position-relative">
                        <Row>

                            {/* <!-- Ec Header Logo Start --> */}
                            <Col>
                                <div className="header-logo">
                                    <HeaderLogo />
                                </div>
                            </Col>
                            {/* <!-- Ec Header Logo End --> */}
                            {/* <!-- Ec Header Search Start --> */}
                            <Col>
                                <div className="header-search">
                                    <HeaderSearch />
                                </div>
                            </Col>
                            {/* <!-- Ec Header Search End --> */}
                        </Row>
                    </Container>
                </div>
                {/* <!-- Header responsive Bottom  End --> */}
                {/* <!-- EC Main Menu Start --> */}
                <div id="ec-main-menu-desk" className="d-none d-lg-block sticky-nav">
                    <Container className="position-relative">
                        <Row>
                            <Col md={12} className="align-self-center">
                                <div className="ec-main-menu">
                                    <Link to="javascript:void(0)" className="ec-header-btn ec-sidebar-toggle" onClick={() => handleToggleClick2()}>
                                        <i className="fi fi-rr-apps"></i>
                                    </Link>
                                    <ul>
                                        <HeaderMenuDesk />
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                 {/* <!-- ekka Cart Start --> */}
                 {/* <div className="ec-side-cart-overlay"></div>
                <div id="ec-side-cart" className="ec-side-cart">
                    <div className="ec-cart-inner">
                        <div className="ec-cart-top">
                            <SideCartTop />
                        </div>
                        <div className="ec-cart-bottom">
                            <SideCartBottom />
                        </div>
                    </div>
                </div> */}
                {/* <!-- ekka Cart End --> */}

                {/* <!-- Category Sidebar start --> */}
                <div className="ec-side-cat-overlay"></div>
                <Col  lg={3} className={`category-sidebar fadeIn ${toggleMenu1}`} data-animation="fadeIn">
                    <div className="cat-sidebar">
                        <div className="cat-sidebar-box">
                            <SidebarCategory handleToggleClick={handleToggleClick2} />
                        </div>
                        <div className="ec-sidebar-slider-cat">
                            <div className="ec-sb-slider-title">Best Sellers</div>
                            <SidebarBestSeller handleToggleClick={handleToggleClick2} />
                        </div>
                    </div>
                </Col>
                {/* <!-- Category Sidebar end --> */}
                {/* <!-- Ec Main Menu End --> */}
                {/* <!-- ekka Mobile Menu Start --> */}
                <HeaderMenuMob toggleMenu={toggleMenu} handleToggleClick1={handleToggleClick1} />
                {/* <!-- ekka mobile Menu End --> */}
               
            </header>
            {/* <!-- Header End  --> */}

        </>
    )
}
