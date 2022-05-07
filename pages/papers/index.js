import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import PaperCard from "../../components/paperCard";
import { fetchAPI } from "../../lib/api";

const Papers = ({ papers }) => {
  return (
    <Layout>
      <MainLayout>
        <PageTitle title="PAPERS" />
        <h1 className="my-5 text-4xl text-primaryblue text-center">
          Research Papers
        </h1>
        <p className="my-5 text-lg font-bold text-black-700 text-center px-16">
          From time to time, Cambridge Muslim College commissions scholarly
          papers and articles. Nine of these are published and can be downloaded
          as PDF documents below.{" "}
        </p>
        {papers && papers.length !== 0 && (
          <div className="grid grid-cols-3 gap-6">
            {papers.map((item, ind) => {
              return <PaperCard details={item} key={ind} />;
            })}
            {papers.map((item, ind) => {
              return <PaperCard details={item} key={ind} />;
            })}
          </div>
        )}
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [papers] = await Promise.all([
    fetchAPI("/papers", { populate: ["image", "pdf"] }),
  ]);

  return {
    props: {
      papers: papers.data,
    },
    revalidate: 1,
  };
}

export default Papers;
