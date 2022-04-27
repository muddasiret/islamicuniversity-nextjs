import Footer from "../Common/Footer";
import Header from "../Common/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
