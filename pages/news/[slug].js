import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import YoutubeEmbed from "../../Common/YoutubeEmbed";
import SocialButtons from "../../components/socialButtons";
import MainLayout from "../../components/mainLayout";

const Article = ({ article }) => {
  const { title, subtitle, youtube_link, published_at, content, pdf } =
    article.attributes;
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.title,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <Layout>
      <MainLayout>
        <Seo seo={seo} />
        <h1 className="py-2 text-2xl md:text-4xl text-primaryblue font-bold">
          {title}
        </h1>
        <div className="flex justify-between items-center">
          <span className="bg-slate-100 text-slate-700 rounded-md p-2 mt-2 mb-2 text-center">
            <Moment format="MMM Do YYYY">{published_at}</Moment>
          </span>
          <SocialButtons title={title} />
        </div>
        <YoutubeEmbed
          embedLink={youtube_link}
          classes="mt-5 md:px-20 md:h-[30rem]"
        />
        <h2 className="py-5 text-xl md:text-xl text-center text-primaryblue font-bold">
          {subtitle}
        </h2>
        <div className="pr-10 py-5">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        {pdf &&
          pdf.data &&
          pdf.data.map((pdf, ind) => {
            const pdfLink = pdf.attributes.url;
            const pdfName = pdf.attributes.name;
            return (
              <a key={ind} href={pdfLink} target="_blank" rel="noreferrer">
                <div className="py-2 mb-4 w-fit text-center px-3 bg-primaryblue text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                  Download {pdfName}
                </div>
              </a>
            );
          })}
      </MainLayout>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/newses", { fields: ["slug"] });

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
  const articlesRes = await fetchAPI("/newses", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "pdf"],
  });

  return {
    props: { article: articlesRes.data[0] },
    revalidate: 1,
  };
}

export default Article;
