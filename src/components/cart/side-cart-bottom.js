import React, { useState } from 'react';
import Button from '../button';
import { Table } from 'react-bootstrap';


export default function SideCartBottom() {
    const [CartTotal] = useState([
        {
            name: "Sub-Total",
            curSymbol: "$",
            price: "300.00"
        },
        {
            name: "VAT",
            VatPer: "20%",
            curSymbol: "$",
            price: "60.00"
        },
        {
            name: "Total",
            curSymbol: "$",
            price: "300.00"
        }
    ])
    return (
        <>
            <div className="cart-sub-total">
                <Table className="table cart-table">
                    <tbody>
                        {
                            CartTotal.map((d, i) => {
                                return (
                                    <tr>
                                        <td className="text-left">{d.name}</td>
                                        <td className="text-right">{d.curSymbol}{d.price}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="cart_btn">
                <Button href="#" btn={"View All"} clsname={"btn btn-primary"} />
                <Button href="#" btn={"Checkout"} clsname={"btn btn-secondary"} />
            </div>
        </>
    )
}
