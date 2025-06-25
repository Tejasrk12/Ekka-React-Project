import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeaderUserIcon() {
    const [UserBox] = useState([
        {
            name: 'Register',
            link: '#'
        },
        {
            name: 'Checkout',
            link: '#'
        },
        {
            name: 'Login',
            link: '#'
        }
    ]);

    return (
        <>
            <Button className="dropdown-toggle" data-bs-toggle="dropdown"><i className="fi-rr-user"></i></Button>
            <ul className="dropdown-menu dropdown-menu-right">
                {
                    UserBox.map((d, i) => {
                        return (
                            <li><Link className="dropdown-item" href={d.link}>{d.name}</Link></li>
                        );
                    })
                }
            </ul>
        </>
    )
}
