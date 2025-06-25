import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function ShowAllLink({link, name}) {
  return (
    <Col sm={12} className="shop-all-btn"><Link href={link}>{name}</Link></Col>
  )
}


