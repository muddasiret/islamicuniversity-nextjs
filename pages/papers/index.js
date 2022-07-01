import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import PaperCard from "../../components/paperCard";
import { fetchAPI } from "../../lib/api";

const Papers = ({ papers }) => {
  return (
    <Layout>
      <PageTitle title="PAPERS" />
      <MainLayout>
        <h1 className="my-5 md:text-5xl text-4xl sanspro font-black text-primaryblue uppercase text-center">
          Research Papers
        </h1>
        <p className="my-5 sanspro md:text-2xl font-semibold text-center md:px-16 md:mx-10">
          From time to time, Cambridge Muslim College commissions scholarly
          papers and articles. Nine of these are published and can be downloaded
          as PDF documents below.{" "}
        </p>
        {papers && papers.length !== 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
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
