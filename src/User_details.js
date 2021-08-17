import React from "react";

import img from "./images/pic.jpg";
import "./App.css";

function User_details() {
  const items = { ...localStorage };

  return (
    <div className="contents">
      <div className="left_img" style={{ objectFit: "cover" }}>
        <img src={img} height="100%" />
      </div>
      <div className="right_wrapper">
        <div className="right_content">
          <h3>List Of Users!</h3>

          <ul className="list">
            {Object.keys(items).map((item) => {
              const value = JSON.parse(items[item]).email;
              return (
                <li key={item}>
                  <span>Name = {item}</span> , Email = {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User_details;
