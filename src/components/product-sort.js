import React, { useState } from 'react'

export default function ProductSort() {
    const [SortData] = useState([
        {value:"1", name:"Relevance"},
        {value:"2", name:"Name, A to Z"},
        {value:"3", name:"Name, Z to A"},
        {value:"4", name:"Price, low to high"},
        {value:"5", name:"Price, high to low"}
    ])
    return (
        <select name="ec-select" id="ec-select">
            <option selected disabled>Position</option>
            {
                SortData.map((d,i)=>{
                    const{value, name} = d;
                    return(
                        <>
                            <option value={value}>{name}</option>
                        </>
                    )
                })
            }
        </select>
    )
}


