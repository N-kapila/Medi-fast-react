import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Card, FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Appoinments() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div style={{ padding: "10px" }}>
      <h1>Appointments</h1>
      <Card className="m-5">
        <Card.Body>
          <Row className="mb-5 ">
            <Col sm={12} md={3} className="mb-4 mb-sm-0">
              <Card.Title className="text-start">Doctor name</Card.Title>
              <Form.Control type="text" placeholder="Enter Doctor Name" />
            </Col>

            <Col sm={12} md={3} className="mb-4 mb-sm-0">
              <Card.Title className="text-start">Specialization</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Select Specialization</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={3} className="mb-4 mb-sm-0">
              <Card.Title className="text-start">Hospital</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Select Hospital</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={3} className="mb-4 mb-sm-0 ">
              <Card.Title className="text-start">Date</Card.Title>
              <InputGroup className="w-100" style={{ display: "flex" }}>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  customInput={
                    <FormControl
                      placeholder="Select date"
                      style={{ flexGrow: 1 }}
                    />
                  }
                />
              </InputGroup>
            </Col>
          </Row>
          <Button variant="primary" className="w-50">
            Search
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Appoinments;
