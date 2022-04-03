import Link from "next/link";
import Moment from "react-moment";

const EventCard = ({ data }) => {
  let imgSrc =
    "https://479141-1506839-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/college_closed_img-700x441.jpg";
  const { title, datetime, slug } = data.attributes;
  if (data) {
    imgSrc = data.attributes.image.data.attributes.url;
  }
  console.log(data.attributes);

  return (
    <Link href={`/events/${slug}`} passHref={true}>
      <div className="mt-5 text-left cursor-pointer">
        <img
          src={imgSrc}
          alt="event-card"
          className="w-full h-44 object-cover"
        />
        <h2 className="text-left text-indigo-800 py-2">{title}</h2>
        {datetime && (
          <p className="text-xs text-slate-500">
            <Moment format="MMM Do YYYY">{datetime}</Moment> ,{" "}
            <Moment format="LT">{datetime}</Moment>
          </p>
        )}
        {/* <p className="pt-2 text-sm pr-5">
        Finance Manager The Finance Manager with oversight from the Operations
        Director will be [...]
      </p> */}
      </div>
    </Link>
  );
};

export default EventCard;
