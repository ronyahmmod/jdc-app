import React, { Component } from "react";

const GENSubjects = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-sm">GEN</div>
    </div>
  </div>
);
const BMHRMSubjects = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-sm"></div>
    </div>
  </div>
);
const BMCOMSubjects = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-sm"></div>
    </div>
  </div>
);
const POLSubjects = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-sm"></div>
    </div>
  </div>
);
const BANSubjects = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-sm"></div>
    </div>
  </div>
);
const DEGREESubjects = () => (
  <div className="container fluid">
    <div className="row">
      <div className="col-sm"></div>
    </div>
  </div>
);

class StudentRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fatherName: "",
      motherName: "",
      mobileNumber: "",
      class: "",
      roll: "",
      sex: "",
      category: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  selectSubjects = (state) => {
    switch (this.state.category) {
      case "GEN":
        return <GENSubjects />;
      case "BMHRM":
        return <BMHRMSubjects />;
      case "BMCOM":
        return <BMCOMSubjects />;
      case "BAN":
        return <BANSubjects />;
      case "POL":
        return <POLSubjects />;
      case "DEGREE":
        return <DEGREESubjects />;
      default:
        return <GENSubjects />;
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header text-center">
          <p>Registration for taking class on Zoom App</p>
          <div className="alert alert-danger">
            For edit, delete or any information feel free to inbox to{" "}
            <a href="https://www.facebook.com/jdcjc2016">Our official page</a>
          </div>
        </div>

        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Enter your name(*)</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter student name"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fatherName">Enter father name (*)</label>
                    <input
                      type="text"
                      name="fatherName"
                      id="fatherName"
                      placeholder="Enter student father name"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="motherName">Enter mother name (*)</label>
                    <input
                      type="text"
                      name="motherName"
                      id="motherName"
                      placeholder="Enter student mother name"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobileNumber">
                      Enter GOVT Registered mobile number (*)
                    </label>
                    <input
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Enter student mobile number"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobileNumber">
                      Enter GOVT Registered mobile number (*)
                    </label>
                    <input
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Enter student gurdian mobile number"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="class">Enter class (*)</label>
                    <select
                      className="form-control"
                      name="class"
                      id="class"
                      onChange={this.handleChange}
                    >
                      <option selected>Select</option>
                      <option value="xi">XI</option>
                      <option value="xi">XII</option>
                      <option value="xi">Degree Pass</option>
                      <option value="xi">Honours</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">
                      Enter Subject(hon's only)/trade/category (*)
                    </label>
                    <select
                      className="form-control"
                      name="category"
                      id="category"
                      onChange={this.handleChange}
                    >
                      <option selected>Select</option>
                      <option value="GEN">GEN</option>
                      <option value="BMHRM">
                        BM-Human Resource Management
                      </option>
                      <option value="BMCOM">BM-Computer Operation</option>
                      <option value="POL">Political Science</option>
                      <option value="BAN">Bangla</option>
                    </select>
                  </div>

                  <div>{this.selectSubjects(this.state)}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentRegistration;
