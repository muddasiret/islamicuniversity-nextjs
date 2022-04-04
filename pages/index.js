import React from "react";
// import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import ItemCard from "../components/Home/ItemCard";
import NewsCard from "../components/Home/NewsCard";
import EventCard from "../components/Home/EventCard";
import CarouselGrid from "../components/Carousel";

const Home = ({ carousels, newses, events, homepage }) => {
  const items = [
    { title: "ABOUT" },
    { title: "PROGRAMES" },
    { title: "LEARN ONLINE" },
    { title: "EXPLORE" },
    { title: "SUPPORT" },
  ];

  const DUMMY_EVENTS = [
    {
      imgSrc:
        "https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo=",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo=",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo=",
    },
  ];
  return (
    <Layout>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <CarouselGrid carouselData={carousels} />
      <div className="grid gap-4 space-x-4 mt-5">
        <div className="my-5">
          <h1 className="text-4xl text-sky-800 font-bold text-center mb-3">CISR NEWS</h1>
          <p className="text-center mb-3">New Trends in Islamic Studies</p>
          <div className="grid grid-cols-4 gap-4">
            {newses.map((news, ind) => {
              return <NewsCard newsDetails={news} key={ind} />;
            })}
            {newses.map((news, ind) => {
              return <NewsCard newsDetails={news} key={ind} />;
            })}
          </div>
        </div>
        {events && events.length !== 0 && (
          <div className="my-5">
            <h1 className="text-4xl text-sky-800 font-bold text-center">CISR EVENTS</h1>
            <p className="text-center mb-3">Whats Happening in Islam in South Asia</p>
            <div className="grid grid-cols-3 gap-12">
              {events.map((event, index) => (
                <EventCard key={index} data={event} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="md:flex md:space-x-4 py-5">
        {items.map((item, ind) => (
          <ItemCard key={ind} title={item.title} />
        ))}
      </div>
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
