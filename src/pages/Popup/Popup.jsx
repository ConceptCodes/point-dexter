import React from 'react';
import './Popup.css';

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const Popup = () => {
  return (
    <div className="App">
      <Container>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
            Knowledge Base
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default Popup;
