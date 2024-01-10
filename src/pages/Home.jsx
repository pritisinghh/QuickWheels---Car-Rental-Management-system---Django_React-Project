import React from "react";
import HomeLayout from "./HomeLayout";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <Header />
      </React.Fragment>
      <React.Fragment>
        <HomeLayout />
      </React.Fragment>
      <React.Fragment>
        <Footer />
      </React.Fragment>
    </React.Fragment>
  );
};

export default Home;
