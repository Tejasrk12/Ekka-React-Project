import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TopHeaderMenu() {
    const [DropValue] = useState([
        {
            dropName: 'Currency',
            dropValue: ["USD $", "EUR €"]
        },
        {
            dropName: 'Language',
            dropValue: ["English", "Italiano"]
        }
    ])

    return (
        <>
            {/* <!-- Currency Start --> */}
            {
                DropValue.map((d, i) => {
                    const { dropName, dropValue } = d;
                    return (
                        <div className="header-top-curr dropdown">
                            <button className="dropdown-toggle text-upper" data-bs-toggle="dropdown">{dropName} <i className="ecicon eci-caret-down" aria-hidden="true"></i></button>
                            <ul className="dropdown-menu">
                                {
                                    dropValue.map((d,i)=>{
                                        return(
                                            <li className="active"><Link className="dropdown-item" to="#">{d}</Link></li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    )

                })
            }
        </>
    )
}
