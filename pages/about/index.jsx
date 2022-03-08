import YoutubeEmbed from "../../Common/YoutubeEmbed";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import Layout from "../../Common/Layout";
import ItemCard from "../home/ItemCard";

const About = () => {
    const items = [
        { title: "HISTORY" },
        { title: "PEOPLE" },
        { title: "WHAT WE DO" },
        { title: "CONTACT" },
        { title: "SUPPORT" },
      ];
  return (
    <>
      <Header />
      <h2 className="py-5 px-10 text-xl md:text-3xl text-left text-sky-800 font-bold">
        ABOUT
      </h2>
      <Layout>
        <h1 className="py-2 text-2xl md:text-4xl text-sky-700 font-bold">
          Islamic University
        </h1>
        <YoutubeEmbed
          embedLink={"https://www.youtube.com/embed/Z3cau4ciTR8"}
          classes="mt-5 md:px-20 md:h-[32rem]"
        />
        <h3 className="py-5 md:px-20 text-xl md:text-2xl text-sky-700 font-bold">
          Islamic University’s aim, by Allah’s grace, is to serve the Muslims by supplying education at the very highest level.
        </h3>
        <div className="md:grid  md:gap-4 md:grid-cols-4  py-5">
            {items.map((item, ind) => (
              <ItemCard key={ind} title={item.title} readmore/>
            ))}
          </div>
      </Layout>
      <Footer />
    </>
  );
};

export default About;
