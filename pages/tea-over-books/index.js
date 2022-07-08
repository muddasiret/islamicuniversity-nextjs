import BookCard from "../../components/bookCard";
import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import PaperCard from "../../components/paperCard";
import { fetchAPI } from "../../lib/api";

const TeaOverBooks = ({ books }) => {
  return (
    <Layout>
      <PageTitle title="TEA OVER BOOKS" />
      <MainLayout>
        <section className="my-10 py-10">
          <h1 className="my-5 md:text-5xl mb-10 text-4xl sanspro font-black uppercase text-darkbrown text-center">
            About the Books
          </h1>
          <div className="mx-5 grid grid-cols-1 md:grid-cols-4 gap-10">
            {books.map((book, ind) => {
              return <BookCard bookDetails={book} key={ind} />;
            })}
            {books.map((book, ind) => {
              return <BookCard bookDetails={book} key={ind} />;
            })}
          </div>
        </section>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [books] = await Promise.all([
    fetchAPI("/tea-over-books", { populate: ["cover"] }),
  ]);

  return {
    props: {
      books: books.data,
    },
    revalidate: 1,
  };
}

export default TeaOverBooks;
