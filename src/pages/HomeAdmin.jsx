import React from "react";
import HomeAdminLayout from "./HomeAdminLayout";

import HeaderAdmin from "../components/Header/HeaderAdmin";
import FooterAdmin from "../components/Footer/FooterUser";

const HomeUser = () => {
  return (
    <React.Fragment>
      <React.Fragment>
        <HeaderAdmin />
      </React.Fragment>
      <React.Fragment>
        <HomeAdminLayout />
      </React.Fragment>
      <React.Fragment>
        <FooterUser />
      </React.Fragment>
    </React.Fragment>
  );
};

export default HomeUser;
