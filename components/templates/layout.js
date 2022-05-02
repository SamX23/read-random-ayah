import Nav from "../organisms/Navbar";

const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
  </>
);

export default Layout;
