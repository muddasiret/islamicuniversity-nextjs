import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import AnimateHeight from "react-animate-height";
import PageTitle from "../../components/pageTitle";
import YoutubeEmbed from "../../Common/YoutubeEmbed";
import { useEffect, useState } from "react";

const ProgrammeOpen = ({ programme }) => {
  // const imageUrl = getStrapiMedia(article.attributes.image);
  // const seo = {
  //   metaTitle: article.attributes.title,
  //   metaDescription: article.attributes.title,
  //   shareImage: article.attributes.image,
  //   article: true,
  // };
  const {
    title,
    description,
    youtube_link,
    syllabus,
    sub_description,
    how_to_apply,
  } = programme.attributes;

  const [openYear, setOpenYear] = useState([]);
  const [openApply, setOpenApply] = useState([]);
  const [currSyllabus, setSyllabus] = useState(syllabus);
  const [currApply, setApply] = useState(how_to_apply);

  useEffect(() => {
    setOpenYear([]);
    setOpenApply([]);
  }, []);

  const openYearHandler = (ind) => {
    let index = openYear.indexOf(ind);
    let currArr = openYear;
    if (index === -1) {
      currArr.push(ind);
    } else {
      currArr.splice(index, 1);
    }
    console.log(currArr);
    setOpenYear(currArr);
    console.log(openYear);
    setSyllabus([...syllabus]);
  };

  const openApplyHandler = (ind) => {
    let index = openApply.indexOf(ind);
    let currArr = openApply;
    if (index === -1) {
      currArr.push(ind);
    } else {
      currArr.splice(index, 1);
    }
    setOpenApply(currArr);
    setApply([...how_to_apply]);
  };

  return (
    <Layout>
      {/* <Seo seo={seo} /> */}
      <PageTitle title="DIPLOMA" />
      <div className="px-10">
        <h1 className="py-2 text-sm md:text-4xl text-sky-700 font-bold text-center my-5">
          {title}
        </h1>
        <YoutubeEmbed embedLink={youtube_link} classes="mt-5 md:h-[30rem]" />
        <div className="flex">
          <div className="mb-5">
            {description && (
              <div className="my-3 text-slate-600 text-center bg-slate-100 p-5">
                <ReactMarkdown>{description}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>

        {sub_description && (
          <div className="my-12">
            <div dangerouslySetInnerHTML={{ __html: sub_description }} />
          </div>
        )}
        {currSyllabus && openYear && (
          <div className="grid grid-cols-3 gap-6">
            {currSyllabus.map((item, ind) => {
              let descShow = openYear.includes(ind);
              console.log(descShow);
              return (
                <div
                  onClick={() => openYearHandler(ind)}
                  className="border-2 p-3 h-min cursor-pointer transition-all year-card"
                  key={ind}
                >
                  <div className="flex items-center">
                    <div className="bg-sky-700 text-white px-3 mr-2 py-1 text-md">
                      {descShow ? "-" : "+"}
                    </div>
                    <p className="uppercase text-sky-800">{item.title}</p>
                  </div>
                  {descShow && <p className="mt-5">{item.description}</p>}
                </div>
              );
            })}
          </div>
        )}

        <h1 className="text-center mt-10 mb-7 text-2xl font-bold">
          HOW TO APPLY
        </h1>

        {currApply && openApply && (
          <div>
            {currApply.map((item, ind) => {
              let descShow = openApply.includes(ind);
              console.log(descShow);
              return (
                <div
                  onClick={() => openApplyHandler(ind)}
                  className="border-2 p-3 h-min cursor-pointer mb-2"
                  key={ind}
                >
                  <div className="flex items-center">
                    <div className="bg-sky-700 text-white px-2  mr-2 ml-2 text-md">
                      {descShow ? "-" : "+"}
                    </div>
                    <p className="uppercase text-sky-800">{item.title}</p>
                  </div>
                  {descShow && <p className="mt-5">{item.description}</p>}
                </div>
              );
            })}
          </div>
        )}
        {/* {pdf &&
        pdf.data &&
        pdf.data.map((pdf, ind) => {
          const pdfLink = pdf.attributes.url;
          const pdfName = pdf.attributes.name;
          return (
            <a key={ind} href={pdfLink} target="_blank" rel="noreferrer">
              <div className="py-2 mb-4 w-fit text-center px-3 bg-blue-700 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                Download {pdfName}
              </div>
            </a>
          );
        })} */}
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/programmes", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetchAPI("/programmes", {
    filters: {
      slug: params.slug,
    },
    populate: ["syllabus", "how_to_apply"],
  });

  return {
    props: { programme: res.data[0] },
    revalidate: 1,
  };
}

export default ProgrammeOpen;
