import { useState } from "react";

const Nav = ({ styles }) => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <header className={styles.navigation}>
      <div className={styles.sidebar_Button}>
        <button type="button" onClick={() => handleClick()}>
          ☰
        </button>
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
