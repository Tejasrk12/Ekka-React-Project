import React, { useState } from 'react';
import P1 from '../assets/images/icons/dress-8.png'
import P2 from '../assets/images/icons/shoes-8.png'
import P3 from '../assets/images/icons/jewelry-8.png'
import P4 from '../assets/images/icons/perfume-8.png'
import P5 from '../assets/images/icons/cosmetics-8.png'
import P6 from '../assets/images/icons/glasses-8.png'
import { Link } from 'react-router-dom';


export default function SidebarCategory({ handleToggleClick }) {
    const CategoryData = [
        {
            ProductCategory: "Clothes",
            ProductImg: P1,
            level: [
                { ProductName: "Shirt", AvailableStock: "25", link: "#" },
                { ProductName: "Shorts & Jeans", AvailableStock: "52", link: "#" },
                { ProductName: "Jacket", AvailableStock: "500", link: "#" },
                { ProductName: "Dress & Frock", AvailableStock: "35", link: "#" },
            ]
        },
        {
            ProductCategory: "Footwear",
            ProductImg: P2,
            level: [
                { ProductName: "Shirt", AvailableStock: "25", link: "#" },
                { ProductName: "Shorts & Jeans", AvailableStock: "52", link: "#" },
                { ProductName: "Jacket", AvailableStock: "500", link: "#" },
                { ProductName: "Dress & Frock", AvailableStock: "35", link: "#" },
            ]
        },
        {
            ProductCategory: "Jewelry",
            ProductImg: P3,
            level: [
                { ProductName: "Shirt", AvailableStock: "25", link: "#" },
                { ProductName: "Shorts & Jeans", AvailableStock: "52", link: "#" },
                { ProductName: "Jacket", AvailableStock: "500", link: "#" },
                { ProductName: "Dress & Frock", AvailableStock: "35", link: "#" },
            ]
        },
        {
            ProductCategory: "Perfume",
            ProductImg: P4,
            level: [
                { ProductName: "Shirt", AvailableStock: "25", link: "#" },
                { ProductName: "Shorts & Jeans", AvailableStock: "52", link: "#" },
                { ProductName: "Jacket", AvailableStock: "500", link: "#" },
                { ProductName: "Dress & Frock", AvailableStock: "35", link: "#" },
            ]
        },
        {
            ProductCategory: "Cosmetics",
            ProductImg: P5,
            level: [
                { ProductName: "Shirt", AvailableStock: "25", link: "#" },
                { ProductName: "Shorts & Jeans", AvailableStock: "52", link: "#" },
                { ProductName: "Jacket", AvailableStock: "500", link: "#" },
                { ProductName: "Dress & Frock", AvailableStock: "35", link: "#" },
            ]
        },
        {
            ProductCategory: "Glasses",
            ProductImg: P6,
            level: [
                { ProductName: "Shirt", AvailableStock: "25", link: "#" },
                { ProductName: "Shorts & Jeans", AvailableStock: "52", link: "#" },
                { ProductName: "Jacket", AvailableStock: "500", link: "#" },
                { ProductName: "Dress & Frock", AvailableStock: "35", link: "#" },
            ]
        }
    ]

    return (
        <>
            <div className="ec-sidebar-wrap">
                {/* <!-- Sidebar Category Block --> */}
                <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                        <h3 className="ec-sidebar-title">Category<button className="ec-close" onClick={() => handleToggleClick()}>×</button></h3>
                    </div>
                    {
                        CategoryData.map((d, i) => {
                            const { ProductCategory, ProductImg,level } = d;
                            return (
                                <div className="ec-sb-block-content">
                                    <ul>
                                        <li>
                                            <div className="ec-sidebar-block-item"><img src={ProductImg} className="svg_img" alt="drink" />{ProductCategory}</div>
                                            <ul style={{ display: i==0 ?'block':"none" }}>
                                                {
                                                    level.map((d, i) => {
                                                        const { ProductName, AvailableStock, link } = d;
                                                        return (
                                                            <li>
                                                                <div className="ec-sidebar-sub-item"><Link href={link}>{ProductName}  <span title="Available Stock">- {AvailableStock}</span></Link>
                                                                </div>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
                {/* <!-- Sidebar Category Block --> */}
            </div>
        </>
    )
}


