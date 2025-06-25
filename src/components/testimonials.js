import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTestimonialData } from '../redux/testimonialSlice';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Testimonials() {
    const testimonial = useSelector(data=>data.testimonial.TestimonialData);
    const dispatch = useDispatch();
    useState(()=>{
        dispatch(fetchTestimonialData());
    },[dispatch])
    const [TestiMonialData] = useState([
        {
            TestName: "John Doe",
            TestContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
            TestDesi: "General Manager",
            QuoteRighticon: "fi-rr-quote-right top",
            QuoteLefticon: "fi-rr-quote-right bottom",
        },
        {
            TestName: "John Doe 2",
            TestContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
            TestDesi: "General Manager",
            QuoteRighticon: "fi-rr-quote-right top",
            QuoteLefticon: "fi-rr-quote-right bottom",
        },
        {
            TestName: "John Doe 3",
            TestContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
            TestDesi: "General Manager",
            QuoteRighticon: "fi-rr-quote-right top",
            QuoteLefticon: "fi-rr-quote-right bottom",
        }
    ])
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
            >
                {/* {
                    testimonial && testimonial.map((d,i) => {
                        const{title, content, position} = d;
                        return (
                            <>
                                <SwiperSlide>
                                    <li className="ec-test-item my-3">
                                        <i className="fi-rr-quote-right top"></i>
                                        <div className="ec-test-inner">
                                            <div className="ec-test-content">
                                                <div className="ec-test-desc">{content}</div>
                                                <div className="ec-test-name">{title}</div>
                                                <div className="ec-test-designation">{position}</div>
                                                <div className="ec-test-rating">
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fi-rr-quote-right bottom"></i>
                                    </li>
                                </SwiperSlide>
                            </>
                        )
                    })
                } */}
                {
                    TestiMonialData && TestiMonialData.map((d,i) => {
                        const{TestName, TestContent, TestDesi} = d;
                        return (
                            <>
                                <SwiperSlide>
                                    <li className="ec-test-item my-3">
                                        <i className="fi-rr-quote-right top"></i>
                                        <div className="ec-test-inner">
                                            <div className="ec-test-content">
                                                <div className="ec-test-desc">{TestContent}</div>
                                                <div className="ec-test-name">{TestName}</div>
                                                <div className="ec-test-designation">{TestDesi}</div>
                                                <div className="ec-test-rating">
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                    <i className="ecicon eci-star fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fi-rr-quote-right bottom"></i>
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


