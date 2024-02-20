import React from "react";
import styles from './Signup.module.css'
import TextInput from "../../components/TextInput/TextInput";

const Signup = () => {
  return (
    <div className={styles.signupWrapper}>
      <div className={styles.signupHeader}>Create an account</div>
      <TextInput type="text" name="name" placeholder="name" />

      <TextInput type="text" name="username" placeholder="username" />

      <TextInput type="text" name="email" placeholder="email" />

      <TextInput type="password" name="password" placeholder="password" />

      <TextInput
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
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
