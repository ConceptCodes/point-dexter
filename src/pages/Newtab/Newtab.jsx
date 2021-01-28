import React from 'react';
import './Newtab.scss';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const Newtab = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Point Dexter
          </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="py-3">
          <Col sm="7"> 
            <Card className="shadow shadow-md">
              <Card.Header className="bg-dark text-white font-weight-bold">Knowledge Base</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="5">
            <Card>
              <Card.Body className="chat-log">
                <div class="chat-log">
                  <div class="chat-log__item">
                    <h3 class="chat-log__author">Felipe <small>14:30</small></h3>
                    <div class="chat-log__message">Yo man</div>
                  </div>
                  <div class="chat-log__item chat-log__item--own">
                    <h3 class="chat-log__author">Fabrício <small>14:30</small></h3>
                    <div class="chat-log__message">BRB</div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="What do you want to know next?"
                  aria-label="question"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="dark">Send</Button>
                </InputGroup.Append>
              </InputGroup> 
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newtab;
