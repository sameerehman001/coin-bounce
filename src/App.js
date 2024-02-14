import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Protected from "./components/Protected/Protected";
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Crypto from './pages/Crypto/Crypto'
import Blog from './pages/Blog/Blog'
import SubmitBlog from './pages/SubmitBlog/SubmitBlog'

function App() {
  const isAuth = true;
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
              element={<div className={styles.main}><Crypto /></div>}
            />
            <Route
              path="blogs"
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}><Blog /></div>
                </Protected>
              }
            />
            <Route
              path="submit"
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}><SubmitBlog /></div>
                </Protected>
              }
            />
            <Route
              path="login"
              element={<div className={styles.main}><Login /></div>}
            />
            <Route
              path="signup"
              element={<div className={styles.main}><Signup /></div>}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
