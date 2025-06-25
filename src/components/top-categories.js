import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './section-title';

import icon1 from '../assets/images/icons/cat_1.png';
import icon01 from '../assets/images/icons/cat_1_1.png';

import icon2 from '../assets/images/icons/cat_2.png';
import icon02 from '../assets/images/icons/cat_2_1.png';

import icon3 from '../assets/images/icons/cat_3.png';
import icon03 from '../assets/images/icons/cat_3_1.png';

import icon4 from '../assets/images/icons/cat_4.png';
import icon04 from '../assets/images/icons/cat_4_1.png';

import BI1 from '../assets/images/cat-banner/1.jpg';
import BI2 from '../assets/images/cat-banner/2.jpg';
import BI3 from '../assets/images/cat-banner/3.jpg';
import BI4 from '../assets/images/cat-banner/4.jpg';
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function TopCategories() {
    const [TopCollectionFilter] = useState([
        {
            CategroyId: "1",
            CategoryName: "Clothes",
            ProductQuantity: "400",
            ProductName: "Products",
            CategoryIconBlack: icon1,
            CategoryIconWhite: icon01,
            CategoryUrl: "#",
            CategoryBannerImg: BI1
        },
        {
            CategroyId: "2",
            CategoryName: "Watches",
            ProductQuantity: "510",
            ProductName: "Products",
            CategoryIconBlack: icon2,
            CategoryIconWhite: icon02,
            CategoryUrl: "#",
            CategoryBannerImg: BI2
        },
        {
            CategroyId: "3",
            CategoryName: "Bags",
            ProductQuantity: "620",
            ProductName: "Products",
            CategoryIconBlack: icon3,
            CategoryIconWhite: icon03,
            CategoryUrl: "#",
            CategoryBannerImg: BI3
        },
        {
            CategroyId: "4",
            CategoryName: "Shoes",
            ProductQuantity: "320",
            ProductName: "Products",
            CategoryIconBlack: icon4,
            CategoryIconWhite: icon04,
            CategoryUrl: "#",
            CategoryBannerImg: BI4
        },
    ])
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <div className="section-title">
                            <SectionTitle type={"two"}>
                                <h2 className="ec-bg-title">Our Top Collection</h2>
                                <h2 className="ec-title">Top Categories</h2>
                                <p className="sub-title">Browse The Collection of Top Categories</p>
                            </SectionTitle>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {/* <!--Category Nav Start --> */}
                    <Col lg={3}>
                        <ul className="ec-cat-tab-nav nav">
                            {
                                TopCollectionFilter.map((d, i) => {
                                    const { CategroyId, CategoryName, ProductQuantity, ProductName, CategoryIconBlack, CategoryIconWhite } = d;
                                    if (i == 0) {
                                        var active = "active"
                                    }
                                    return (
                                        <>
                                            <li className="cat-item">
                                                <Link className={`cat-link ${active}`} data-bs-toggle="tab" to={`#tab-cat-${CategroyId}`}>
                                                    <div className="cat-icons">
                                                        <Image className="cat-icon" src={CategoryIconBlack} alt={CategoryName} />
                                                        <Image className="cat-icon-hover" src={CategoryIconWhite} alt={CategoryName} />
                                                    </div>
                                                    <div className="cat-desc"><span>{CategoryName}</span><span>{ProductQuantity} {ProductName}</span></div>
                                                </Link>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                    {/* <!-- Category Nav End --> */}
                    {/* <!--Category Tab Start --> */}
                    <Col lg={9}>
                        <div className="tab-content">
                            {
                                TopCollectionFilter.map((d, i) => {
                                    const { CategroyId, CategoryName, CategoryBannerImg, CategoryUrl } = d;
                                    if (i == 0) {
                                        var active = "active";
                                    }
                                    return (
                                        <>
                                            <div className={`tab-pane fade show ${active}`} id={`tab-cat-${CategroyId}`}>
                                                <Row>
                                                    <Image src={CategoryBannerImg} alt={CategoryName} />
                                                </Row>
                                                <span className="panel-overlay">
                                                    <Link to={CategoryUrl} className="btn btn-primary">View All</Link>
                                                </span>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        {/* <!-- Category Tab End --> */}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
