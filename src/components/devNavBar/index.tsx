import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { reduceHomePath } from "../../routes/pathReducers";

export const DevNavBar = () => {
  const [authed, setAuthed] = useState(false);
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setAuthed(true);
  //     } else {
  //       setAuthed(false);
  //     }
  //   });
  // }, []);

  let bg = "red";
  if (authed) bg = "green";
  return (
    <ul style={{ backgroundColor: bg }}>
      <button onClick={() => {}}>выйти</button>
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
      <li>
        <NavLink style={{ marginRight: "20px" }} to="/map">
          Map
        </NavLink>
      </li>
      <li>
        <NavLink style={{ marginRight: "20px" }} to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  );
};
