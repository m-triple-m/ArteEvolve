import { Formik } from "formik";
import React from "react";
import "./resource/signup.css";
import google from "./resource/google.png";
import signupmobile from "./resource/signupmobile.png";
// import Swal from "sweetalert2";
import * as Yup from "yup";
const SignUp = () => {
  // for sendind formdata to database
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1. Address
    // 2. Request method
    // 3. Data
    // 4. Data Format
  };
  //   4. Create Validation Schema
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailRegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const myValidation = Yup.object().shape({
    username: Yup.string()
      .min(5, "UserName Must Five Letter")
      .max(20, "Too Long!")
      .required("UserName Required"),
    email: Yup.string()
      .matches(emailRegExp, "Email Invalid")
      .required("Enter Email"),
    mobile: Yup.string()
      .min(10, "Enter Valid Mobile Number")
      .max(10, "Mobile Number Must Be 10 Digits")
      .matches(phoneRegExp,"Mobile number is not valid")
      .required("Phone No Required"),
    password: Yup.string()
      .min(6, "Too Short!!")
      .max(12, "Very Long To Remember")
      .required("Password Required"),
  });

  return (
    <>
      <div className="mycontainer">
        <div className="one-sub-con">
          <img src={signupmobile} alt="" />
          <div className="account">
            <h1>Cerate a new Account</h1>
          </div>
        </div>
        <div className="two-sub-con">
          <Formik
            initialValues={{
              username: "",
              email: "",
              mobile: "",
              password: "",
            }}
            validationSchema={myValidation}
            onSubmit={userSubmit}
          >
            {({ values, handleSubmit, handleChange, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <div className="main-head">
                  <h1>Sign Up</h1>
                  <p>Let's set up your personal account</p>

                  <input
                    name="username"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="UserName"
                  />
                  {errors.username && touched.username ? (
                    <div className="error">{errors.username}</div>
                  ) : null}
                  <input
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
                  <input
                    name="mobile"
                    type="mobile"
                    id="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    placeholder="Mobile No"
                  />
                  {errors.mobile && touched.mobile ? (
                    <div className="error">{errors.mobile}</div>
                  ) : null}
                  <input
                    name="password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className="error">{errors.password}</div>
                  ) : null}
                  <button type="submit">Cerate Account</button>
                </div>
                <div className="main-info">
                  <p>OR</p>
                  <div className="google">
                    <button>
                      {" "}
                      <img src={google} alt="" />{" "}
                      <span> Sign up with Google</span>
                    </button>
                  </div>

                  <p>
                    Already have an account? <a href="login"> Sign In</a>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignUp;
