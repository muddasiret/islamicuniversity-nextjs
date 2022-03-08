import Footer from "../Common/Footer";
import Header from "../Common/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="py-5 px-10">{children}</div>
    <Footer />
  </>
);

export default Layout;
