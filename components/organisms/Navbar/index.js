import { useState } from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <button
          className={styles.sidebar_Button}
          type="button"
          onClick={() => handleClick()}
        >
          ☰
        </button>

        <div className={styles.title}>
          <h1 className="ayah">
            أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
          </h1>
        </div>

        <div className={styles.mode}>
          <button type="button">🌗</button>
        </div>
      </div>
      {!show && (
        <div className={styles.sidebar}>
          <div className={styles.menu}>
            <h1>MENU</h1>
            <ul>
              <li>HOME</li>
              <li>QURAN</li>
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
