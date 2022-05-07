import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import ProjectCard from "../../components/ProjectCard";
import { fetchAPI } from "../../lib/api";

const Projects = ({ projects }) => {
  return (
    <Layout>
      <MainLayout>
        <PageTitle title="PROJECTS" />
        <h1 className="my-5 text-5xl text-primaryblue text-center">
          Research Fellowships
        </h1>
        <p className="my-2 text-xl font-bold text-black-700 text-center">
          Cambridge Muslim College is pleased to support and host a number of
          Research Fellowships each year. All of our active research projects
          can be explored below.
        </p>
        <div className="grid">
          {projects.map((item, ind) => {
            return <ProjectCard details={item} key={ind} />;
          })}
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [projects] = await Promise.all([
    fetchAPI("/projects", { populate: "image" }),
  ]);

  return {
    props: {
      projects: projects.data,
    },
    revalidate: 1,
  };
}

export default Projects;
