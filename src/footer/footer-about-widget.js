import React, { useState } from 'react';
import fl from '../assets/images/logo/footer-logo.png'
import { Link } from 'react-router-dom';

export default function FooterAboutWidget() {
    const [FooterAbout] = useState([
        {
            FLogo: fl,
            FTitle: "Contact us",
            FAddress: "71 Pilgrim Avenue Chevy Chase, east california.",
            FCallText: "Call Us:",
            FCallNo: "+440123456789",
            FEmailText: "Email:",
            FEmailID: "example@ec-email.com"
        }
    ])
    return (
        <>
            <div className="ec-footer-widget">
                {
                    FooterAbout.map((d, i) => {
                        const{FLogo,FTitle, FAddress,FCallText,FCallNo,FEmailText,FEmailID} = d;
                        return (
                            <>
                                <div className="ec-footer-logo">
                                    <Link to="#"><img src={FLogo} alt="" /></Link></div>
                                <h4 classNameName="ec-footer-heading">{FTitle}</h4>
                                <div classNameName="ec-footer-links">
                                    <ul className="align-items-center">
                                        <li className="ec-footer-link">{FAddress}</li>
                                        <li className="ec-footer-link"><span>{FCallText}</span><a href="tel:+440123456789">{FCallNo}</a></li>
                                        <li className="ec-footer-link"><span>{FEmailText}</span><a href="mailto:example@ec-email.com">{FEmailID}</a></li>
                                    </ul>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
