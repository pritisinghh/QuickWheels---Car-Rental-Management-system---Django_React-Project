import React from "react";
import HomeUserLayout from "./HomeUserLayout";

import HeaderUser from "../components/Header/HeaderUser";
import FooterUser from "../components/Footer/FooterUser";

const HomeUser = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <HeaderUser />
      </React.Fragment>
      <React.Fragment>
        <HomeUserLayout />
      </React.Fragment>
      <React.Fragment>
        <FooterUser />
      </React.Fragment>
    </React.Fragment>
  );
};

export default HomeUser;
