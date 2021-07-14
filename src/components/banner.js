import React from "react";
import "../css/banner.css"

function Banner() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid" id="banner">
      <div className="container">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>User Directory</b> <i className="fas fa-user-friends"></i> </h1>
        <p className="lead">Search by first name, last name or sort each column.</p>
      </div>
    </div>
  </div>
  );
}

export default Banner;