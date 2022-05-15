import Customer from './components/Customers'
import Button from './components/Button'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState,useEffect } from 'react';

function App() {

  const test = [];

  const x = fetch('http://localhost:8000/test')
              .then(res => res.json())
              .then(data => {

                      const data1 = JSON.parse(data);

                      //data1.map((i) => console.log(i.name))

                      data1.map((i) => test.push(i.name))

                      //console.log(data);
                    })


  //console.log(test);


  
  return (
    <Container className="p-2" fluid>
      <Row>
        <Col sm="4">
          <Form>
            {/* First List */}
            <Row className="p-2 bg-light">
              Customers
              <Customer title = "hello" />
            </Row>

            {/* Second List */}
            <Row className="p-2">
              Sites
            </Row>

            {/* Button */}
            <Row className="justify-content-end">
              <Col>
                  <Button />
              </Col>
            </Row>
          </Form>
        </Col>

        {/* Third section */}
        <Col sm="4">
          <Form>
            scans
          </Form>
        </Col>

        {/* First Sections */}
        <Col sm="4">
          <Form>
            images
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
