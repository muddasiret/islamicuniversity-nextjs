import Link from "next/link";
import Moment from "react-moment";
import { BiTime } from "react-icons/bi";

const EventCard = ({ data }) => {
  let imgSrc =
    "https://479141-1506839-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/college_closed_img-700x441.jpg";
  const { title, datetime, slug, location } = data.attributes;
  if (data) {
    imgSrc = data.attributes.image.data.attributes.url;
  }

  return (
    <Link href={`/events/${slug}`} passHref={true}>
      <div className="mt-5 text-left cursor-pointer relative">
        <img
          src={imgSrc}
          alt="event-card"
          className="w-full h-52 object-cover"
        />
        <div className="absolute bottom-0 w-full">
          {datetime && (
            <p className="text-xs text-white bg-blue-600/[.4] w-2/5 px-3 py-2 flex items-center">
              <BiTime color="white" className="mr-1"/>
              <Moment format="MMM Do YYYY">{datetime}</Moment>
            </p>
          )}
          <div className="text-white bg-slate-700/[.6] w-full py-2 px-3">
            <h4 className="text-left text-md font-bold ">{title}</h4>
            <span className="text-xs">
              <Moment format="LT">{datetime}</Moment> {location}
            </span>
          </div>
        </div>
        {/* <p className="pt-2 text-sm pr-5">
        Finance Manager The Finance Manager with oversight from the Operations
        Director will be [...]
      </p> */}
      </div>
    </Link>
  );
};

export default EventCard;
