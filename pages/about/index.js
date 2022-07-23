import { useEffect, useState } from "react";
import YoutubeEmbed from "../../Common/YoutubeEmbed";
import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import { fetchAPI } from "../../lib/api";
import Contact from "../../components/contact";
import Markdown from "markdown-to-jsx";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const About = ({ about }) => {
  const { youtube_link, description, address, telephone, email } =
    about.attributes;
  useEffect(() => {
    console.log(address);
  }, [address]);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const plus = () => (
    <div className="w-7 h-7 ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
  const minus = () => (
    <div className="w-7 h-7 ml-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
  return (
    <Layout>
      <PageTitle title="ABOUT" />

      <MainLayout>
        <div className="px-10">
          <h1 className="my-5 text-5xl sanspro font-black text-darkbrown text-center uppercase">
            Chair for Islamic Studies & Research
          </h1>
          <p className="my-5 text-lg font-bold text-darkbrown text-center px-16">
            UNIVERSITY OF CALICUT
          </p>
          {youtube_link && (
            <YoutubeEmbed
              embedLink={youtube_link}
              classes="mt-5 md:h-[30rem]"
            />
          )}
          {/* <div className="markdown-reset">
            <Markdown>{description}</Markdown>
          </div> */}
          <div className="mt-5">
            <Accordion open={open === 1} onClick={() => handleOpen(1)}>
              <AccordionHeader className="flex justify-between w-full p-2 border-black border-t-2 bg-cream text-white">
                <div className="flex justify-between w-full p-2">
                  Vision
                  {open === 1 ? (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4 text-lg">
                The Chair of Muslim Cultural and Religious History at the
                University of Erfurt puts great emphasis on interdisciplinarity
                and internationality. This is, on the one hand, reflected in its
                integration into the universitys Department of Religious Studies
                that imparts broad knowledge of the European religious
                landscape. On the other hand, the Chair cooperates with other
                departments, such as Political Science, History, Communication
                Studies or Theology, and expresses shared interests within the
                framework of the compulsory “Studium Fundamentale”. Moreover,
                the programme allows for optional semesters, field excursions
                and internships abroad. Cultural Studies and Social Sciences in
                general and Religious Studies in particular need to extend and
                improve their practical orientation in order to make their
                expertise fruitful and applicable in politics, commerce and
                society. Experts with well-founded knowledge of religious
                minority groups in Europe are already lacking and sought after.
                It is, therefore, the Chairs declared aim to provide this sort
                of cultural competences at the undergraduate level (B.A.
                programme) that will enable the graduate to play a vital part in
                different areas of society, such as economy, politics, education
                or the media, and to fulfill not an preclusive, but an
                integrative function within them.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} onClick={() => handleOpen(2)}>
              <AccordionHeader className="flex justify-between w-full p-2 border-black border-t-2 bg-cream text-white">
                <div className="flex justify-between w-full p-2">
                  Mission
                  {open === 2 ? (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4 text-lg">
                The Chair of Muslim Cultural and Religious History at the
                University of Erfurt puts great emphasis on interdisciplinarity
                and internationality. This is, on the one hand, reflected in its
                integration into the universitys Department of Religious Studies
                that imparts broad knowledge of the European religious
                landscape. On the other hand, the Chair cooperates with other
                departments, such as Political Science, History, Communication
                Studies or Theology, and expresses shared interests within the
                framework of the compulsory “Studium Fundamentale”. Moreover,
                the programme allows for optional semesters, field excursions
                and internships abroad. Cultural Studies and Social Sciences in
                general and Religious Studies in particular need to extend and
                improve their practical orientation in order to make their
                expertise fruitful and applicable in politics, commerce and
                society. Experts with well-founded knowledge of religious
                minority groups in Europe are already lacking and sought after.
                It is, therefore, the Chairs declared aim to provide this sort
                of cultural competences at the undergraduate level (B.A.
                programme) that will enable the graduate to play a vital part in
                different areas of society, such as economy, politics, education
                or the media, and to fulfill not an preclusive, but an
                integrative function within them.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} onClick={() => handleOpen(4)}>
              <AccordionHeader className="flex justify-between w-full p-2 border-black border-t-2 bg-cream text-white">
                <div className="flex justify-between w-full p-2">
                  Values
                  {open === 4 ? (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4 text-lg">
                The Chair of Muslim Cultural and Religious History at the
                University of Erfurt puts great emphasis on interdisciplinarity
                and internationality. This is, on the one hand, reflected in its
                integration into the universitys Department of Religious Studies
                that imparts broad knowledge of the European religious
                landscape. On the other hand, the Chair cooperates with other
                departments, such as Political Science, History, Communication
                Studies or Theology, and expresses shared interests within the
                framework of the compulsory “Studium Fundamentale”. Moreover,
                the programme allows for optional semesters, field excursions
                and internships abroad. Cultural Studies and Social Sciences in
                general and Religious Studies in particular need to extend and
                improve their practical orientation in order to make their
                expertise fruitful and applicable in politics, commerce and
                society. Experts with well-founded knowledge of religious
                minority groups in Europe are already lacking and sought after.
                It is, therefore, the Chairs declared aim to provide this sort
                of cultural competences at the undergraduate level (B.A.
                programme) that will enable the graduate to play a vital part in
                different areas of society, such as economy, politics, education
                or the media, and to fulfill not an preclusive, but an
                integrative function within them.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} onClick={() => handleOpen(3)}>
              <AccordionHeader className="flex justify-between w-full p-2 border-black border-t-2 border-b-2 bg-cream text-white">
                <div className="flex justify-between w-full p-2">
                  Methodology
                  {open === 3 ? (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4 text-lg mb-8 pb-10">
                <div className="mb-8">
                  The Chair of Muslim Cultural and Religious History at the
                  University of Erfurt puts great emphasis on
                  interdisciplinarity and internationality. This is, on the one
                  hand, reflected in its integration into the universitys
                  Department of Religious Studies that imparts broad knowledge
                  of the European religious landscape. On the other hand, the
                  Chair cooperates with other departments, such as Political
                  Science, History, Communication Studies or Theology, and
                  expresses shared interests within the framework of the
                  compulsory “Studium Fundamentale”. Moreover, the programme
                  allows for optional semesters, field excursions and
                  internships abroad. Cultural Studies and Social Sciences in
                  general and Religious Studies in particular need to extend and
                  improve their practical orientation in order to make their
                  expertise fruitful and applicable in politics, commerce and
                  society. Experts with well-founded knowledge of religious
                  minority groups in Europe are already lacking and sought
                  after. It is, therefore, the Chairs declared aim to provide
                  this sort of cultural competences at the undergraduate level
                  (B.A. programme) that will enable the graduate to play a vital
                  part in different areas of society, such as economy, politics,
                  education or the media, and to fulfill not an preclusive, but
                  an integrative function within them.
                </div>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="px-10 my-10">
          <h1 className="my-10 pt-10 text-5xl sanspro font-black text-darkbrown text-center font-extrabold">
            CONTACT US
          </h1>
          <div className="flex shadow-lg bg-brown text-white rounded-md text-left justify-center py-10 px-1 mt-10">
            <div className="relative flex justify-between flex-col sm:flex-row text-lg font-semibold">
              <div className="sm:w-2/4 mt-2">
                <div>
                  <div className="markdown-reset">
                    <Markdown>{address}</Markdown>
                  </div>
                  <p className="my-3 font-semibold">
                    Email:{" "}
                    <a
                      className="hover:text-blue-500 text-yellow-300"
                      href={"mailto:" + email}
                    >
                      {email}
                    </a>
                  </p>
                  <p className="my-3 font-semibold">
                    Phone:{" "}
                    <a
                      className="text-yellow-300  hover:text-blue-500"
                      href={"tel:" + telephone}
                    >
                      {telephone}
                    </a>
                  </p>
                </div>
                <div>
                  <Contact />
                </div>
              </div>
              <div className="sm:w-2/4 flex justify-end">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7152261889514!2d75.89251971419601!3d11.13457385552672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6513c490a804f%3A0x58cb496669f29102!2sIslamic%20chair%20and%20research%2C%20calicut%20university!5e0!3m2!1sen!2sin!4v1651944181265!5m2!1sen!2sin"
                  width="550"
                  height="600"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className=""
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
