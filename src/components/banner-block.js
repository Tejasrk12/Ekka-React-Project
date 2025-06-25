import React, {useState} from 'react';
import BI1 from '../assets/images/banner/2.jpg';
import BI2 from '../assets/images/banner/3.jpg';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
export default function BannerBlock() {
    const[BannerData] = useState([
        {
            BannerStitle:"New Arrivals",
            BannerTitle:<>Mens <br/>Sport Shoes</>,
            Discount:"30 % Discount",
            DataAnimation:"slideInRight",
            BannerImg: BI1,
            ButtonName:"Order Now",
            ButtonUrl: "#"
        },
        {
            BannerStitle:"New Trending",
            BannerTitle:<>Smart <br/> Watches</>,
            Discount: <>Buy any 3 Items & get <br/>20% Discount</>,
            DataAnimation:"slideInLeft",
            BannerImg: BI2,
            ButtonName:"Order Now",
            ButtonUrl: "#"
        }
    ])
    return (
        <>
            {
                BannerData.map((d,i)=>{
                    const{BannerStitle,BannerTitle,Discount,DataAnimation,BannerImg,ButtonName,ButtonUrl} = d;
                    return(
                        <>
                            <Col lg={6} md={12} className="banner-block margin-b-30" data-animation={DataAnimation}>
                                <div className="bnr-overlay">
                                    <img src={BannerImg} alt="" />
                                    <div className="banner-text">
                                        <span className="ec-banner-stitle">{BannerStitle}</span>
                                        <span className="ec-banner-title">{BannerTitle}</span>
                                        <span className="ec-banner-discount">{Discount}</span>
                                    </div>
                                    <div className="banner-content">
                                        <span className="ec-banner-btn">
                                            <Link to={ButtonUrl}>{ButtonName}</Link>
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </>
                    )
                })
            }
        </>
    )
}

