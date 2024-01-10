import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { image, model_name, car_model, color, number_plate, day_rent_rate } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={image} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{car_model}</h4>
          <h6 className="rent__price text-center mt-">
            ${day_rent_rate}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {model_name}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-barcode-box-line"></i> {number_plate}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="ri-paint-fill"></i> {color}
            </span>
          </div>

          <div className="text-center">
            <Link to={`/cars/${car_model}`}>
              <button className="w-50 car__item-btn car__btn-rent">
                Show Details
              </button>
            </Link>
          </div>

          {/* <Link to={`/cars/${car_model}`}>
            <button className="w-50 car__item-btn car__btn-details">
              Show Location
            </button>
          </Link> */}
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
