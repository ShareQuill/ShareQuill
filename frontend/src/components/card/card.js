import React from 'react';
import { Tilt } from 'react-tilt';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
    const items = [
        {
          title: 'Item 1',
          img: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg',
          description: 'Description for Item 1. This is a sample description.',
        },
        {
          title: 'Item 2',
          img: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg',
          description: 'Description for Item 2. This is another sample description.',
        },
        {
          title: 'Item 3',
          img: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg',
          description: 'Description for Item 3. Yet another sample description.',
        },
        {
          title: 'Item 4',
          img: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg',
          description: 'Description for Item 4. Yet another sample description.',
        },
      ];
      return (
        <div className='container d-flex space-between'>
          {items.map((product, index) => (
            <Tilt key={index} options={{ max: 25, perspective: 1000, scale: 1.1 }}>
              <Card className='card-display m-md-4 position-relative'>
                <Card.Img variant="top" src={product.img} />
                <Card.Body className=''>
                  <Card.Title className='d-inline'>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button className='btn btn-outline-light btn-float' variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Tilt>
          ))}
        </div>
  );
}

export default ProductCard;