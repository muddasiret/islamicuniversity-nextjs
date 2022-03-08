import Link from "next/link";
import Moment from "react-moment";

const NewsCard = ({ newsDetails }) => {
  let imgSrc = "images/newsdummy.jpeg";
  const { title, createdAt, slug } = newsDetails.attributes;
  if (newsDetails) {
    imgSrc =
      process.env.NEXT_PUBLIC_STRAPI_API_URL +
      newsDetails.attributes.image.data.attributes.url;
  }
  console.log(slug);
  return (
    <Link href={`/news/${slug}`} passHref={true}>
      <div className="mt-5 text-left bg-slate-200/50 cursor-pointer">
        <h2 className="text-left text-md uppercase text-black-600 px-5 pt-5 pb-2 font-bold leading-6">
          {title}
        </h2>
        <p className="text-sm text-slate-400 mb-5 italic uppercase px-5">
          -<Moment format="MMMM Do YYYY">{createdAt}</Moment>
        </p>
        <img src={imgSrc} alt="event-card" className="w-100" />
      </div>
    </Link>
  );
};

export default NewsCard;
