import React, { useState } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import "./TravelDetails.css";
import img1 from "../../Image/Sajek.png";
import img2 from "../../Image/Sreemongol.png";
import img3 from "../../Image/sundorbon.png";
import { Link } from "react-router-dom";
import FakeData from "../../FakeData/FakeData";

const TravelDetails = () => {
  const [place] = useState(FakeData);
  return (
    <div className="travelDetails">
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col sm={7} className="place-text">
              <h1 className="place-title">COX'S BAZAR</h1>
              <p>
                Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern
                Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
              </p>
              <br />
              <Link to={`/booking/${place[0].name.toLocaleLowerCase()}`}>
                <Button variant="warning">Book Now</Button>
              </Link>
            </Col>
            <Col sm={5} className="place-img">
              <img className="d-block w-75" src={img1} alt="First slide" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col sm={7} className="place-text">
              <h1 className="place-title">SREEMANGAL</h1>
              <p>
                Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is
                famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its
                natural scenery is very charming. It soothes one’s eyes ...
              </p>
              <br />
              <Link to={`/booking/${place[1].name.toLocaleLowerCase()}`}>
                <Button variant="warning">Book Now</Button>
              </Link>
            </Col>
            <Col sm={5} className="place-img">
              <img className="d-block w-75" src={img2} alt="First slide" />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col sm={7} className="place-text">
              <h1 className="place-title">SUNDARBANS</h1>
              <p>
                The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and
                Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River ...
              </p>
              <br />
              <Link to={`/booking/${place[2].name.toLocaleLowerCase()}`}>
                <Button variant="warning">Book Now</Button>
              </Link>
            </Col>
            <Col sm={5} className="place-img">
              <img className="d-block w-75" src={img3} alt="First slide" />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TravelDetails;
