import React from 'react'
import P1 from '../assets/images/product-image/1.jpg'
import P2 from '../assets/images/product-image/2.jpg'
import P3 from '../assets/images/product-image/3.jpg'
import P4 from '../assets/images/product-image/4.jpg'
import P5 from '../assets/images/product-image/5.jpg'
import P6 from '../assets/images/product-image/6.jpg'
import P7 from '../assets/images/product-image/7.jpg'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

export default function SidebarBestSeller() {
    const SellerData = [
        {
            ProductName: 'baby fabric shoes',
            ProductLink: '#',
            ProductImg: P1,
            CurrSym: "$",
            OldPrice: "5.00",
            NewPrice: "4.00"
        },
        {
            ProductName: 'Mens hoodies t-shirt',
            ProductLink: '#',
            ProductImg: P2,
            CurrSym: "$",
            OldPrice: "5.00",
            NewPrice: "4.00"
        },
        {
            ProductName: 'Girls t-shirt',
            ProductLink: '#',
            ProductImg: P3,
            CurrSym: "$",
            OldPrice: "5.00",
            NewPrice: "4.00"
        },
        {
            ProductName: 'woolen hat for men',
            ProductLink: '#',
            ProductImg: P4,
            CurrSym: "$",
            OldPrice: "5.00",
            NewPrice: "4.00"
        },
        {
            ProductName: 'woolen hat for men',
            ProductLink: '#',
            ProductImg: P5,
            CurrSym: "$",
            OldPrice: "5.00",
            NewPrice: "4.00"
        },
        {
            ProductName: 'Girls t-shirt',
            ProductLink: '#',
            ProductImg: P6,
            CurrSym: "$",
            OldPrice: "5.00",
            NewPrice: "4.00"
        },
        {
            ProductName: 'baby fabric shoes',
            ProductLink: '#',
            ProductImg: P7,
            CurrSym: "$",
            OldPrice: "5.00",
            NewPrice: "4.00",
        },
    ]
    return (
        <div class="ec-sb-pro-sl">
        {
            SellerData.map((d, i) => {
                const { ProductName, ProductLink, ProductImg, CurrSym, OldPrice, NewPrice } = d;
                return (
                    <div className="ec-sb-pro-sl">
                        <div>
                            <div className="ec-sb-pro-sl-item">
                                <Link href={ProductLink} className="sidekka_pro_img"><Image src={ProductImg} alt={ProductName} /></Link>
                                <div className="ec-pro-content">
                                    <h5 className="ec-pro-title"><Link to={ProductLink}>{ProductName}</Link></h5>
                                    <div className="ec-pro-rating">
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                        <i className="ecicon eci-star fill"></i>
                                    </div>
                                    <span className="ec-price">
                                        <span className="old-price">{CurrSym}{OldPrice}</span>
                                        <span className="new-price">{CurrSym}{NewPrice}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </div>
    );
}
