import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function OurTopCollectionFilter() {
    const [CollectionFilter] = useState([
        {
            name:"For All",
            link:"#tab-pro-for-all",
        },
        {
            name:"For Men",
            link:"#tab-pro-for-men",
        },
        {
            name:"For Women",
            link:"#tab-pro-for-women",
        },
        {
            name:"For Children",
            link:"#tab-pro-for-child",
        },
    ])
    const[isActive, seIsActive] = useState(false);
    const toggleActive = ()=>{
        seIsActive(!isActive);
    }
    return (
        <>
        {
            CollectionFilter.map((d,i)=>{
                const {name, link} = d;
                if(i==0){
                    var active="active"
                }
                return(
                    <>
                        <li className="nav-item">
                            <Link  className={`nav-link ${active}` } onClick={toggleActive} data-bs-toggle="tab" to={link}>{name}</Link>
                        </li>
                    </>
                )
            })
        }
        </>
    )
}


{/* <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tab-pro-for-all">For All</a></li>
<li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-men">For Men</a></li>
<li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-women">For Women</a></li>
<li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tab-pro-for-child">For Children</a></li> */}
