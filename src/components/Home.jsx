import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeAdmin from "./HomeAdmin";
import HomeUser from "./HomeUser";

function Home(props) {
  const params = useParams();
  const { roles } = useSelector((state) => state.loadUser.value);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (roles.length && !role) {
      const r = roles.find((r) => r.roleName === "ADMIN") ? "admin" : "user";
      setRole(r);
    }
  }, [role, roles]);

  return <Fragment>{role === "admin" ? <HomeAdmin /> : <HomeUser />}</Fragment>;
}

export default Home;
