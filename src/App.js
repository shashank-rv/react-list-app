import Customer from './components/Customers'
import Button from './components/Button'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useState,useEffect } from 'react';

function App() {

  const fetchCustomers = async() => {

      const res = await fetch('http://localhost:8000/test')
      const data = await res.json()

      //const data1 = JSON.parse(data)

      //const data2 = data1.map((i) => {return i.name})

      console.log(data)
      return data

    }

    fetchCustomers();


  // const [tasks,setTasks] = useState([])



  // useEffect(() => {

  //   const getTasks = async() => {

  //     const tasksFromServer = await fecthTasks()
  //     setTasks(tasksFromServer)

  //   }

  //   getTasks()

  // },[])

  // const fecthTasks = async() => {

  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data


  // }

  
  //fetchCustomers();

  //console.log(x);

  //  const x = [{"id": 1, "name": "shashank"}, {"id": 2, "name": "blah"}]

  //  x.map((i) => {console.log(i)})

  //fetchCustomers();
  
  return (
    <Container className="p-2" fluid>
      <Row>
        <Col sm="4">
          <Form>
            {/* First List */}
            <Row className="p-2 bg-light">
              Customers
              <Customer title = "hello" />
              <h1>{fetchCustomers()}</h1>
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
