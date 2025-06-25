import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function HeaderSearch() {
    return (
        <>
            <Form className="ec-btn-group-form" action="#">
                <Form.Control className="form-control ec-search-bar" placeholder="Search products..." type="text" name="firstName" />
                <Button className="submit" type="submit"><i className="fi-rr-search"></i></Button>
            </Form>
        </>
    )
}


