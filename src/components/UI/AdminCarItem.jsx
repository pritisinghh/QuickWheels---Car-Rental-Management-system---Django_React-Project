import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import {signInWithPopup} from "firebase/auth";
import axios from "axios";
import config from "../../Config.json";
import { useNavigate } from "react-router-dom";



const AdminCarItem = (props) => {
    // const { imgUrl, model, carName, automatic, speed, price } = props.item;
    const navigate = useNavigate();
    const { image, model_name, car_model, color, number_plate, day_rent_rate, id } = props.item;
    console.log(props.item)
    const Approve = async () => {
        const headers = {
            Authorization: localStorage.getItem("token"),
        };
        const status = 1
        const result = await axios.get(
            config["domain"]+"/api/approverentitem/"+id+"/"+status+"/",
            { headers }
        );
        navigate("/user");
        window.location.reload()
    }

const Reject = async () => {

    const headers = {
        Authorization: localStorage.getItem("token"),
    };
    const status = 0
    const result = await axios.get(
        config["domain"]+"/api/approverentitem/"+id+"/"+status+"/",
        { headers }
    );
    navigate("/user");
    window.location.reload()
}


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
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model_name}
            </span>
                        <span className=" d-flex align-items-center gap-1">
              <i class="ri-barcode-box-line"></i> {number_plate}
            </span>
                        <span className=" d-flex align-items-center gap-1">
              <i class="ri-paint-fill"></i> {color}
            </span>
                    </div>
                        <button className=" w-50 car__item-btn car__btn-rent" onClick={Approve}>
                            Approve
                        </button>
                        <button className=" w-50 car__item-btn car__btn-rent" onClick={Reject}>
                            Reject
                        </button>
                </div>
            </div>
        </Col>
    );
};

export default AdminCarItem;
