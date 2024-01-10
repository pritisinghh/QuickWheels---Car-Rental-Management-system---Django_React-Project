import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/CarListing.css";
import "../styles/carTiles.css";
import HeaderUser from "../components/Header/HeaderUser";
import FooterUser from "../components/Footer/FooterUser";
import CarItemDisplay from "../components/UI/CarItemDisplay";
import Payment from "../components/Payment/Payment";

import { Container, Row, Col } from "reactstrap";

const CarListing = () => {
  const [cars, setCars] = useState([]);
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  let [isLoaded, setIsLoaded] = useState(true);
  window.onload = getCarData

  useEffect(() => {
    // Fetch cars with "all_cars" as the initial search query when the component mounts
    handleSubmit();
  }, []);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    getCarData()
  };


  async function getCarData() {
    console.log("getting car data", isLoaded)
    if (isLoaded) {
      startDate = new Date().toLocaleDateString('en-GB')
      endDate = new Date().toLocaleDateString('en-GB')
    }
    setIsLoaded(false)
    console.log("dates ", startDate, endDate, isLoaded)
    let config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    }
    let url = ""
    if (searchQuery !== "") {
      url = `https://rsms.herokuapp.com/api/fetchrentitems/${searchQuery}/1/6/`
    } else {
      url = `https://rsms.herokuapp.com/api/fetchrentitems/all_cars/1/6/`
    }
    const result = await axios.post(url, {
      from_date: startDate,
      to_date: endDate
    }, config);
    console.log(result.data.cars)
    setCars(result.data.cars);
  }

  return (
    <React.Fragment>
      <HeaderUser />
      <form style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onSubmit={handleSubmit}>
        <div> 
        <div className="name-inputs">
          <div className="form-group">
          <label htmlFor="endDate">Search</label>
            <input
              type="text"
              id="searchInput"
              name="searchInput"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        <div className="form-group">
          <label htmlFor="startDate">From Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="endDate">To Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
          <div className="form-group" style={{marginTop: "36px"}}>
            <button type="submit">Search</button>
          </div>
        </div></div>
      </form>
      {/* <div className="car-listing"> */}
      <section>
        <Container>
          <Row className="justify-content-center align-items-center">
            {cars.length > 0 ? (
              cars.slice(0, cars.length).map((car) => {
                console.log(car.totalAmt)
                return <CarItemDisplay item={car} startDate={startDate} endDate={endDate} rent_id={car.id} />
              })
            ) : (
              <p>No cars found.</p>
            )}
          </Row>
        </Container>
      </section>
      {/* </div> */}
      <FooterUser />
    </React.Fragment >
  );
};

export default CarListing;
