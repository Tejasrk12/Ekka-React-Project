import React, { useState } from 'react'
import { Col } from 'react-bootstrap';


export default function ServicesBox() {
    const [ServiceData] = useState([
        {
            ServiceName: 'Free Shipping',
            ServiceDesc: 'Free shipping on all US order or order above $200',
            ServiceIcon: "fi fi-ts-truck-moving",
        },
        {
            ServiceName: '24X7 Support',
            ServiceDesc: 'Contact us 24 hours a day, 7 days a week',
            ServiceIcon: "fi fi-ts-hand-holding-seeding",
        },
        {
            ServiceName: '30 Days Return',
            ServiceDesc: 'Simply return it within 30 days for an exchange',
            ServiceIcon: "fi fi-ts-badge-percent",
        },
        {
            ServiceName: 'Payment Secure',
            ServiceDesc: 'Contact us 24 hours a day, 7 days a week',
            ServiceIcon: "fi fi-ts-donate",
        },
    ])
    return (
        <>
            {
                ServiceData.map((d,i) => {
                    const { ServiceName, ServiceDesc, ServiceIcon } = d;
                    return (
                        <>
                            <Col sm={12} md={6} lg={3} className="ec_ser_content ec_ser_content_1" data-animation="zoomIn">
                                <div className="ec_ser_inner">
                                    <div className="ec-service-image">
                                        <i className={ServiceIcon}></i>
                                    </div>
                                    <div className="ec-service-desc">
                                        <h2>{ServiceName}</h2>
                                        <p>{ServiceDesc}</p>
                                    </div>
                                </div>
                            </Col>
                        </>
                    )
                })
            }
            {/* <div className="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3" data-animation="zoomIn">
                <div className="ec_ser_inner">
                    <div className="ec-service-image">
                        <i className="fi fi-ts-truck-moving"></i>
                    </div>
                    <div className="ec-service-desc">
                        <h2>Free Shipping</h2>
                        <p>Free shipping on all US order or order above $200</p>
                    </div>
                </div>
            </div>
            <div className="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3" data-animation="zoomIn">
                <div className="ec_ser_inner">
                    <div className="ec-service-image">
                        <i className="fi fi-ts-hand-holding-seeding"></i>
                    </div>
                    <div className="ec-service-desc">
                        <h2>24X7 Support</h2>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
            <div className="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3" data-animation="zoomIn">
                <div className="ec_ser_inner">
                    <div className="ec-service-image">
                        <i className="fi fi-ts-badge-percent"></i>
                    </div>
                    <div className="ec-service-desc">
                        <h2>30 Days Return</h2>
                        <p>Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
            </div>
            <div className="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3" data-animation="zoomIn">
                <div className="ec_ser_inner">
                    <div className="ec-service-image">
                        <i className="fi fi-ts-donate"></i>
                    </div>
                    <div className="ec-service-desc">
                        <h2>Payment Secure</h2>
                        <p>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

