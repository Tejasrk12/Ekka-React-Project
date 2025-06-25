import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBannerData } from '../redux/bannerSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, Button } from 'react-router-dom';
import {Row, Col, Container } from 'react-bootstrap';
import Bg1 from '../assets/images/main-slider-banner/1.jpg'
import Bg2 from '../assets/images/main-slider-banner/2.jpg'

export default function BannerSlider() {
    let bg1 = {
        backgroundImage: `url(${Bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowY: "hidden",
        height: "80vh"
    };
    let bg2 = {
        backgroundImage: `url(${Bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowY: "hidden",
        height: "80vh"
    };
    const [BannerData] = useState([
        {
            MainTitle: "New Fashion Collections",
            SubTitle: "Sale Offer",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            ButtonName: "Order Now",
            ButtonLink: "#",
            Bg:bg1
        },
        {
            MainTitle: "New Fashion Collections",
            SubTitle: "Sale Offer",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            ButtonName: "Order Now",
            ButtonLink: "#",
            Bg:bg2
        },
    ])
    const banner = useSelector(data => data.banner.BannerData);
    const dispatch = useDispatch();
    useEffect(() => {
        // const res = fetch("http://192.168.0.171:3001/banner")
        //     .then(res => res.json())
        //     .then((data) => setBanner(data))
        dispatch(fetchBannerData());
    },[dispatch])
    return (
        <>
            <div className="ec-slider swiper-container main-slider-nav main-slider-dot">
                {/* <!-- Main slider --> */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    // loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {/* {
                        banner && banner.map((d, i) => {
                            const { MainTitle, SubTitle, Text, ButtonName, ButtonLink, bannerimage } = d;
                            const cleanedBannerImage = d.bannerimage.replace(/\\/g, "/");
                            return (
                                <>
                                    <SwiperSlide>
                                        <div className="ec-slide-item swiper-slide d-flex" style={{
                                            backgroundImage: `url("${cleanedBannerImage}")`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            overflowY: "hidden",
                                            height: "80vh"
                                        }}>
                                            <Container className="align-self-center">
                                                <Row>
                                                    <Col xl={6} lg={7} md={7} sm={7} className="align-self-center">
                                                        <div className="ec-slide-content ">
                                                            <h1 className="ec-slide-title">{MainTitle}</h1>
                                                            <h2 className="ec-slide-stitle">{SubTitle}</h2>
                                                            <p>{Text}</p>
                                                            <Link to={ButtonLink} className="btn btn-lg btn-secondary">{ButtonName}</Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    } */}
                    {
                        BannerData && BannerData.map((d, i) => {
                            const { MainTitle, SubTitle, Text, ButtonName, ButtonLink, Bg } = d;
                            return (
                                <>
                                    <SwiperSlide>
                                        <div className="ec-slide-item swiper-slide d-flex" style={Bg}>
                                            <Container className="align-self-center">
                                                <Row>
                                                    <Col xl={6} lg={7} md={7} sm={7} className="align-self-center">
                                                        <div className="ec-slide-content ">
                                                            <h1 className="ec-slide-title">{MainTitle}</h1>
                                                            <h2 className="ec-slide-stitle">{SubTitle}</h2>
                                                            <p>{Text}</p>
                                                            <Link to={ButtonLink} className="btn btn-lg btn-secondary">{ButtonName}</Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}