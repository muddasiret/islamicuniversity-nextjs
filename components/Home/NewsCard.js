import Link from "next/link";
import Moment from "react-moment";

const NewsCard = ({ newsDetails }) => {
  console.log(process.env.NEXT_APP_NODE_ENV)
  let imgSrc = "images/newsdummy.jpeg";
  const { title, createdAt, slug } = newsDetails.attributes;
  if (newsDetails) {
    imgSrc =
      process.env.NEXT_APP_NODE_ENV === "LOCAL"
        ? process.env.SERVER + newsDetails.attributes.image.data.attributes.url
        : newsDetails.attributes.image.data.attributes.url;
  }
  console.log(imgSrc);
  return (
    <Link href={`/news/${slug}`} passHref={true}>
      <div className="mt-5 text-left bg-slate-200/50 cursor-pointer shadow-lg group card-zoom hover:shadow-2xl">
        <div style={{backgroundImage:`url(${imgSrc})`}} className="w-100 h-40 bg-cover card-zoom-image" />
        <p className="mt-40 text-left text-md uppercase text-red-700 px-5 pt-3 font-bold ">SPORTS</p>
        <h2 className="text-left mb-5 text-md uppercase text-black-600 px-5 pb-2 pt-2 font-bold leading-6">
          {title}
        </h2>
        {/* <p className="text-sm text-slate-400 mb-5 italic uppercase px-5">
          -<Moment format="MMMM Do YYYY">{createdAt}</Moment>
        </p> */}
      </div>
    </Link>
  );
};

export default NewsCard;
