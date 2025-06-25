import React,{useState} from 'react';
import { Link } from 'react-router-dom';



export default function FooterMenuBox({menu:{Title, MenuLink}}) {
    return (
        <>
            <h4 className="ec-footer-heading">{Title}</h4>
            <div className="ec-footer-links">
                <ul className="align-items-center">
                    {
                        MenuLink.map((d,i)=>{
                            return(
                                <>
                                    <li className="ec-footer-link"><Link to={d.link}>{d.name}</Link></li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

