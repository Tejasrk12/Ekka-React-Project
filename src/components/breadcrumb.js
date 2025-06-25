import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

export default function Breadcrumb({PageTitle, HomePage, ActivePage}) {
    return (
        <Row className="ec_breadcrumb_inner">
            <Col md={6} sm={12}>
                <h2 className="ec-breadcrumb-title">{PageTitle}</h2>
            </Col>
            <Col md={6} sm={12}>
                {/* <!-- ec-breadcrumb-list start --> */}
                <ul className="ec-breadcrumb-list">
                    <li className="ec-breadcrumb-item"><Link to="/">{HomePage}</Link></li>
                    <li className="ec-breadcrumb-item active">{ActivePage}</li>
                </ul>
                {/* <!-- ec-breadcrumb-list end --> */}
            </Col>
        </Row>
    )
}

