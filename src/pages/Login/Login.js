import React from "react";
import styles from "./Login.module.css";
import TextInput from "../../components/TextInput/TextInput";


const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginHeader}>Log in to your account</div>
      <TextInput type="text" name="username" placeholder="username" />
      <TextInput type="password" name="password" placeholder="password" />
      <button className={styles.logInButton}>Log In</button>
      <span>
        Don't have an account?{" "}
        <button className={styles.createAccount}>Register</button>
      </span>
    </div>
  );
};

export default Login;
