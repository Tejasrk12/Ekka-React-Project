import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../assets/images/logo/logo.png'
import DarkLogo from '../assets/images/logo/dark-logo.png'
import { Link } from 'react-router-dom'

export default function HeaderLogo() {
    return (
        <>
            <Link to="#">
                <Image src={Logo} alt="Site Logo" />
                <Image src={DarkLogo} className="dark-logo" alt="Site Logo" style={{ display: "none" }} />
            </Link>
        </>
    )
}