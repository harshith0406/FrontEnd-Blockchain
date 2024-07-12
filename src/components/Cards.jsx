import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./style.css"; // Make sure to add your styles here

function Cards({ title, imgSrc, text }) {
  return (
    <Card
      className="text-center content-text"
      style={{ width: "22rem", margin: "1rem", height: "25rem" }}
    >
      <Card.Body>
        <Image
          src={imgSrc}
          rounded
          className="mb-3"
          style={{ height: "150px" }}
        />
        <Card.Title style={{ padding: "20px" }}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
