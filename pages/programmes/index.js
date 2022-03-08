import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Layout from "../Common/Layout";
import ItemCard from "../home/ItemCard";

const Programmes = () => {
  const items = [
    { title: "Contextual Islamic Studies", type: "Diploma" },
    { title: "Islamic Studies", type: "BA (HONS)" },
    { title: "Islamic Psychology", type: "Online Diploma" },
    { title: "Continuing Education" },
  ];
  return (
    <>
      <Header />
      <h2 className="py-5 px-10 text-xl md:text-3xl text-left text-sky-800 font-bold">
        PROGRAMMES
      </h2>
      <Layout>
        <h1 className="py-2 text-2xl md:text-4xl text-sky-700 font-bold">
          Study
        </h1>
        <h3 className="py-5 md:px-20 text-xl md:text-xl text-slate-700 font-bold">
          We currently offer three full and part time academic programmes.
        </h3>
        <div className="md:grid md:gap-4 md:grid-cols-3  py-5">
          {items.map((item, ind) => (
            <ItemCard key={ind} title={item.title} sub={item.type} readmore />
          ))}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Programmes;
