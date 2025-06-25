import React, { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';

export default function ProductQuickReviewModal({ product: { name, old_price, new_price, rating, description, main_image_url, product_url } }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Col md={5} sm={12} xs={12}>
                {/* <!-- Swiper --> */}
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    freeMode={true}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="qty-nav-thumb "
                >
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="img-responsive" src={main_image_url} />
                    </SwiperSlide>
                </Swiper>
            </Col>
            <Col md={7} sm={12} xs={12}>
                <div className="quickview-pro-content">
                    <h5 className="ec-quick-title"><a href={product_url}>{name}</a>
                    </h5>
                    <div className="ec-quickview-rating">
                        <i className="ecicon eci-star fill"></i>
                        <i className="ecicon eci-star fill"></i>
                        <i className="ecicon eci-star fill"></i>
                        <i className="ecicon eci-star fill"></i>
                        <i className="ecicon eci-star"></i>
                    </div>

                    <div className="ec-quickview-desc">{description}</div>
                    <div className="ec-quickview-price">
                        <span className="old-price">{old_price}</span>
                        <span className="new-price">{new_price}</span>
                    </div>

                    <div className="ec-quickview-qty">
                        <div class="qty-plus-minus">
                            <div class="dec ec_qtybtn">-</div>
                            <input className="qty-input" type="text" name="ec_qtybtn" value="1" />
                            <div class="inc ec_qtybtn">+</div>
                        </div>
                        {/* <div className="qty-plus-minus">
                            <input className="qty-input" type="text" name="ec_qtybtn" value="1" />
                        </div> */}
                        <div className="ec-quickview-cart ">
                            <Button className="btn btn-primary"><i className="fi-rr-shopping-basket"></i> Add To
                                Cart</Button>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}



// <div className="qty-product-cover">
//     <div className="qty-slide">
//         <img className="img-responsive" src={main_image_url} alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_2.jpg" alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_3.jpg" alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_4.jpg" alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_5.jpg" alt="" />
//     </div>
// </div>
// <div className="qty-nav-thumb">
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_1.jpg" alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_2.jpg" alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_3.jpg" alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_4.jpg" alt="" />
//     </div>
//     <div className="qty-slide">
//         <img className="img-responsive" src="assets/images/product-image/3_5.jpg" alt="" />
//     </div>
// </div>