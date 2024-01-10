import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Header from "../components/Header/Header";
import CommonSection2 from "../components/UI/CommonSection2";
import '../styles/dashboard.css';
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "Total Cars",
  totalNumber: 500,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1200,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "75k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 3300,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <CommonSection title="Admin Dashboard" />
      <div className="dashboard">
        <CommonSection2 title="Insights and Our Analytical Reports" />
        <div className="dashboard__wrapper">
          <div className="dashboard__cards">
            <SingleCard item={carObj} />
            <SingleCard item={tripObj} />
            <SingleCard item={clientObj} />
            <SingleCard item={distanceObj} />
          </div>

          <div className="statics">
            <div className="stats">
              <h3 className="stats__title">Miles Statistics</h3>
              <MileChart />
            </div>

            <div className="stats">
              <h3 className="stats__title">Car Statistics</h3>
              <CarStatsChart />
            </div>
          </div>

          <br />
          <CommonSection2 title="Top Cars of the Week" />
          <div className="recommend__cars-wrapper">
            {recommendCarsData.map((item) => (
              <RecommendCarCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;