import { Fade } from "react-awesome-reveal";

const MainLayout = ({ children }) => (
  <Fade direction="up" duration={1000} triggerOnce>
    <div className="py-5 md:px-10 px-5 container mx-auto background-biege">
      {children}
    </div>
  </Fade>
);

export default MainLayout;
