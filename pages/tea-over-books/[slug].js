import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import YoutubeEmbed from "../../Common/YoutubeEmbed";
import MainLayout from "../../components/mainLayout";

const Book = ({ books }) => {
  const { book_name, cover, youtube_link, description, author } =
    books.attributes;

  const image = cover.data.attributes.url;

  return (
    <Layout>
      <MainLayout>
        <h1 className="text-4xl my-10 py-5 sanspro font-black text-darkbrown">
          {book_name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <img src={image} className="book-cover" />
          <div className="book-details col-span-4">
            <p className="text-skyblue font-semibold text-lg mb-0">{author}</p>
            <div className="pr-10 py-5">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>
        </div>
        <YoutubeEmbed
          embedLink={youtube_link}
          classes="mt-10 py-10 md:px-25 md:h-[34rem]"
        />
      </MainLayout>
    </Layout>
  );
};

export async function getStaticPaths() {
  const books = await fetchAPI("/tea-over-books", { fields: ["slug"] });

  return {
    paths: books.data.map((books) => ({
      params: {
        slug: books.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const books = await fetchAPI("/tea-over-books", {
    filters: {
      slug: params.slug,
    },
    populate: ["cover"],
  });

  return {
    props: { books: books.data[0] },
    revalidate: 1,
  };
}

export default Book;
