import React, {useState} from 'react'

export default function FooterOffer() {
    const [footerOffer] = useState([
        {
            text: "Win a contest! Get this limited-editon",
            linkName: "View Detail",
            link: "#",
        }
    ])
    return (
        <>
        {
            footerOffer.map((d,i) => {
                const{text, linkName, link} = d;
                return (
                    <div className="text-center footer-off-msg">
                        <span>{text}</span><a href={link} target="_blank">{linkName}</a>
                    </div>
                );
            })
        }
        </>
    )
}


