import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function FooterNewsletterBox() {
    const [FooterNewsletter] = useState([
        {
            Title: 'Newsletter',
            Text: 'Get instant updates about our new products and special promos!',

        }
    ])
    return (
        <>
            {
                FooterNewsletter.map((d, i) => {
                    const{Title,Text} = d;
                    return (
                        <>
                            <h4 className="ec-footer-heading">{Title}</h4>
                            <div className="ec-footer-links">
                                <ul className="align-items-center">
                                    <li className="ec-footer-link">{Text}</li>
                                </ul>
                                <div className="ec-subscribe-form">
                                    <Form id="ec-newsletter-form" name="ec-newsletter-form" method="post" action="#">
                                        <div id="ec_news_signup" className="ec-form">
                                            <Form.Control className="ec-email" type="email" required="" placeholder="Enter your email here..." name="ec-email" value="" />
                                            <Button id="ec-news-btn" className="button btn-primary" type="submit" name="subscribe" value="">
                                                <i className="ecicon eci-paper-plane-o" aria-hidden="true"></i>
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}


