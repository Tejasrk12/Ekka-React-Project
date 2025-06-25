import React from 'react';
import { Link } from 'react-router-dom';



export default function Button({btn,clsname,href}) {
  return (
    <>
        <Link to={href} className={clsname}>{btn}</Link>
    </>
  )
}

