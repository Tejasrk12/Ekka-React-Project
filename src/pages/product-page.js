import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../components/section-title'
import Breadcrumb from '../components/breadcrumb';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData } from '../redux/productSlice';
import ProductQuickReviewModal from '../components/product/product-quick-review-modal';
import SidebarCategory from '../components/sidebar-category';
import SidebarBestSeller from '../components/sidebar-best-seller';
import { Autoplay, Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SocialButton from '../components/social-button';

function usePageTitle(title) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  }
export default function ProdcutPage() {
    usePageTitle('Prodcut Page - Ekka');

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [currentProductModal, setCurrentProductModal] = useState({});
    const product = useSelector(data => data.product.ProductData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch])
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
            "name": "youtube-play",
            "link": "/",
            "icon": <><i className="ecicon eci-youtube-play"></i></>
        },
        {
            "name": "behance",
            "link": "/",
            "icon": <><i className="ecicon eci-behance"></i></>
        },
        {
            "name": "whatsapp",
            "link": "/",
            "icon": <><i className="ecicon eci-whatsapp"></i></>
        },
        {
            "name": "plus",
            "link": "/",
            "icon": <><i className="ecicon eci-plus"></i></>
        },
        
    ]
    return (
        <>
            {/* <!-- Ec breadcrumb start --> */}
            <Col className="sticky-header-next-sec  ec-breadcrumb section-space-mb">
                <Container>
                    <Row>
                        <Col col={12}>
                            <Breadcrumb PageTitle={"Shop"} ActivePage={"Shop"} HomePage={"Home"} />
                        </Col>
                    </Row>
                </Container>
            </Col>
            {/* <!-- Ec breadcrumb end --> */}

            {/* <!-- Sart Single product --> */}
            <section className="product_page ec-page-content section-space-p">
                <Container>
                    <Row>
                        <Col lg={9} md={12} className="ec-pro-rightside ec-common-rightside order-lg-last order-md-first">
                            {/* <!-- Single product content Start --> */}
                            <div className="single-pro-block">
                                <div className="single-pro-inner">
                                    <Row>
                                        <div className="single-pro-img">
                                            <div className="single-product-scroll">
                                                <Swiper
                                                    style={{
                                                        '--swiper-navigation-color': '#000',
                                                        '--swiper-pagination-color': '#000',
                                                    }}
                                                    loop={true}
                                                    spaceBetween={10}
                                                    thumbs={{ swiper: thumbsSwiper }}
                                                    modules={[FreeMode, Navigation, Thumbs]}
                                                    className="single-product-cover">
                                                    <SwiperSlide>
                                                        <div className="single-slide zoom-image-hover">
                                                            <img className="img-responsive" src="assets/images/product-image/9_1.jpg" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="single-slide zoom-image-hover">
                                                            <img className="img-responsive" src="assets/images/product-image/9_1.jpg" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="single-slide zoom-image-hover">
                                                            <img className="img-responsive" src="assets/images/product-image/9_1.jpg" />
                                                        </div>
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <div className="single-slide zoom-image-hover">
                                                            <img className="img-responsive" src="assets/images/product-image/9_1.jpg" />
                                                        </div>
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
                                                        <img className="img-responsive" src="assets/images/product-image/8_1.jpg" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <img className="img-responsive" src="assets/images/product-image/9_1.jpg" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <img className="img-responsive" src="assets/images/product-image/9_1.jpg" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <img className="img-responsive" src="assets/images/product-image/9_1.jpg" />
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </div>
                                        <div className="single-pro-desc">
                                            <div className="single-pro-content">
                                                <h5 className="ec-single-title">Unisex Cotton Neck Hoodie</h5>
                                                <div className="ec-single-rating-wrap">
                                                    <div className="ec-single-rating">
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star-o"></i>
                                                    </div>
                                                    <span className="ec-read-review"><a href="#ec-spt-nav-review">Be the first to
                                                        review this product</a></span>
                                                </div>
                                                <div className="ec-single-desc">Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                                    text ever since the 1990</div>

                                                
                                                <div className="ec-single-price-stoke">
                                                    <div className="ec-single-price">
                                                        <span className="ec-single-ps-title">As low as</span>
                                                        <span className="new-price">$97.00</span>
                                                    </div>
                                                    <div className="ec-single-stoke">
                                                        <span className="ec-single-ps-title">IN STOCK</span>
                                                        <span className="ec-single-sku">SKU#: WH12</span>
                                                    </div>
                                                </div>

                                                <div className="ec-pro-variation">
                                                    <div className="ec-pro-variation-inner ec-pro-variation-size">
                                                        <span>SIZE</span>
                                                        <div className="ec-pro-variation-content">
                                                            <ul>
                                                                <li className="active"><span>S</span></li>
                                                                <li><span>M</span></li>
                                                                <li><span>L</span></li>
                                                                <li><span>XL</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="ec-pro-variation-inner ec-pro-variation-color">
                                                        <span>Color</span>
                                                        <div className="ec-pro-variation-content">
                                                            <ul>
                                                                <li className="active"><span style={{ backgroundColor: "#1b4a87" }}></span></li>
                                                                <li><span style={{ backgroundColor: "#5f94d6" }}></span></li>
                                                                <li><span style={{ backgroundColor: "#72aea2" }}></span></li>
                                                                <li><span style={{ backgroundColor: "#c79782" }}></span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ec-single-qty">
                                                    <div class="qty-plus-minus"><div class="dec ec_qtybtn">-</div>
                                                        <input class="qty-input" type="text" name="ec_qtybtn" value="1"/>
                                                            <div class="inc ec_qtybtn">+</div></div>
                                                    <div className="ec-single-cart ">
                                                        <button className="btn btn-primary">Add To Cart</button>
                                                    </div>
                                                    <div className="ec-single-wishlist">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><i className="fi-rr-shopping-basket"></i></a>
                                                    </div>
                                                    <div className="ec-single-quickview">
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><i className="fi-rr-eye"></i></a>
                                                    </div>
                                                </div>
                                                <div className="ec-single-social">
                                                    <ul className="mb-0">
                                                    <SocialButton social={SocialBox} />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                            {/* <!--Single product content End --> */}
                            {/* <!-- Single product tab start --> */}
                            <div className="ec-single-pro-tab">
                                <div className="ec-single-pro-tab-wrapper">
                                    <div className="ec-single-pro-tab-nav">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-details" role="tab" aria-controls="ec-spt-nav-details" aria-selected="true">Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-info"
                                                    role="tab" aria-controls="ec-spt-nav-info" aria-selected="false">More Information</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-review"
                                                    role="tab" aria-controls="ec-spt-nav-review" aria-selected="false">Reviews</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content  ec-single-pro-tab-content">
                                        <div id="ec-spt-nav-details" className="tab-pane fade show active">
                                            <div className="ec-single-pro-tab-desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book. It has survived not only five centuries, but also
                                                    the leap into electronic typesetting, remaining essentially unchanged.
                                                </p>
                                                <ul>
                                                    <li>Any Product types that You want - Simple, Configurable</li>
                                                    <li>Downloadable/Digital Products, Virtual Products</li>
                                                    <li>Inventory Management with Backordered items</li>
                                                    <li>Flatlock seams throughout.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="ec-spt-nav-info" className="tab-pane fade">
                                            <div className="ec-single-pro-tab-moreinfo">
                                                <ul>
                                                    <li><span>Weight</span> 1000 g</li>
                                                    <li><span>Dimensions</span> 35 × 30 × 7 cm</li>
                                                    <li><span>Color</span> Black, Pink, Red, White</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="ec-spt-nav-review" className="tab-pane fade">
                                            <div className="row">
                                                <div className="ec-t-review-wrapper">
                                                    <div className="ec-t-review-item">
                                                        <div className="ec-t-review-avtar">
                                                            <img src="assets/images/review-image/1.jpg" alt="" />
                                                        </div>
                                                        <div className="ec-t-review-content">
                                                            <div className="ec-t-review-top">
                                                                <div className="ec-t-review-name">Jeny Doe</div>
                                                                <div className="ec-t-review-rating">
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="ec-t-review-bottom">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and
                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                    standard dummy text ever since the 1500s, when an unknown
                                                                    printer took a galley of type and scrambled it to make a
                                                                    type specimen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ec-t-review-item">
                                                        <div className="ec-t-review-avtar">
                                                            <img src="assets/images/review-image/2.jpg" alt="" />
                                                        </div>
                                                        <div className="ec-t-review-content">
                                                            <div className="ec-t-review-top">
                                                                <div className="ec-t-review-name">Linda Morgus</div>
                                                                <div className="ec-t-review-rating">
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="ec-t-review-bottom">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and
                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                    standard dummy text ever since the 1500s, when an unknown
                                                                    printer took a galley of type and scrambled it to make a
                                                                    type specimen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="ec-ratting-content">
                                                    <h3>Add a Review</h3>
                                                    <div className="ec-ratting-form">
                                                        <form action="#">
                                                            <div className="ec-ratting-star">
                                                                <span>Your rating:</span>
                                                                <div className="ec-t-review-rating">
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="ec-ratting-input">
                                                                <input name="your-name" placeholder="Name" type="text" />
                                                            </div>
                                                            <div className="ec-ratting-input">
                                                                <input name="your-email" placeholder="Email*" type="email"
                                                                    required />
                                                            </div>
                                                            <div className="ec-ratting-input form-submit">
                                                                <textarea name="your-commemt"
                                                                    placeholder="Enter Your Comment"></textarea>
                                                                <button className="btn btn-primary" type="submit"
                                                                    value="Submit">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product details description area end --> */}
                        </Col>
                        {/* <!-- Sidebar Area Start --> */}
                        <div className="ec-pro-leftside ec-common-leftside col-lg-3 order-lg-first col-md-12 order-md-last">
                            <SidebarCategory handleToggleClick={handleToggleClick2} />

                            <div className="ec-sidebar-slider">
                                <div className="ec-sb-slider-title">Best Sellers</div>
                                <SidebarBestSeller handleToggleClick={handleToggleClick2} />
                            </div>
                        </div>
                        {/* <!-- Sidebar Area Start --> */}
                    </Row>
                </Container>
            </section>
            {/* <!-- End Single product --> */}

            {/* <!-- Related Product Start --> */}
            <section className="section ec-releted-product section-space-p">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="section-title">
                                <SectionTitle>
                                    <h2 className="ec-bg-title">Related products</h2>
                                    <h2 className="ec-title">Related products</h2>
                                    <p className="sub-title">Browse The Collection of Top Products</p>
                                </SectionTitle>
                            </div>
                        </Col>
                    </Row>
                    <Row className="margin-minus-b-30">
                        {/* <!-- Related Product Content --> */}
                        {product && product.map((d, i) => {
                            const { name, description, old_price, new_price, rating, main_image_url, product_url, target_modal, discount, sale_tag, new_sale_tag } = d;
                            if (i <= 3) {

                                return (
                                    <>
                                        <Col lg={3} md={6} sm={6} xs={6} className="pro-gl-content mb-6">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                    <div className="ec-pro-image">
                                                        <Link to={product_url} className="image">
                                                            <img className="main-image" src={main_image_url} alt={name} />
                                                        </Link>
                                                        <span className="percentage">{discount}</span>
                                                        {sale_tag !== undefined ? <span className="flags"><span className={sale_tag}>{sale_tag}</span></span> : null}
                                                        {new_sale_tag !== undefined ? <span className="flags"><span className={new_sale_tag}>{new_sale_tag}</span></span> : null}
                                                        <Link href="#" className="quickview" data-link-action="quickview" title="Quick view" onClick={() => setCurrentProductModal({ name, description, old_price, new_price, rating, main_image_url, product_url, target_modal, discount, sale_tag, new_sale_tag })} data-bs-toggle="modal" data-bs-target={target_modal}><i className="fi-rr-eye"></i></Link>
                                                        <div className="ec-pro-actions">
                                                            <Link to="#" className="ec-btn-group compare" title="Compare"><i className="fi fi-rr-arrows-repeat"></i></Link>
                                                            <button title="Add To Cart" className="add-to-cart"><i className="fi-rr-shopping-basket"></i> Add To Cart</button>
                                                            <Link className="ec-btn-group wishlist" title="Wishlist"><i className="fi-rr-heart"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ec-pro-content">
                                                    <h5 className="ec-pro-title"><a href="product-left-sidebar.html">{name}</a></h5>
                                                    <div className="ec-pro-rating">
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star"></i>
                                                    </div>
                                                    <div className="ec-pro-list-desc">{description}</div>
                                                    <span className="ec-price">
                                                        <span className="old-price">{old_price}</span>
                                                        <span className="new-price">{new_price}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            }
                        })}


                    </Row>
                </Container>
            </section>
            {/* <!-- Related Product end --> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" id="ec_quickview_modal" tabindex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="row">
                                <ProductQuickReviewModal product={currentProductModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal end --> */}
        </>
    )
}


