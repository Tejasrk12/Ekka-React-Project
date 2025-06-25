import React, { useState } from 'react';
import NI from '../assets/images/banner/newsletter.png';
import { Form, Button, Row, Col } from 'react-bootstrap';



export default function PopupNews() {
    const [SubscribePopup] = useState([
        {
            Title: "Subscribe Newsletter",
            Text: "Subscribe the ekka ecommerce to get in touch and get the future update.",
            ButtonName: "Subscribe",
            NewsletterImg: NI
        }
    ])
    return (
        <>
            <div id="ec-popnews-close"><i className="ecicon eci-close"></i></div>

            {
                SubscribePopup.map((d, i) => {
                    const{Title,Text,ButtonName,NewsletterImg} = d;
                    return (
                        <>
                            <Row>
                                <Col md={6} className="disp-no-767">
                                    <img src={NewsletterImg} alt={Title} />
                                </Col>
                                <Col md={6}>
                                    <div id="ec-popnews-box-content">
                                        <h2>{Title}</h2>
                                        <p>{Text} </p>
                                        <Form id="ec-popnews-form" action="#" method="post">
                                            <Form.Control type="email" name="newsemail" placeholder="Email Address" required />
                                            <Button type="button" className="btn btn-primary" name="subscribe">{ButtonName}</Button>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </>
                    )
                })
            }

        </>
    )
}


