import React from 'react';
import Maps from "../Map";
import CarItemDisplay from "../components/UI/CarItemDisplay";
import { useLocation } from "react-router-dom";
import Payment from "../components/Payment/Payment";
import HeaderUser from "../components/Header/HeaderUser";
import FooterUser from "../components/Footer/FooterUser";

const CarDetails = () => {
  const location = useLocation();
  console.log("value ", location.state.totalAmt)
  let totalAmt = "" + (location.state.totalAmt * 100)
  console.log(totalAmt,);

  let { latitude, longitude, image, car_model, model_name, color, number_plate, day_rent_rate, startDate, endDate, rent_id } = location.state;
  let car = { latitude: latitude, longitude: longitude, image: image, car_model: car_model, model_name: model_name, color: color, number_plate: number_plate, day_rent_rate: day_rent_rate, startDate: startDate, endDate: endDate, rent_id: rent_id };

  return (
    <React.Fragment>
      <HeaderUser />
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:"90px"}}>
        <CarItemDisplay item={car} key={car.id} />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <Payment amt={totalAmt} rent_id={location.state.rent_id} startDate={location.state.startDate} endDate={location.state.endDate} />
      </div>
      <br />
      <div style={{marginLeft: "470px"}}>
        <Maps latitude={location.state.latitude} longitude={location.state.longitude} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterUser />
    </React.Fragment>
  );
};

export default CarDetails;
