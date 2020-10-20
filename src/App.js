import React from "react";
import StudentRegistration from "./component/student-registration/student-registration.component";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row mt-3">
        <img
          src={logo}
          className="image rounded mx-auto"
          height={100}
          alt="logo"
        />
      </div>
      <div className="text-center">
        <h4
          className="display-4 mx-auto title"
          style={{ fontFamily: "Raleway", fontSize: "2.5rem" }}
        >
          Welcome to Jibannagar Degree College App
        </h4>
      </div>
      <div className="row">
        <div className="col">
          <StudentRegistration />
        </div>
      </div>
    </div>
  );
}

export default App;
