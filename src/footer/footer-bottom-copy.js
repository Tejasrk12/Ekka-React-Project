import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function FooterBottomCopy() {
    const [footerCopy] = useState([
        {
            text: "Copyright © 2024",
            link: "#",
            name: "ekka",
            text2: "All Rights Reserved"
        }
    ])
    return (
        <>
            {
                footerCopy.map((d, i) => {
                    const {text, link, name, text2} = d;
                    return (
                        <>
                            <div className="ec-copy">{text}
                                <Link className="site-name text-upper" to={link}> {name} </Link> {text2}
                            </div>
                        </>
                    );
                })
            }

        </>
    )
}


