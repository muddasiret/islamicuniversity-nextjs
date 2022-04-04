const ItemCard = ({ title, readmore, sub }) => {
  return (
    <div className="mt-5 text-center py-5 px-5 mb-5 bg-slate-200 rounded-md">
      <a href="https://www.cambridgemuslimcollege.ac.uk/">
        <h2 className="text-center text-indigo-800 py-2 font-bold text-lg">
          <p className="text-center py-2 uppercase">{title}</p>
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
        {readmore && (
          <button className="my-5 p-2 text-white text-sm bg-blue-800">
            READ MORE
          </button>
        )}
      </a>
    </div>
  );
};

export default ItemCard;