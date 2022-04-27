import Link from "next/link";

const NewsCard = ({ newsDetails }) => {
  let imgSrc = "images/newsdummy.jpeg";
  const { title, slug, image, category, subtitle } = newsDetails.attributes;
  if (newsDetails) {
    imgSrc = image.data.attributes.url;
  }
  let subtitleFormatted =
    subtitle.length > 60 ? subtitle.slice(0, 60) + "...." : subtitle;
  return (
    <Link href={`/news/${slug}`} passHref={true}>
      <div className="mt-5 text-left bg-slate-200/50 cursor-pointer shadow-lg group card-zoom hover:shadow-2xl">
        <p className="text-left text-md uppercase text-red-700 px-4 pt-3 font-bold ">
          {category}
        </p>
        <div
          style={{ backgroundImage: `url(${imgSrc})` }}
          className="w-100 mt-3 h-52 card-zoom-image"
        />
        <h2 className="mt-56 text-left text-md uppercase text-black-600 px-4 pb-2 pt-2 font-bold leading-6">
          {title}
        </h2>
        <p className="text-left px-4 mb-5 text-xs text-slate-600">
          {subtitleFormatted}
        </p>
        {/* <p className="text-sm text-slate-400 mb-5 italic uppercase px-5">
          -<Moment format="MMMM Do YYYY">{createdAt}</Moment>
        </p> */}
      </div>
    </Link>
  );
};

export default NewsCard;
