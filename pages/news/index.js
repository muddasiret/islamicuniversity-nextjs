import YoutubeEmbed from "../../Common/YoutubeEmbed";
import NewsCard from "../../components/Home/NewsCard";
import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import { fetchAPI } from "../../lib/api";

const News = ({ newses }) => {
  return (
    <Layout>
      <PageTitle title="NEWS" />
      <MainLayout>
        <div className="my-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {newses.map((news, ind) => {
              return <NewsCard newsDetails={news} key={ind} />;
            })}
          </div>
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [data] = await Promise.all([
    fetchAPI("/newses", { populate: "image" }),
  ]);

  return {
    props: {
      newses: data.data,
    },
    revalidate: 1,
  };
}

export default News;
