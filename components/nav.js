import { useState } from "react";
import styles from "../styles/Layout.module.css";

const Nav = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <header className={styles.navigation}>
      <div className={styles.sidebar_Button}>
        <span onClick={() => handleClick()}>☰</span>
      </div>
      {!show && (
        <div className={styles.sidebar}>
          <div className={styles.menu}>
            <h1>MENU</h1>
            <ul>
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>QURAN</a>
              </li>
              <li>
                <a href="https://github.com/SamX23/read-random-ayah">ABOUT</a>
              </li>
            </ul>
            <p>Version 1.0</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
