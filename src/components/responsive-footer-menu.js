import React from 'react'
import { Link } from 'react-router-dom'

export default function ResponsiveFooterMenu() {
    return (
        <>
            <div className="ec-nav-panel-icons">
                <Link href="#ec-mobile-menu" className="navbar-toggler-btn ec-header-btn ec-side-toggle"><i
                    className="fi-rr-menu-burger"></i></Link>
            </div>
            <div className="ec-nav-panel-icons">
                <Link href="#ec-side-cart" className="toggle-cart ec-header-btn ec-side-toggle"><i
                    className="fi-rr-shopping-bag"></i><span
                        className="ec-cart-noti ec-header-count cart-count-lable">3</span></Link>
            </div>
            <div className="ec-nav-panel-icons">
                <Link href="#" className="ec-header-btn"><i className="fi-rr-home"></i></Link>
            </div>
            <div className="ec-nav-panel-icons">
                <Link href="#" className="ec-header-btn"><i className="fi-rr-heart"></i><span
                    className="ec-cart-noti">5</span></Link>
            </div>
            <div className="ec-nav-panel-icons">
                <Link href="#" className="ec-header-btn"><i className="fi-rr-user"></i></Link>
            </div>
        </>
    )
}


