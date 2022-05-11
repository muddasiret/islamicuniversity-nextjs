import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import YoutubeEmbed from "../../Common/YoutubeEmbed";
import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import { fetchAPI } from "../../lib/api";

const About = ({ about }) => {
  const { youtube_link, aim, description, address, telephone, email } =
    about.attributes;
  useEffect(() => {
    console.log(address);
  }, [address]);
  return (
    <Layout>
      <PageTitle title="ABOUT" />

      <MainLayout>
        <div className="px-10">
          <h1 className="my-5 text-4xl text-primaryblue text-center uppercase">
            Chair for Islamic Studies & Research
          </h1>
          <p className="my-5 text-lg font-bold text-black-700 text-center px-16">
            UNIVERSITY OF CALICUT
          </p>
          <YoutubeEmbed embedLink={youtube_link} classes="mt-5 md:h-[30rem]" />
          <h2 className="text-2xl text-primaryblue text-center font-bold my-5">
            {aim}
          </h2>
          <h3 className="text-md text-slate-600 text-center font-bold my-5 px-5">
            {description}
          </h3>
        </div>
        <div className="px-10 my-10">
          <h1 className="my-10 text-4xl text-primaryblue text-center font-extrabold">
            CONTACT US
          </h1>
          <div className="flex bg-primaryblue text-center justify-center p-10 mt-10">
            <div className="relative text-lg text-white font-semibold">
              <div className="bg-slate-400">
                {/* <img src="images/paperplane.png" alt="plane" className="md:h-[3rem]"/> */}
              </div>
              <ReactMarkdown>{address}</ReactMarkdown>
              <p className="my-3 font-semibold">
                Email:{" "}
                <a
                  className="text-skyblue hover:text-blue-500"
                  href={"mailto:" + email}
                >
                  {email}
                </a>
              </p>
              <p className="my-3 font-semibold">
                Phone:{" "}
                <a
                  className="text-skyblue  hover:text-blue-500"
                  href={"tel:" + telephone}
                >
                  {telephone}
                </a>
              </p>
              <div className="my-3">
                <p className="uppercase my-5 font-bold text-xl">Location</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7152261889514!2d75.89251971419601!3d11.13457385552672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6513c490a804f%3A0x58cb496669f29102!2sIslamic%20chair%20and%20research%2C%20calicut%20university!5e0!3m2!1sen!2sin!4v1651944181265!5m2!1sen!2sin"
                  width="700"
                  height="500"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [about] = await Promise.all([fetchAPI("/abouts")]);

  return {
    props: {
      about: about.data[0],
    },
    revalidate: 1,
  };
}

export default About;
