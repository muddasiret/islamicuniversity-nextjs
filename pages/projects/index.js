import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import ProjectCard from "../../components/ProjectCard";
import { fetchAPI } from "../../lib/api";
import { getTitleImage } from "../../utils/getTitleImage";

const Projects = ({ projects,global }) => {
  let title_image =  getTitleImage(global,"PROJECTS")

  return (
    <Layout>
      <PageTitle title="PROJECTS" title_image={title_image}/>
      <MainLayout>
        <h1 className="my-5 md:text-5xl text-4xl sanspro font-black text-darkbrown text-center uppercase">
          Research Fellowships
        </h1>
        <p className="my-2 sanspro md:text-2xl font-semibold text-black-700 text-center">
          Cambridge Muslim College is pleased to support and host a number of
          Research Fellowships each year. All of our active research projects
          can be explored below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
