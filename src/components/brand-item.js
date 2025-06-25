import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';

import B1 from '../assets/images/brand-image/1.png';
import B2 from '../assets/images/brand-image/2.png';
import B3 from '../assets/images/brand-image/3.png';
import B4 from '../assets/images/brand-image/4.png';
import B5 from '../assets/images/brand-image/5.png';
import B6 from '../assets/images/brand-image/6.png';
import B7 from '../assets/images/brand-image/7.png';
import B8 from '../assets/images/brand-image/8.png';
import { Image } from 'react-bootstrap';


export default function BrandItem() {
    const [BrandData] = useState([
        {
            BrandImg: B1,
            BrandUrl: "#",
        },
        {
            BrandImg: B2,
            BrandUrl: "#",
        },
        {
            BrandImg: B3,
            BrandUrl: "#",
        },
        {
            BrandImg: B4,
            BrandUrl: "#",
        },
        {
            BrandImg: B5,
            BrandUrl: "#",
        },
        {
            BrandImg: B6,
            BrandUrl: "#",
        },
        {
            BrandImg: B7,
            BrandUrl: "#",
        },
        {
            BrandImg: B8,
            BrandUrl: "#",
        },
    ])
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={7}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 7,
                    },
                }}
            >

                {
                    BrandData.map((d, i) => {
                        const { BrandImg, BrandUrl } = d;
                        return (
                            <>
                                <SwiperSlide>
                                    <li className="ec-brand-item" data-animation="zoomIn">
                                        <div className="ec-brand-img">
                                            <Link to={BrandUrl}>
                                                <Image alt="brand" title="brand" src={BrandImg} />
                                            </Link>
                                        </div>
                                    </li>
                                </SwiperSlide>
                            </>
                        )
                    })
                }

            </Swiper>

        </>
    )
}


