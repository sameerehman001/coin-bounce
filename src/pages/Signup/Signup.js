import React from "react";
import styles from "./Signup.module.css";
import signupSchema from "../../schemas/signupSchema";
import { useFormik } from "formik";
import TextInput from "../../components/TextInput/TextInput";

const Signup = () => {
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

      <button className={styles.signupButton}>Sign Up</button>

      <span>
        Already have an account?{" "}
        <button className={styles.login}>Log In</button>
      </span>

      {/* {error != "" ? <p className={styles.errorMessage}>{error}</p> : ""} */}
    </div>
  );
};

export default Signup;
