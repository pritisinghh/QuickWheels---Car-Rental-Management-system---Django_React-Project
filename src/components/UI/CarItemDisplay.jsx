import React, { useState } from "react";
import { Col } from "reactstrap";
import "../../styles/car-item.css";
import { useNavigate, Link } from 'react-router-dom';
import CarDetails from "../../pages/CarDetails";
import { Navigate } from "react-router-dom";
import { FacebookAuthProvider } from "firebase/auth";

const CarItemDisplay = (props) => {
  const { latitude, longitude, image, model_name, car_model, color, number_plate, day_rent_rate, totalAmt } = props.item;
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  startDate = props.startDate;
  endDate = props.endDate;
  let rent_id = props.rent_id;
  const navigate = useNavigate();
  let [user, setUser] = useState(false);
  console.log("total amount ", totalAmt)

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      car_model,
      model_name,
      color,
      number_plate,
      day_rent_rate,
      startDate,
      endDate,
      rent_id
    };
    // console.log(image, 'dfdf');
    setUser(true);
  };


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
          {/* <Payment amt="8099" /> */}
          <div className="text-center">
            <button className="w-50 car__item-btn car__btn-rent" onClick={handleSubmit}>
              Rent now
            </button>
            {user && (<Navigate to="/carsD" state={{ latitude: latitude, longitude: longitude, image: image, car_model: car_model, model_name: model_name, color: color, number_plate: number_plate, day_rent_rate: day_rent_rate, startDate: startDate, endDate: endDate, rent_id: rent_id, totalAmt: totalAmt }} replace={true} />)}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItemDisplay;
