import React, { useState } from 'react';
import TopHeaderMenu from './top-header-menu';
import SocialButton from './social-button';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default function HeaderMenuMob({toggleMenu,handleToggleClick1}) {
    // console.log(toggleMenu);
    return (
        <>
           <div id="ec-mobile-menu" className={`ec-side-cart ec-mobile-menu ${toggleMenu}`}>
                <div className="ec-menu-title">
                    <span className="menu_title">My Menu</span>
                    <button className="ec-close" onClick={()=>handleToggleClick1()}>×</button>
                </div>
                <div className="ec-menu-inner">
                    <div className="ec-menu-content">
                        <ul>
                            <li><Link href="index-2.html">Home</Link></li>
                            <li className="dropdown">
                                <span class="menu-toggle"></span>
                                <Link href="javascript:void(0)">Categories</Link>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="javascript:void(0)">classNameic Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                                            <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                                            <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                                            <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                                            <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">classNameic Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                                            <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                                            <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                                            <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                                            <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                            <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Columns Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                            <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">List Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                            <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                            <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a></li>
                                            <li><a href="shop-list-banner-right-sidebar.html">Banner right sidebar</a></li>
                                            <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="p-0" href="shop-left-sidebar-col-3.html"><img className="img-responsive"
                                        src="assets/images/menu-banner/1.jpg" alt="" /></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="javascript:void(0)">Products</a>
                                <ul className="sub-menu">
                                    <li><a href="javascript:void(0)">Product page</a>
                                        <ul className="sub-menu">
                                            <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                                            <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Product 360</a>
                                        <ul className="sub-menu">
                                            <li><a href="product-360-left-sidebar.html">360 left sidebar</a></li>
                                            <li><a href="product-360-right-sidebar.html">360 right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Product vodeo</a>
                                        <ul className="sub-menu">
                                            <li><a href="product-video-left-sidebar.html">vodeo left sidebar</a></li>
                                            <li><a href="product-video-right-sidebar.html">vodeo right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Product gallery</a>
                                        <ul className="sub-menu">
                                            <li><a href="product-gallery-left-sidebar.html">Gallery left sidebar</a></li>
                                            <li><a href="product-gallery-right-sidebar.html">Gallery right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="product-full-width.html">Product full width</a></li>
                                    <li><a href="product-360-full-width.html">360 full width</a></li>
                                    <li><a href="product-video-full-width.html">Video full width</a></li>
                                    <li><a href="product-gallery-full-width.html">Gallery full width</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Others</a>
                                <ul className="sub-menu">
                                    <li><a href="javascript:void(0)">Mail Confirmation</a>
                                        <ul className="sub-menu">
                                            <li><a href="email-template-confirm-1.html">Mail Confirmation 1</a></li>
                                            <li><a href="email-template-confirm-2.html">Mail Confirmation 2</a></li>
                                            <li><a href="email-template-confirm-3.html">Mail Confirmation 3</a></li>
                                            <li><a href="email-template-confirm-4.html">Mail Confirmation 4</a></li>
                                            <li><a href="email-template-confirm-5.html">Mail Confirmation 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Mail Reset password</a>
                                        <ul className="sub-menu">
                                            <li><a href="email-template-forgot-password-1.html">Reset password 1</a></li>
                                            <li><a href="email-template-forgot-password-2.html">Reset password 2</a></li>
                                            <li><a href="email-template-forgot-password-3.html">Reset password 3</a></li>
                                            <li><a href="email-template-forgot-password-4.html">Reset password 4</a></li>
                                            <li><a href="email-template-forgot-password-5.html">Reset password 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Mail Promotional</a>
                                        <ul className="sub-menu">
                                            <li><a href="email-template-offers-1.html">Offer Mail 1</a></li>
                                            <li><a href="email-template-offers-2.html">Offer Mail 2</a></li>
                                            <li><a href="email-template-offers-3.html">Offer Mail 3</a></li>
                                            <li><a href="email-template-offers-4.html">Offer Mail 4</a></li>
                                            <li><a href="email-template-offers-5.html">Offer Mail 5</a></li>
                                            <li><a href="email-template-offers-6.html">Offer Mail 6</a></li>
                                            <li><a href="email-template-offers-7.html">Offer Mail 7</a></li>
                                            <li><a href="email-template-offers-8.html">Offer Mail 8</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Vendor Account Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                            <li><a href="vendor-profile.html">Vendor Profile</a></li>
                                            <li><a href="vendor-uploads.html">Vendor Uploads</a></li>
                                            <li><a href="vendor-settings.html">Vendor Settings</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">User Account Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="user-profile.html">User Profile</a></li>
                                            <li><a href="user-history.html">User History</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="track-order.html">Track Order</a></li>
                                            <li><a href="user-invoice.html">User Invoice</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Construction Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="404-error-page.html">404 Error Page</a></li>
                                            <li><a href="under-maintenance.html">Maintenance Page</a></li>
                                            <li><a href="coming-soon.html">Comming Soon Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Vendor Catalog Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="catalog-single-vendor.html">Catalog Single Vendor</a></li>
                                            <li><a href="catalog-multi-vendor.html">Catalog Multi Vendor</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="compare.html">Compare</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="track-order.html">Track Order</a></li>
                                    <li><a href="terms-condition.html">Terms Condition</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="javascript:void(0)">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                    <li><a href="blog-detail-left-sidebar.html">Blog detail left sidebar</a></li>
                                    <li><a href="blog-detail-right-sidebar.html">Blog detail right sidebar</a></li>
                                    <li><a href="blog-full-width.html">Blog full width</a></li>
                                    <li><a href="blog-detail-full-width.html">Blog detail full width</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="javascript:void(0)">Elements</a>
                                <ul className="sub-menu">
                                    <li><a href="elemets-products.html">Products</a></li>
                                    <li><a href="elemets-typography.html">Typography</a></li>
                                    <li><a href="elemets-title.html">Titles</a></li>
                                    <li><a href="elemets-categories.html">Categories</a></li>
                                    <li><a href="elemets-buttons.html">Buttons</a></li>
                                    <li><a href="elemets-tabs.html">Tabs</a></li>
                                    <li><a href="elemets-accordions.html">Accordions</a></li>
                                    <li><a href="elemets-blog.html">Blogs</a></li>
                                </ul>
                            </li>
                            <li><a href="offer.html">Hot Offers</a></li>
                        </ul>
                    </div>
                    <div className="header-res-lan-curr">
                        <div className="header-top-lan-curr">
                            <TopHeaderMenu />
                        </div>
                        {/* <!-- Social Start --> */}
                        <div className="header-res-social">
                            <div className="header-top-social">
                                <ul className="mb-0">
                                    <SocialButton />
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Social End --> */}
                    </div>
                </div>
            </div>
        </>
    )
}


