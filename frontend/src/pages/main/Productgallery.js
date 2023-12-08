import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Productgallery() {
    return (
        <>
            <div>
                <Container className="d-flex justify-content-center imagecontainer">
                    <Image className="mainposter" src="https://wallpapercave.com/wp/wp6323360.jpg" fluid />
                </Container>
            </div>
        </>
    );
}
