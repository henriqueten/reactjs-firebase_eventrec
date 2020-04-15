import React from "react";

import { Card, Button } from "react-bootstrap";

import Logo from "../../../image/logo.png";

import "./styles.css";

export default function EventPost() {
    return (<>
        <Card style={{ width: '18rem' }} className="justCard">
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
      </Card.Text >
                <div className="text-center">
                    <Button className="btnColor">Go somewhere</Button>
                </div>
            </Card.Body>
        </Card></>);
}