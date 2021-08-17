import { useState } from "react";
import img from "./images/pic.jpg";
import "./App.css";

function Register() {
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const validateForm = () => {
    let formIsValid = true;

    if (!userRegistration.email) {
      formIsValid = false;
      error.email = "*Please enter your email-ID.";
    }

    if (typeof userRegistration.email !== "undefined") {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(userRegistration.email)) {
        formIsValid = false;
        error.email = "*Please enter valid email-ID.";
      }
    }

    if (!userRegistration.password) {
      formIsValid = false;
      error.password = "*Please enter your password.";
    }

    if (typeof userRegistration.password !== "undefined") {
      if (
        !userRegistration.password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        error.password =
          "*Please enter a strong password with special characters.";
      }
    }
    setError(error);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(
        "SUCCESSFULLY LOGGED IN, BUT LOGIN DATA IS NOT SAVING IN LOCAL STORAGE RIGHT NOW!"
      );
    }
    setUserRegistration({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="contents">
          <div className="left_img" style={{ objectFit: "cover" }}>
            <img src={img} height="100%" />
          </div>
          <div className="right_wrapper">
            <div className="right_content">
              <h3>Welcome back!</h3>
              <p id="p">Please login to your account. </p>

              <div>
                <div className="error">{error.email}</div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={userRegistration.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <div className="error">{error.password}</div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={userRegistration.password}
                  onChange={handleInput}
                />
              </div>

              <div className="second_last">
                <div className="secondd">
                  <div className="finall">
                    <input type="checkbox" />

                    <p>Remember me</p>
                  </div>

                  <p style={{ color: "#61acb3" }}>Forgot Password</p>
                </div>
              </div>

              <div className="btn-align">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>

              <div className="footer">
                <p
                  style={{
                    fontSize: "13px",

                    textAlign: "center",
                  }}
                >
                  Terms of use. Privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>

      <p>
        Note : Please type <strong>/login</strong> for the login page and
        <strong>/users</strong> for user list page after the url of the website
      </p>
    </>
  );
}

export default Register;
