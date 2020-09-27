import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Room.css";
import hotelImg1 from "../../Image/Rectangle 26.png";
import hotelImg2 from "../../Image/Rectangle 27.png";
import hotelImg3 from "../../Image/Rectangle 28.png";
import starImg from "../../Icon/star_1_.png";
import mapImg from "../../Image/Map.png";

const Room = () => {
  const { bookRoom } = useParams();
  return (
    <div className="room">
      <Row>
        <Col className="text-dark">
          <p className="text-muted">252 stays Apr 13-17 3 guests</p>
          <h3 className="text-bold">Stay in {bookRoom}</h3>
          <Row className="room-body">
            <Col sm={6} className="text-dark">
              <img src={hotelImg1} alt="" />
            </Col>
            <Col sm={6} className="text-dark">
              <h6>Light bright airy stylish apt & safe peaceful stay</h6>
              <small>4 guests 2 bedrooms 2 beds 2 baths</small>
              <br />
              <small>Wif Air conditioning Kitchen</small>
              <br />
              <small>Cancellation fexibility availiable</small>
              <br />
              <small>
                <img style={{ height: "20px" }} src={starImg} alt="" />
                <span style={{ marginLeft: "10px" }} className="text-dark">
                  4.9 (20)
                  <span style={{ marginLeft: "10px" }} className="text-dark">
                    $34
                  </span>
                  /night
                </span>
              </small>
            </Col>
          </Row>
          <Row className="room-body">
            <Col sm={6} className="text-dark">
              <img src={hotelImg2} alt="" />
            </Col>
            <Col sm={6} className="text-dark">
              <h6>Apartment in Lost Panorama</h6>
              <small>4 guests 2 bedrooms 2 beds 2 baths</small>
              <br />
              <small>Wif Air conditioning Kitchen</small>
              <br />
              <small>Cancellation fexibility availiable</small>
              <br />
              <small>
                <img style={{ height: "20px" }} src={starImg} alt="" />
                <span style={{ marginLeft: "10px" }} className="text-dark">
                  4.8 (10)
                  <span style={{ marginLeft: "10px" }} className="text-dark">
                    $52
                  </span>
                  /night
                </span>
              </small>
            </Col>
          </Row>
          <Row className="room-body">
            <Col sm={6} className="text-dark">
              <img src={hotelImg3} alt="" />
            </Col>
            <Col sm={6} className="text-dark">
              <h6>AR Lounge & Pool (r&r + b&b)</h6>
              <small>4 guests 2 bedrooms 2 beds 2 baths</small>
              <br />
              <small>Wif Air conditioning Kitchen</small>
              <br />
              <small>Cancellation fexibility availiable</small>
              <br />
              <small>
                <img style={{ height: "20px" }} src={starImg} alt="" />
                <span style={{ marginLeft: "10px" }} className="text-dark">
                  4.9 (25)
                  <span style={{ marginLeft: "10px" }} className="text-dark">
                    $44
                  </span>
                  /night
                </span>
              </small>
            </Col>
          </Row>
        </Col>
        <Col className="text-dark room-bottom">
          <img src={mapImg} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Room;
