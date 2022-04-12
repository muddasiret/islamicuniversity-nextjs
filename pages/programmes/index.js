import Layout from "../../components/layout";
import PageTitle from "../../components/pageTitle";
import ProgrammeCard from "../../components/programmeCard";
import { fetchAPI } from "../../lib/api";

const Programmes = ({ programmes }) => {
  return (
    <Layout>
      <PageTitle title="PROGRAMMES" />
      <h1 className="my-5 text-5xl text-sky-700 text-center">Study</h1>
      <p className="my-2 text-xl font-bold text-black-700 text-center">
        We currently offer three full and part time academic programmes.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {programmes.map((item, ind) => {
          return <ProgrammeCard details={item} key={ind} />;
        })}
      </div>
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