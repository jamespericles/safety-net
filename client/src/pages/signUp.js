import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import { SET_USER } from "../store/actions";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../store/store";
import Footer from "../components/Footer";

const SignUp = () => {
  const history = useHistory();
  const [, /* state */ dispatch] = useStoreContext();

  const [signUpCreds, setSignUpCreds] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    mobile: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // dispatch({ type: LOADING });

    axios
      .post("/api/users/signup", {
        first_name: signUpCreds.firstname,
        last_name: signUpCreds.lastname,
        email: signUpCreds.email,
        password: signUpCreds.password,
        address1: signUpCreds.address1,
        address2: signUpCreds.address2,
        city: signUpCreds.city,
        state: signUpCreds.state,
        zip: signUpCreds.zip,
        mobile: signUpCreds.mobile
      })
      .then(response => {
        console.log("RESPONSE", response);
        dispatch({ type: SET_USER, user: response.data });
        history.replace("/login");
      })
      .catch(error => {
        console.log("ERROR", error);
      });

    setSignUpCreds({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      mobile: ""
    });
  };

  return (
    <div className="text-center">
      <Navbar />
      <h4>Sign Up</h4>
      <div style={{ margin: "0 3em 0 3em" }}>
        <form className="form-signin">
          <label htmlFor="inputfirstname" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            id="inputfirstname"
            className="form-control"
            name="firstname"
            placeholder="First Name"
            value={signUpCreds.firstname}
            onChange={handleChange}
          />

          <label htmlFor="inputlastname" className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            id="inputlastname"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            value={signUpCreds.lastname}
            onChange={handleChange}
          />

          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            name="email"
            placeholder="Email address"
            value={signUpCreds.email}
            onChange={handleChange}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            name="password"
            placeholder="Password"
            value={signUpCreds.password}
            onChange={handleChange}
          />
          <label htmlFor="inputmobile" className="sr-only">
            Mobile
          </label>
          <input
            type="text"
            id="inputmobile"
            className="form-control"
            name="mobile"
            placeholder="Mobile Phone"
            value={signUpCreds.mobile}
            onChange={handleChange}
          />

          <button
            className="btn btn-lg btn-block"
            style={{ backgroundColor: "#E8C547" }}
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
