import styles from "../styles/Layout.module.css";
import Nav from "./nav";

const Layout = ({ children }) => (
  <>
    <Nav styles={styles} />
    {children}
  </>
);

export default Layout;
