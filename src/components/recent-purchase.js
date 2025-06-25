import React from 'react';
import PI1 from '../assets/images/product-image/1.jpg'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RecentPurchase() {
    const RecentPurchase = [
        {
            ProductImg: PI1,
            Text: "Someone in new just bought",
            ProductName: "Stylish baby shoes",
            Time: "10 Minutes ago"
        }
    ]
    return (
        <>
            {
                RecentPurchase.map((d, i) => {
                const{ProductImg,Text,ProductName,Time} = d
                return (
                    <div className="recent-purchase">
                        <Image src={ProductImg} />
                        <div className="detail">
                            <p>{Text}</p>
                            <h6>{ProductName}</h6>
                            <p>{Time}</p>
                        </div>

                        <Link href="javascript:void(0)" className="icon-btn recent-close">×</Link>
                    </div>
                )
                })
            }

        </>
    )
}


