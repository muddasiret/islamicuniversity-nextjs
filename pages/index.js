import React from "react";
// import Articles from "../components/articles";
import Layout from "../components/layout";
// import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import ItemCard from "../components/Home/ItemCard";
import NewsCard from "../components/Home/NewsCard";
import EventCard from "../components/Home/EventCard";
import CarouselGrid from "../components/Carousel";
import MainLayout from "../components/mainLayout";
import { NAV_LINKS } from "../Common/Header/constants";

const Home = ({ carousels, newses, events, homepage }) => {
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <CarouselGrid carouselData={carousels} />
      <MainLayout>
        <div className="grid gap-4 space-x-4 mt-5">
          <div className="my-10">
            <h1 className="md:text-5xl text-4xl sanspro text-darkbrown font-black text-left md:text-center">
              CISR NEWS
            </h1>
            <p className="text-left md:text-center mb-10 text-darkbrown sanspro md:text-3xl text-xl ">
              New Trends in Islamic Studies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {newses.map((news, ind) => {
                return <NewsCard newsDetails={news} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </MainLayout>
      <div
        className="py-10 my-10 md:px-16 px-5 mx-auto bg-white"
        style={{
          backgroundImage: `url(${"/images/bg-pattern.png"})`,
          backgroundSize: "cover",
        }}
      >
        {events && events.length !== 0 && (
          <div className="my-5">
            <h1 className="md:text-5xl text-4xl sanspro font-black text-darkbrown text-left md:text-center">
              CISR EVENTS
            </h1>
            <p className="text-left md:text-center mb-12 sanspro text-darkbrown md:text-3xl text-xl ">
              Whats Happening in Islam in South Asia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-12">
              {events.map((event, index) => (
                <EventCard key={index} data={event} />
              ))}
            </div>
          </div>
        )}
      </div>
      <MainLayout>
        {/* <div className="md:flex md:space-x-4 py-5"> */}
        <div className="grid md:grid-cols-5 grid-cols-1 gap-5 mt-10">
          {Object.keys(NAV_LINKS).map((item, ind) => (
            <ItemCard key={ind} details={NAV_LINKS[item]} />
          ))}
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [carouselsRes, newsRes, eventsRes, homepageRes] = await Promise.all([
    fetchAPI("/carousels", { populate: "image" }),
    fetchAPI("/newses", { populate: "image" }),
    fetchAPI("/events", { populate: "image" }),
    //fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      carousels: carouselsRes.data,
      newses: newsRes.data,
      events: eventsRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
