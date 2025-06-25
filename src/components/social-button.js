import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialButton({social}) {
    return (
        <>
            {
                social && social.map((d,i)=>{
                    return(
                        <li className={`list-inline-item ${d.name}`}>
                            <Link className={`hdr-${d.name}`} to={d.link}>{d.icon}</Link>
                        </li>
                    );
                })
            }
        </>
    )
}
