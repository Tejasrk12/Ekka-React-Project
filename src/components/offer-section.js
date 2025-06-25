import React, { useState } from 'react';
import OB from '../assets/images/offer-image/1.png';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function OfferSection() {
    const [OfferBanner] = useState([
        {
            OfferTitle: 'Sunglasses',
            OfferSubTitle: "Super Offer",
            OfferBanner: OB,
            OfferDesc: "Acetate Frame Sunglasses",
            OfferPrice: "$40.00 Only",
            OfferBtn: "Shop Now"
        }
    ])
    return (
        <>
            {
                OfferBanner.map((d,i) => {
                    const{OfferTitle,OfferSubTitle,OfferBanner,OfferDesc,OfferPrice,OfferBtn} = d;
                    return (
                        <>
                            <h2 className="ec-offer-title">{OfferTitle}</h2>
                            <h3 className="ec-offer-stitle" data-animation="slideInDown">{OfferSubTitle}</h3>
                            <span className="ec-offer-img" data-animation="zoomIn">
                                <Image src={OfferBanner} alt={OfferTitle} /></span>
                            <span className="ec-offer-desc">{OfferDesc}</span>
                            <span className="ec-offer-price">{OfferPrice}</span>
                            <Link className="btn btn-primary" to="#" data-animation="zoomIn">{OfferBtn}</Link>
                        </>
                    )
                })
            }

        </>
    )
}

