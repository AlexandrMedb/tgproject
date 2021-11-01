import React from "react";
import { NavLink } from "react-router-dom";

import { reduceHomePath } from "../../route/pathReducers";

export const DevNavBar = () => {
  return (
    <ul>
      <li>
        <NavLink style={{ marginRight: "20px" }} to={reduceHomePath()}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink style={{ marginRight: "20px" }} to="/example">
          Example
        </NavLink>
      </li>
      <li>
        <NavLink style={{ marginRight: "20px" }} to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink style={{ marginRight: "20px" }} to="/login">
          login
        </NavLink>
      </li>
    </ul>
  );
};
