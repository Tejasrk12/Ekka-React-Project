import React, { useState } from 'react';
import ImgBan1 from '../assets/images/menu-banner/1.jpg'
import ImgBan2 from '../assets/images/menu-banner/2.jpg'
import ImgBan3 from '../assets/images/menu-banner/3.jpg'
import ImgBan4 from '../assets/images/menu-banner/4.jpg'
import { Link } from 'react-router-dom';

export default function HeaderMenuDesk() {
    const walkerMenu = [
        { name: 'Home', link: '/', hasChildrens: false, multiColumnMenu: false, singleColumnMenu: false },
        { name: 'Shop', link: '/shop', hasChildrens: false, multiColumnMenu: false, singleColumnMenu: false },
        { name: 'Product Page', link: '/product-page', hasChildrens: false, multiColumnMenu: false, singleColumnMenu: false },
        {
            name: 'Categories',
            link: '#',
            hasChildrens: true,
            multiColumnMenu: true,
            singleColumnMenu: false,
            level: [
                {
                    name: 'Product page', link: '#',
                    levelMenu: [
                        { name: 'Product 1', link: '#' },
                        { name: 'Product 2', link: '#' },
                        { name: 'Product 2', link: '#' },
                    ],
                    imgBanner: ImgBan1,
                },
                {
                    name: 'Product 360', link: '#',
                    levelMenu: [
                        { name: '360 left sidebar', link: '#' },
                        { name: '360 right sidebar', link: '#' },
                        { name: '360 right sidebar', link: '#' },
                    ],
                    imgBanner: ImgBan2,
                },
                {
                    name: 'classic menu page', link: '#',
                    levelMenu: [
                        { name: 'Product 1', link: '#' },
                        { name: 'Product 1', link: '#' },
                        { name: 'Product 1', link: '#' },
                    ],
                    imgBanner: ImgBan3,
                },
                {
                    name: 'variation menu page', link: '#',
                    levelMenu: [
                        { name: '360 left sidebar', link: '#' },
                        { name: '360 left sidebar', link: '#' },
                        { name: '360 left sidebar', link: '#' },
                    ],
                    imgBanner: ImgBan4,
                },
            ]
        },
        {
            name: 'Products',
            link: '#',
            hasChildrens: true,
            multiColumnMenu: false,
            singleColumnMenu: true,
            level: [
                {
                    name: 'Product 1',
                    link: '#',
                    hasChildrens: true,
                    levelMenu: [
                        { name: 'Product 1', link: '#' },
                        { name: 'Product 2', link: '#' },
                        { name: 'Product 3', link: '#' },
                    ],
                },
                { name: 'Product 2', link: '#' },
                { name: 'Product 3', link: '#' },
                {
                    name: 'Product 4',
                    link: '#',
                    hasChildrens: true,
                    levelMenu: [
                        { name: 'Product 1', link: '#' },
                        { name: 'Product 2', link: '#' },
                        { name: 'Product 3', link: '#' },
                    ],
                },
                { name: 'Product 5', link: '#' },
            ]
        },
        {
            name: "Pages",
            link: '#',
            hasChildrens: true,
            signleColumnMenuBasic: true,
            multiColumnMenu: false,
            level: [
                { name: 'Product 1', link: '#' },
                { name: 'Product 2', link: '#' },
                { name: 'Product 3', link: '#' },
                { name: 'Product 4', link: '#' },
                { name: 'Product 5', link: '#' },
            ]
        },
        { name: 'Hot Offers', link: '#', hasChildrens: false, multiColumnMenu: false, singleColumnMenu: false },
        {
            name:"Scroll To Section",
            hasChildrens: true,
            singleColumnMenuScroll: true,
            multiColumnMenu: false,
            level:[
                {name:"Top Collection", link:'javascript:void(0)', dataScrollName:'collection'},
                {name:"Categories", link:'javascript:void(0)', dataScrollName:'categories'},
                {name:"Offers", link:'javascript:void(0)', dataScrollName:'offers'},
                {name:"Top Vendors", link:'javascript:void(0)', dataScrollName:'vendors'},
                {name:"Services", link:'javascript:void(0)', dataScrollName:'services'},
                {name:"New Arrivals", link:'javascript:void(0)', dataScrollName:'arrivals'},
                {name:"reviews", link:'javascript:void(0)', dataScrollName:'reviews'},
                {name:"Instagram Feed", link:'javascript:void(0)', dataScrollName:'insta'},
            ]
        }
    ]
    return (
        <>
            {/* Dev Start */}
            {
                walkerMenu.map((menu, i) => {
                    const { name, link, hasChildrens, multiColumnMenu, singleColumnMenu, signleColumnMenuBasic, singleColumnMenuScroll } = menu;
                    var menuItemOutput = null;
                    if (hasChildrens) {
                        if (multiColumnMenu) {
                            const { level, imgBanner } = menu;
                            menuItemOutput = (
                                <li class="dropdown position-static"><a href="javascript:void(0)">{name}</a>
                                    <ul class="mega-menu d-block">
                                        <li class="d-flex">
                                            {
                                                level.map((d, i) => {
                                                    const { name, levelMenu } = d;
                                                    return (
                                                        <ul class="d-block">
                                                            <li class="menu_title"><a href="javascript:void(0)">{name}</a></li>
                                                            {
                                                                levelMenu.map((d, i) => {
                                                                    const { name, link } = d;
                                                                    return (
                                                                        <li><Link to={link}>{name}</Link></li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </li>
                                        <li>
                                            <ul class="ec-main-banner w-100">
                                                {
                                                    level.map((d, i) => {
                                                        return (
                                                            <li><a class="p-0" href="#"><img class="img-responsive" src={d.imgBanner} /></a></li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </li>)
                        }
                        if (singleColumnMenu) {
                            const { level, hasChildrens } = menu;
                            if (hasChildrens) {
                                menuItemOutput = (
                                    <li className="dropdown"><a href="javascript:void(0)">{name}</a>
                                        <ul className="sub-menu">
                                            {
                                                level.map((d, i) => {
                                                    const { name, levelMenu, link, hasChildrens } = d;
                                                    var menuItemOutput = null;
                                                    if (hasChildrens) {
                                                        menuItemOutput = (
                                                            <li className="dropdown position-static">
                                                                <a href="javascript:void(0)">{name} <i className="ecicon eci-angle-right"></i></a>
                                                                <ul className="sub-menu sub-menu-child">
                                                                    {
                                                                        levelMenu.map((d, i) => {
                                                                            const { name, hasChildrens } = d;
                                                                            var menuItemOutput = null;
                                                                            if (hasChildrens) {
                                                                                menuItemOutput = (
                                                                                    <li><Link to={link}>{name}</Link></li>
                                                                                )
                                                                            } else {
                                                                                menuItemOutput = (
                                                                                    <li><Link to={link}>{name}</Link></li>
                                                                                )
                                                                            }
                                                                            return (menuItemOutput)
                                                                        })
                                                                    }
                                                                </ul>

                                                            </li>
                                                        );
                                                    } else {
                                                        menuItemOutput = (
                                                            <li className="dropdown position-static">
                                                                <a href="javascript:void(0)">{name}</a></li>
                                                        );
                                                    }
                                                    return (menuItemOutput);
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            }
                        }
                        if (signleColumnMenuBasic) {
                            const { level, hasChildrens } = menu;
                            if (hasChildrens) {
                                menuItemOutput = (
                                <li className="dropdown"><a href="javascript:void(0)">{name}</a>
                                    <ul className="sub-menu">
                                    {
                                        level.map((d,i)=>{
                                            const{name,link} = d;

                                            return (
                                                <li><Link to={d.link}>{d.name}</Link></li>
                                            )
                                        })
                                    }

                                    </ul>
                                </li>
                        )
                            }
                        }
                        if(singleColumnMenuScroll){
                            const{level, hasChildrens} = menu;
                            if(hasChildrens){
                                menuItemOutput = (
                                    <li className="dropdown scroll-to"><a href="javascript:void(0)"><i className="fi fi-rr-sort-amount-down-alt"></i></a>
                                        <ul className="sub-menu">
                                            <li className="menu_title">{name}</li>
                                            {
                                                level.map((d,i)=>{
                                                    const{name, link, dataScrollName} = d;
                                                    return(
                                                        <li><Link to={link} data-scroll={dataScrollName} className="nav-scroll">{name}</Link></li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    
                                    </li>
                                )
                            }
                        }
                    } else {
                        menuItemOutput = (
                            <li><Link to={link}>{name}</Link></li>
                        )
                    }
                    return (menuItemOutput)
                })
            }
        </>
    )
}
