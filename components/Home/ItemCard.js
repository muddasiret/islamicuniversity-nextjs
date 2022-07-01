import Link from "next/link";

const ItemCard = ({ details }) => {
  let sub;
  const { label, link } = details;
  return (
    <Link href={link}>
      <div className="mt-5 text-center py-5 px-5 mb-5 bg-white shadow-lg hover:shadow-2xl rounded-md cursor-pointer">
        <h2 className="text-center text-primaryblue py-2 font-bold text-lg">
          <p className="text-center py-2 uppercase roboto-text">{label}</p>
        </h2>
        <img
          src="https://479141-1506839-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/college_closed_img-700x441.jpg"
          alt="event-card"
          className="w-100 rounded-md"
        />
        <p className="pt-2 text-base mt-2 px-2">
          {sub
            ? sub
            : `Islamic University’s Online Learning Platform, home to exclusive
            Lecture Series.`}
        </p>
        <button className="my-5 p-2 px-5 rounded text-white text-sm bg-brown">
          READ MORE
        </button>
      </div>
    </Link>
  );
};

export default ItemCard;
