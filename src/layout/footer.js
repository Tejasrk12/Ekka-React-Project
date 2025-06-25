import React from 'react';
import SocialButton from '../components/social-button';
import FooterOffer from '../footer/footer-offer';
import FooterAboutWidget from '../footer/footer-about-widget';
import FooterMenuBox from '../footer/footer-menu-box';
import FooterNewsletterBox from '../footer/footer-newsletter-box';
import FooterBottomCopy from '../footer/footer-bottom-copy';
import FooterImg from '../footer/footer-img';
import { Container, Col, Row } from 'react-bootstrap';


// import { Link } from 'react-router-dom';

function Footer() {
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
    const FooterMenu1 = {
        Title: "Information",
        MenuLink:[
            {
                name:"About Us",
                link:"#",
            },
            {
                name:"FAQ",
                link:"#",
            },
            {
                name:"Delivery Information",
                link:"#",
            },
            {
                name:"Contact us",
                link:"#",
            },
        ]
    }
    const FooterMenu2 = {
        Title: "Account",
        MenuLink:[
            {
                name:"My Account",
                link:"#",
            },
            {
                name:"Order History",
                link:"#",
            },
            {
                name:"Wish List",
                link:"#",
            },
            {
                name:"Specials",
                link:"#",
            },
        ]
    }
    const FooterMenu3 = {
        Title: "Services",
        MenuLink:[
            {
                name:"Discount Returns",
                link:"#",
            },
            {
                name:"Policy & policy ",
                link:"#",
            },
            {
                name:"Customer Service",
                link:"#",
            },
            {
                name:"Term & condition",
                link:"#",
            },
        ]
    }
    return (
        <>
            {/* <!-- Footer Start --> */}
            <footer className="ec-footer section-space-mt">
                <div className="footer-container">
                    <div className="footer-offer">
                        <Container>
                            <Row>
                                <FooterOffer/>
                            </Row>
                        </Container>
                    </div>
                    <div className="footer-top section-space-footer-p">
                        <Container>
                            <Row>
                                <Col sm={12} lg={3} className="ec-footer-contact">
                                    <FooterAboutWidget/>
                                </Col>
                                <Col sm={12} lg={2} className="ec-footer-info">
                                    <div className="ec-footer-widget">
                                        <FooterMenuBox menu={FooterMenu1}/>
                                    </div>
                                </Col>
                                <Col sm={12} lg={2} className="ec-footer-account">
                                    <div className="ec-footer-widget">
                                        <FooterMenuBox menu={FooterMenu2}/>
                                    </div>
                                </Col>
                                <Col sm={12} lg={2} className="ec-footer-service">
                                    <div className="ec-footer-widget">
                                        <FooterMenuBox menu={FooterMenu3}/>
                                    </div>
                                </Col>
                                <Col sm={12} lg={3}  className="ec-footer-news">
                                    <div className="ec-footer-widget">
                                        <FooterNewsletterBox/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="footer-bottom">
                        <Container>
                            <Row className="align-items-center">
                                {/* <!-- Footer social Start --> */}
                                <Col className="text-left footer-bottom-left">
                                    <div className="footer-bottom-social">
                                        <span className="social-text text-upper">Follow us on:</span>
                                        <ul className="mb-0">
                                            <SocialButton social={SocialBox} />
                                        </ul>
                                    </div>
                                </Col>
                                {/* <!-- Footer social End --> */}
                                {/* <!-- Footer Copyright Start --> */}
                                <Col className="text-center footer-copy">
                                    <div className="footer-bottom-copy ">
                                        <FooterBottomCopy/>
                                    </div>
                                </Col>
                                {/* <!-- Footer Copyright End --> */}
                                {/* <!-- Footer payment --> */}
                                <Col className="footer-bottom-right">
                                    <div className="footer-bottom-payment d-flex justify-content-end">
                                        <FooterImg/>
                                    </div>
                                </Col>
                                {/* <!-- Footer payment --> */}
                            </Row>
                        </Container>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer Area End --> */}
        </>
    )
}

export default Footer
