import React from 'react';
import { Card } from 'react-bootstrap';

const ProductItem = (props) => {
    const { productName, price, rating, discount, availability } = props;

    return (
        <Card className="my-3">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt={productName} />
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                    <strong>Price:</strong> ${price}<br />
                    <strong>Rating:</strong> {rating}<br />
                    <strong>Discount:</strong> {discount}%<br />
                    <strong>Availability:</strong> {availability}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
