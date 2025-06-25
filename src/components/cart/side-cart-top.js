import React,{useState} from 'react';
import PI1 from '../../assets/images/product-image/6_1.jpg'
import PI2 from '../../assets/images/product-image/12_1.jpg'
import PI3 from '../../assets/images/product-image/3_1.jpg'
import Button from '../button';

export default function SideCartTop({handleToggleClick}) {
    const [CartData] = useState([
        {
            ProductName: 'T-shirt For Women',
            ProductUrl: "#",
            ProductImg: PI1,
            CurrSymbol: "$",
            ProductPrice: "76.00",
            ProductQunt: "1",
        },
        {
            ProductName: 'Women Leather Shoes',
            ProductUrl: "#",
            ProductImg: PI2,
            CurrSymbol: "$",
            ProductPrice: "$64.00",
            ProductQunt: "1",
        },
        {
            ProductName: 'Girls Nylon Purse',
            ProductUrl: "#",
            ProductImg: PI3,
            CurrSymbol: "$",
            ProductPrice: "$59.00",
            ProductQunt: "1",
        }
    ])
    return (
        <>
            <div className="ec-cart-title">
                <span className="cart_title">My Cart</span>
                <button className="ec-close" onClick={()=>handleToggleClick()}>×</button>
            </div>
            <ul className="eccart-pro-items">
                {
                    CartData.map((d, i) => {
                        return (
                            <li>
                                <a href={d.ProductUrl} className="sidekka_pro_img"><img
                                    src={d.ProductImg} alt="product" /></a>
                                <div className="ec-pro-content">
                                    <a href={d.ProductUrl} className="cart_pro_title">{d.ProductName}</a>
                                    <span className="cart-price"><span>{d.CurrSymbol}{d.ProductPrice}</span> x {d.ProductQunt}</span>
                                    <div className="qty-plus-minus">
                                        <div class="dec ec_qtybtn">-</div>
                                        <input className="qty-input" type="text" name="ec_qtybtn" value="1" />
                                        <div class="inc ec_qtybtn">+</div>
                                    </div>
                                    <a href="javascript:void(0)" className="remove">×</a>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}