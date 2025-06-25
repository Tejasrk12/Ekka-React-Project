import React, {useState} from 'react';
import PaymentIcon from '../assets/images/icons/payment.png';
import { Image } from 'react-bootstrap';

export default function FooterImg() {
    const [PaymentImg] = useState([
        {
            img:PaymentIcon,
        }
    ])
    return (
        <>
            <div className="payment-link">
                {
                    PaymentImg.map((d,i)=>{
                        return(
                            <>
                            <Image src={d.img}/>
                            </>
                        )
                    })
                }
                
            </div>
        </>
    )
}


