import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, InputGroup } from 'react-bootstrap';
import Breadcrumb from '../components/breadcrumb';
import ProductSort from '../components/product-sort';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData } from '../redux/productSlice';
import ProductQuickReviewModal from '../components/product/product-quick-review-modal';
// import ProductPagination from '../components/product-pagination';
import SectionTitle from '../components/section-title';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

function usePageTitle(title) {
    useEffect(() => {
      document.title = title;
    },[title]);
  }
export default function Shop() {
    usePageTitle('Shop - Ekka');
    const [currentProductModal, setCurrentProductModal] = useState({});
    const product = useSelector(data => data.product.ProductData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductData());
    }, [dispatch])

    const [CategoryData] = useState([
        { name: "Clothes", link: "#" },
        { name: "Bags", link: "#" },
        { name: "Shoes", link: "#" },
        { name: "Cosmetics", link: "#" },
        { name: "Electrics", link: "#" },
        { name: "Phone", link: "#" },
        { name: "Watch", link: "#" },
        { name: "Cap", link: "#" }
    ])
    const [SizeData] = useState([
        { name: "S" },
        { name: "M" },
        { name: "L" },
        { name: "XL" },
        { name: "XXL" },
        { name: "XXXL" }
    ])
    const [ ColorData] = useState([
        { colorName: "Coral Pink", colorCode: "#ff748b" },
        { colorName: "Black", colorCode: "#000000" },
        { colorName: "Lime Green", colorCode: "#2bff4a" },
        { colorName: "Peachy Coral", colorCode: "#ff7c5e" },
        { colorName: "Neon Lavender", colorCode: "#f155ff" },
        { colorName: "Bright Yellow", colorCode: "#ffef00" },
        { colorName: "Soft Lilac", colorCode: "#c89fff" },
        { colorName: "Aqua Blue", colorCode: "#7bfffa" },
        { colorName: "Mint Green", colorCode: "#56ffc1" },
    ])
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


            {/* <!-- Ec Shop page --> */}
            <section className="ec-page-content-bnr section-space-p">
                <Container>
                    <Row>
                        <Col lg={9} md={12} className="ec-shop-rightside order-lg-last order-md-first margin-b-30">
                            {/* <!-- Shop Top Start --> */}
                            <div className="ec-pro-list-top d-flex">
                                <Col md={6} className="ec-grid-list">
                                    <div className="ec-gl-btn">
                                        <button className="btn btn-grid active"><i className="fi-rr-apps"></i></button>
                                        <button className="btn btn-list"><i className="fi-rr-list"></i></button>
                                    </div>
                                </Col>
                                <Col md={6} className="ec-sort-select">
                                    <span className="sort-by">Sort by</span>
                                    <div className="ec-select-inner">
                                        <ProductSort />
                                    </div>
                                </Col>
                            </div>
                            {/* <!-- Shop Top End --> */}

                            {/* <!-- Shop content Start --> */}
                            <div className="shop-pro-content">
                                <div className="shop-pro-inner">
                                    <Row>
                                        {
                                            <>

                                                {product && product.map((d, i) => {
                                                    const { name, description, old_price, new_price, rating, main_image_url, product_url, target_modal, discount, sale_tag, new_sale_tag } = d;
                                                    if (i <= 5) {
                                                        return (
                                                            <>
                                                                <Col lg={4} md={6} sm={6} xs={6} className="pro-gl-content mb-4">
                                                                    <div className="ec-product-inner">
                                                                        <div className="ec-pro-image-outer">
                                                                            <div className="ec-pro-image">
                                                                                <Link to={product_url} className="image">
                                                                                    <Image className="main-image" src={main_image_url} alt={name} />
                                                                                </Link>
                                                                                <span className="percentage">{discount}</span>
                                                                                <Link to="#" className="quickview" data-link-action="quickview" title="Quick view" onClick={() => setCurrentProductModal({ name, description, old_price, new_price, rating, main_image_url, product_url, target_modal, discount, sale_tag, new_sale_tag })} data-bs-toggle="modal" data-bs-target={target_modal}><i className="fi-rr-eye"></i></Link>

                                                                                <div className="ec-pro-actions">
                                                                                    <Link to={"#"} className="ec-btn-group compare"
                                                                                        title="Compare"><i className="fi fi-rr-arrows-repeat"></i></Link>
                                                                                    <button title="Add To Cart" className="add-to-cart"><i
                                                                                        className="fi-rr-shopping-basket"></i> Add To Cart</button>
                                                                                    <Link className="ec-btn-group wishlist" title="Wishlist"><i
                                                                                        className="fi-rr-heart"></i></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ec-pro-content">
                                                                            <h5 className="ec-pro-title"><Link href={product_url}>{name}</Link></h5>
                                                                            <div className="ec-pro-rating">
                                                                                {Array.from({ length: rating }, (_, index) => {
                                                                                    return (
                                                                                        <>
                                                                                            <i key={index} className="ecicon eci-star fill" color={index < rating ? '#ff6262' : '#b2b2b2'} />
                                                                                        </>
                                                                                    );
                                                                                })}
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

                                            </>
                                        }


                                    </Row>
                                </div>
                                {/* <!-- Ec Pagination Start --> */}
                                <div className="ec-pro-pagination">
                                    {/* <ProductPagination product={product} itemsPerPage={3}/> */}
                                    <span>Showing 1-12 of 21 item(s)</span>
                                    <ul className="ec-pro-pagination-inner">
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a className="next" href="#">Next <i className="ecicon eci-angle-right"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- Ec Pagination End --> */}
                            </div>
                            {/* <!--Shop content End --> */}
                        </Col>
                        {/* <!-- Sidebar Area Start --> */}
                        <div className="ec-shop-leftside col-lg-3 order-lg-first col-md-12 order-md-last">
                            <div id="shop_sidebar">
                                <div className="ec-sidebar-heading">
                                    <SectionTitle>
                                        <h1>Filter Products By</h1>
                                    </SectionTitle>
                                </div>
                                <div className="ec-sidebar-wrap">
                                    {/* <!-- Sidebar Category Block --> */}
                                    <div className="ec-sidebar-block">
                                        <div className="ec-sb-title">
                                            <SectionTitle>
                                                <h3 className="ec-sidebar-title">Category</h3>
                                            </SectionTitle>
                                        </div>
                                        <div className="ec-sb-block-content">
                                            <ul>
                                                {
                                                    CategoryData.map((d, i) => {
                                                        const { name, link } = d;
                                                        return (
                                                            <>
                                                                <li>
                                                                    <div className="ec-sidebar-block-item">
                                                                        <FormCheckInput type="checkbox" /> <Link to={link}>{name}</Link><span className="checked"></span>
                                                                    </div>
                                                                </li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Size Block --> */}
                                    <div className="ec-sidebar-block">
                                        <div className="ec-sb-title">
                                            <SectionTitle>
                                                <h3 className="ec-sidebar-title">Size</h3>
                                            </SectionTitle>
                                        </div>
                                        <div className="ec-sb-block-content">
                                            <ul>
                                                {
                                                    SizeData.map((d, i) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    <div className="ec-sidebar-block-item">
                                                                        <FormCheckInput type="checkbox" value="" /><Link to="#">{d.name}</Link><span className="checked"></span>
                                                                    </div>
                                                                </li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- Sidebar Color item --> */}
                                    <div className="ec-sidebar-block ec-sidebar-block-clr">
                                        <div className="ec-sb-title">
                                            <SectionTitle>
                                                <h3 className="ec-sidebar-title">Color</h3>
                                            </SectionTitle>

                                        </div>
                                        <div className="ec-sb-block-content">
                                            <ul>
                                                {
                                                    ColorData.map((d, i) => {
                                                        const{colorName, colorCode} = d;
                                                        return (
                                                            <>
                                                                <li>
                                                                    <div className="ec-sidebar-block-item"><span style={{ backgroundColor: colorCode }}></span></div>
                                                                </li>
                                                            </>
                                                        )
                                                    })
                                                }
                                                {/* <li>
                                                    <div className="ec-sidebar-block-item"><span style={{ backgroundColor: "#c4d6f9" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#ff748b" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#000000" }}></span></div>
                                                </li>
                                                <li className="active">
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#2bff4a" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#ff7c5e" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#f155ff" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#ffef00" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#c89fff" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#7bfffa" }}></span></div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item"><span
                                                        style={{ backgroundColor: "#56ffc1" }}></span></div>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            {/* <!-- End Shop page --> */}

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
    );
}
