import React, { useState } from 'react';
import VM1 from "../assets/images/vendor/2.jpg";
import VPM1 from "../assets/images/product-image/1_1.jpg";
import VPM2 from "../assets/images/product-image/2_1.jpg";
import VPM3 from "../assets/images/product-image/3_1.jpg";
import VPM4 from "../assets/images/product-image/4_1.jpg";

import VOF1 from "../assets/images/vendor/3.jpg";
import VPOF1 from "../assets/images/product-image/5_1.jpg";
import VPOF2 from "../assets/images/product-image/6_1.jpg";
import VPOF3 from "../assets/images/product-image/7_1.jpg";
import VPOF4 from "../assets/images/product-image/8_1.jpg";

import VCA1 from "../assets/images/vendor/4.jpg";
import VPCA1 from "../assets/images/product-image/9_1.jpg";
import VPCA2 from "../assets/images/product-image/10_1.jpg";
import VPCA3 from "../assets/images/product-image/11_1.jpg";
import VPCA4 from "../assets/images/product-image/12_1.jpg";

import VNF1 from "../assets/images/vendor/5.jpg";
import VPNF1 from "../assets/images/product-image/13_1.jpg";
import VPNF2 from "../assets/images/product-image/14_1.jpg";
import VPNF3 from "../assets/images/product-image/15_1.jpg";
import VPNF4 from "../assets/images/product-image/16_1.jpg";
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function TopVendor() {
    const [VendorData] = useState([
        {
            VendorImg: VM1,
            VendorName: "Marvelus",
            VendorProduct: "154 Products",
            VendorSales: "Sales 954",
            VendorProductImg: [
                {
                    ProductUrl: "#",
                    ProductImg: VPM1,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPM2,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPM3,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPM4,
                },
            ]
        },
        {
            VendorImg: VOF1,
            VendorName: "Oreva Fashion",
            VendorProduct: "546 Products",
            VendorSales: "Sales 785",
            VendorProductImg: [
                {
                    ProductUrl: "#",
                    ProductImg: VPOF1,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPOF2,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPOF3,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPOF4,
                },
            ]
        },
        {
            VendorImg: VCA1,
            VendorName: "Cenva Art",
            VendorProduct: "854 Products",
            VendorSales: "Sales 587",
            VendorProductImg: [
                {
                    ProductUrl: "#",
                    ProductImg: VPCA1,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPCA2,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPCA3,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPCA4,
                },
            ]
        },
        {
            VendorImg: VNF1,
            VendorName: "Neon Fashion",
            VendorProduct: "154 Products",
            VendorSales: "Sales 354",
            VendorProductImg: [
                {
                    ProductUrl: "#",
                    ProductImg: VPNF1,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPNF2,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPNF3,
                },
                {
                    ProductUrl: "#",
                    ProductImg: VPNF4,
                },
            ]
        },
    ])
    return (
        <>
            {
                VendorData.map((d, i) => {
                    const { VendorImg, VendorName, VendorProduct, VendorSales, VendorProductImg } = d;
                    return (
                        <>
                            <Col sm={12} md={6} lg={3} className="ec_ven_content" data-animation="zoomIn">
                                <div className="ec-vendor-card">
                                    <div className="ec-vendor-detail">
                                        <div className="ec-vendor-avtar">
                                            <Image src={VendorImg} alt={VendorName} />
                                        </div>
                                        <div className="ec-vendor-info">
                                            <Link to="#" className="name">{VendorName}</Link>
                                            <p className="prod-count">{VendorProduct}</p>
                                            <div className="ec-pro-rating">
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star fill"></i>
                                                <i className="ecicon eci-star"></i>
                                            </div>
                                            <div className="ec-sale">
                                                <p title="Weekly sales">{VendorSales}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ec-vendor-prod">
                                        {
                                            VendorProductImg.map((d, i) => {
                                                const { ProductUrl, ProductImg } = d;
                                                return (
                                                    <div className="ec-prod-img">
                                                        <Link to={ProductUrl}><img src={ProductImg} alt="vendor img" /></Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Col>
                        </>
                    )
                })
            }
        </>
    )
}

