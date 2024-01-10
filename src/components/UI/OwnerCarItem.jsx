import React, { useState } from "react";

import axios from "axios";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import FileBase64 from "react-file-base64";

const OwnerCarItem = (props) => {
    // const { imgUrl, model, carName, automatic, speed, price } = props.item;
    const { image, model_name, car_model, color, number_plate, day_rent_rate, rent_status } =
        props.item;
    const [carData, setCarData] = useState({
        car_model: "",
        number_plate: "",
        model_name: "",
        color: "",
        image: "",
    });



    function getFiles(files) {
        this.setState({ files: files });
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(carData); // replace with your own submit logic
    // };

    return (
        <React.Fragment>
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
                            <span className=" d-flex align-items-center gap-1">
                                <i class="ri-car-line"></i> {model_name}
                            </span>
                            <span className=" d-flex align-items-center gap-1">
                                <i class="ri-barcode-box-line"></i> {number_plate}
                            </span>
                            <span className=" d-flex align-items-center gap-1">
                                <i class="ri-paint-fill"></i> {color}
                            </span>
                            <span className=" d-flex align-items-center gap-1">
                                <i class="ri-car-line"></i> {rent_status}
                            </span>
                        </div>
                        {/* <Link to={`/cars/${car_model}`}>
                            <button className=" w-50 car__item-btn car__btn-rent">
                                "Rent Status"
                            </button>
                        </Link> */}
                        {/* <Link to={`/cars/${car_model}`}> */}
                            {/* <button className=" w-50 car__item-btn car__btn-details">
                                Cancel Booking
                            </button> */}
                        {/* </Link> */}
                    </div>
                </div>
            </Col>


        </React.Fragment>
    );
};

export default OwnerCarItem;
