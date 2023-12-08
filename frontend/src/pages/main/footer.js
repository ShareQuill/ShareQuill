import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Mainfooter() {
  return (
    <footer className='text-center text-lg-start p-4 footercontainer'>
      <Container className='text-center text-md-start'>
        <Row className='mt-3'>
          <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='foo_text_header text-uppercase mb-3'>
              Company name
            </h6>
            <p className='foo_text'>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </Col>

          <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='foo_text_header text-uppercase mb-3'>About ShareQuill</h6>
            <p>
              <a href='/' className='foo_text'>
                About Us
              </a>
            </p>
            <p>
              <a href='/' className='foo_text'>
                How it Works
              </a>
            </p>
          </Col>

          <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='foo_text_header text-uppercase mb-3'>Questions</h6>
            <p>
              <a href='/' className='foo_text'>
                Contact Us
              </a>
            </p>
            <p>
              <a href='/' className='foo_text'>
                FAQs
              </a>
            </p>
          </Col>

          <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='foo_text_header text-uppercase mb-3'>Legal</h6>
            <p>
              <a href='/' className='foo_text'>
                Terms of Use
              </a>
            </p>
            <p>
              <a href='/' className='foo_text'>
                Privacy Policy
              </a>
            </p>
          </Col>

          <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='foo_text_header text-uppercase mb-3'>Other</h6>
            <p>
              <a href='/' className='foo_text'>
                Careers
              </a>
            </p>
            <p>
              <a href='/' className='foo_text'>
                Blog
              </a>
            </p>
          </Col>
        </Row>
        <div className='foo_text_header'>
        © 2021 Copyright
        <a className='text-reset fw-bold'>
          ShareQuill
        </a>
        </div>
      </Container>
    </footer>
  );
}