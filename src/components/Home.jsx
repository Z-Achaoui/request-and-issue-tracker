import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import HomeAdmin from "./HomeAdmin";
import HomeUser from "./HomeUser";

function Home(props) {
  const params = useParams();
  return (
    <Fragment>
      {params.userRole === "ADMIN" ? <HomeAdmin /> : <HomeUser />}
    </Fragment>
  );
}

export default Home;
