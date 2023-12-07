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
        <>
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
        </>
    ))}
    </div>
  );
}

export default ProductCard;