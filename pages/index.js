import React from "react";
// import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import ItemCard from "../components/Home/ItemCard";
import NewsCard from "../components/Home/NewsCard";
import EventCard from "../components/Home/EventCard";
import CarouselGrid from "../components/Carousel";

const Home = ({ carousels, newses, homepage }) => {
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
      <div className="grid gap-4 space-x-4">
        <div className="my-5">
          <h1 className="p-2 text-3xl text-sky-800 font-bold">CISR NEWS</h1>
          <div className="grid grid-cols-4 gap-4">
            {newses.map((news, ind) => {
              return <NewsCard newsDetails={news} key={ind} />;
            })}
          </div>
        </div>
        {/* <div>
            <h1 className="border-b-2 p-2 text-sky-800 text-xl font-bold">
              FEATURED
            </h1>
            <YoutubeEmbed
              embedLink={"https://www.youtube.com/embed/DGlyjmmQW4M"}
              classes="mt-5 md:h-80"
            />
            <h1 className="border-b-2 p-2 mt-5 text-xl text-sky-800 font-bold">
              LATEST
            </h1>
            <YoutubeEmbed
              embedLink={"https://www.youtube.com/embed/Z3cau4ciTR8"}
              classes="mt-5 md:h-80"
            />
          </div> */}
        <div className="my-5">
          <h1 className="p-2 text-3xl text-sky-800 font-bold">CISR EVENTS</h1>
          <div className="grid grid-cols-3 gap-12">
            {DUMMY_EVENTS.map((event, index) => (
              <EventCard key={index} data={event} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-slate-200 mt-10 w-100"></div>
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
  const [carouselsRes, newsRes, homepageRes] = await Promise.all([
    fetchAPI("/carousels", { populate: "image" }),
    fetchAPI("/newses", { populate: "image" }),
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
      //categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
