import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import ProgrammeCard from "../../components/programmeCard";
import { fetchAPI } from "../../lib/api";

const Programmes = ({ programmes }) => {
  return (
    <Layout>
      <PageTitle title="PROGRAMMES" />
      <MainLayout>
        <h1 className="my-5 md:text-5xl text-4xl sanspro font-black uppercase text-primaryblue text-center">Study</h1>
        <p className="md:my-2 sanspro md:text-2xl text-xl font-semibold text-black-700 text-center">
          We currently offer three full and part time academic programmes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programmes.map((item, ind) => {
            return <ProgrammeCard details={item} key={ind} />;
          })}
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [programmes] = await Promise.all([
    fetchAPI("/programmes", { populate: "image" }),
  ]);

  return {
    props: {
      programmes: programmes.data,
    },
    revalidate: 1,
  };
}

export default Programmes;
