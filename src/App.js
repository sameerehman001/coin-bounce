import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Protected from "./components/Protected/Protected";

function App() {
  const isAuth = false;
  return (
    <div>
      <BrowserRouter>
        <div className={styles.layout}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />
            <Route
              path="home"
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />
            <Route
              path="crypto"
              element={<div className={styles.main}>Cryptocurrencies</div>}
            />
            <Route
              path="blogs"
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>Blogs</div>
                </Protected>
              }
            />
            <Route
              path="submit"
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>Submit</div>
                </Protected>
              }
            />
            <Route
              path="login"
              element={<div className={styles.main}>Log-in</div>}
            />
            <Route
              path="signin"
              element={<div className={styles.main}>Sign In</div>}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
