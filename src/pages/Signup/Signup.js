import React from "react";
import { useState } from "react";
import styles from "./Signup.module.css";
import signupSchema from "../../schemas/signupSchema";
import { useFormik } from "formik";
import TextInput from "../../components/TextInput/TextInput";
import { signUp } from "../../api/internal";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: signupSchema,
  });

  const handleSignUp = async () => {
    console.log("SignUp page");
    const data = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      // confirmPassword: values.confirmPassword,
    };

    console.log(" SignUp data : ", data);

    const response = await signUp(data);

    console.log("response : ", response);

    if (response.status === 200) {
      console.log("Successfully signed up!");
      // 1. setUser
      // const user = {
      //   _id: response.data.user._id,
      //   email: response.data.user.email,
      //   username: response.data.user.username,
      //   auth: response.data.auth,
      // };

      // dispatch(setUser(user));
      // 2. redirect -> homepage
      navigate("/login");
    } else if (response.code === "ERR_BAD_REQUEST") {
      // display error message
      setError(response.response.data.message);
    }
  };

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupHeader}>Create an account</div>
      <TextInput
        type="text"
        name="name"
        placeholder="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name && touched.name ? 1 : undefined}
        errormessage={errors.name}
      />
      <TextInput
        type="text"
        name="username"
        placeholder="username"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.username}
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />
      <TextInput
        type="text"
        name="email"
        placeholder="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.email && touched.email ? 1 : undefined}
        errormessage={errors.email}
      />
      <TextInput
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />
      <TextInput
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        value={values.confirmPassword}
        onBlur={handleBlur}
        onChange={handleChange}
        error={
          errors.confirmPassword && touched.confirmPassword ? 1 : undefined
        }
        errormessage={errors.confirmPassword}
      />

      <button className={styles.signupButton} onClick={handleSignUp}>
        Sign Up
      </button>

      <span>
        Already have an account?{" "}
        <button className={styles.login}>Log In</button>
      </span>

      {/* {error != "" ? <p className={styles.errorMessage}>{error}</p> : ""} */}
    </div>
  );
};

export default Signup;
