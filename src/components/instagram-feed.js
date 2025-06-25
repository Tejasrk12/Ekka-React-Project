import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import InstaImg1 from '../assets/images/instragram-image/1.jpg';
import InstaImg2 from '../assets/images/instragram-image/2.jpg';
import InstaImg3 from '../assets/images/instragram-image/3.jpg';
import InstaImg4 from '../assets/images/instragram-image/4.jpg';
import InstaImg5 from '../assets/images/instragram-image/5.jpg';
import InstaImg6 from '../assets/images/instragram-image/6.jpg';
import InstaImg7 from '../assets/images/instragram-image/7.jpg';
import { Image } from 'react-bootstrap';



export default function InstagramFeed() {
    const [InstaData] = useState([
        {
            InstaImg: InstaImg1,
            InstaUrl: "#",
        },
        {
            InstaImg: InstaImg2,
            InstaUrl: "#",
        },
        {
            InstaImg: InstaImg3,
            InstaUrl: "#",
        },
        {
            InstaImg: InstaImg4,
            InstaUrl: "#",
        },
        {
            InstaImg: InstaImg5,
            InstaUrl: "#",
        },
        {
            InstaImg: InstaImg6,
            InstaUrl: "#",
        },
        {
            InstaImg: InstaImg7,
            InstaUrl: "#",
        }
    ])
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                }}
            >

                {
                    InstaData.map((d, i) => {
                        const { InstaImg, InstaUrl } = d;
                        return (
                            <>
                                <SwiperSlide>
                                    <div className="ec-insta-item">
                                        <div className="ec-insta-inner">
                                            <Link to={InstaUrl} target="_blank"><Image src={InstaImg} alt="insta" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }

            </Swiper>

        </>
    )
}


