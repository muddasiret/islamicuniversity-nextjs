import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import MainLayout from "../../components/mainLayout";

const ProjectOpen = ({ project }) => {
  // const imageUrl = getStrapiMedia(article.attributes.image);
  // const seo = {
  //   metaTitle: article.attributes.title,
  //   metaDescription: article.attributes.title,
  //   shareImage: article.attributes.image,
  //   article: true,
  // };
  const { title, image, introduction, events, publications, team } =
    project.attributes;

  return (
    <Layout>
      {/* <Seo seo={seo} /> */}
      <MainLayout>
        {/* <PageTitle title={title} /> */}
        <div className="px-10">
          <h1 className="py-2 text-sm md:text-4xl text-primaryblue font-bold text-center my-5">
            {title}
          </h1>
          <div className="mb-5">
            {introduction && (
              <div className="my-3 text-slate-600 text-left rounded-md bg-white p-5">
                <div className="text-center mb-3 uppercase text-2xl font-bold text-primaryblue">
                  introduction
                </div>
                <ReactMarkdown>{introduction}</ReactMarkdown>
              </div>
            )}
          </div>
          <div className="mb-5 text-center">
            <h1 className="text-2xl mb-5 text-blue-700 font-bold">TEAM</h1>
            {team &&
              team.map((member, ind) => {
                const { name, designation, description, image } = member;
                const thumb = image.data.attributes.url;
                return (
                  <div className="mb-10" key={ind}>
                    <div className="text-center flex flex-col items-center">
                      <img
                        src={thumb}
                        alt="profile"
                        className="text-center h-32 flex"
                      />
                      <p className="text-center font-bold my-5">{name}</p>
                    </div>
                    <div className="my-2 text-left">
                      <span>
                        <b>{designation}</b> {description}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="my-5">
            {events && (
              <div className="my-3 text-slate-600 text-left p-5">
                <div className="text-center mb-3 uppercase text-3xl font-bold text-primaryblue">
                  Events
                </div>
                <div className="pb-5">
                  <ReactMarkdown>{events}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
          <div className="my-5">
            {publications && (
              <div className="my-3 text-slate-600 text-left p-5">
                <div className="text-center mb-3 uppercase text-3xl font-bold text-primaryblue">
                  PUBLICATIONS
                </div>
                <div className="pb-5">
                  <ReactMarkdown>{publications}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
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
      </MainLayout>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/projects", { fields: ["slug"] });

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
  const res = await fetchAPI("/projects", {
    filters: {
      slug: params.slug,
    },
    populate: ["team", "image", "team.image"],
  });

  return {
    props: { project: res.data[0] },
    revalidate: 1,
  };
}

export default ProjectOpen;
