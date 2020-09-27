import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import FakeData from "../../FakeData/FakeData";
import "./Booking.css";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { startBooking } = useParams();
  const [place] = useState(FakeData);
  const [travelPlace, setTravelPlace] = useState([]);

  useEffect(() => {
    const currentPlace = place.find((place) => place.name.toLocaleLowerCase() === startBooking);
    setTravelPlace(currentPlace);
  }, []);

  return (
    <div className="booking">
      <Row style={{ display: "flex" }}>
        <Col sm={7} className="pr-4">
          <h1 className="place-title">{travelPlace.name}</h1>
          <p>{travelPlace.description}</p>
        </Col>
        <Col sm={5} className="start-booking">
          <Form>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-muted">Origin</Form.Label>
              <Form.Control className="font-weight-bold" type="text" placeholder="Enter your address" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-muted">Destination</Form.Label>
              <Form.Control
                className="font-weight-bold"
                type="text"
                placeholder="Enter your destination"
                value={travelPlace.name}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="text-muted">From</Form.Label>
                <DatePicker
                  className="text-dark dateStyle"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="text-muted">To</Form.Label>
                <DatePicker
                  className="text-dark dateStyle"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              </Form.Group>
            </Form.Row>
            <Link to={`/room/${travelPlace.name}`}>
              <Button variant="warning" type="submit" size="large" block>
                Start Booking
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
