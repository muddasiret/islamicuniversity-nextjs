const EventCard = (props) => {
  let imgSrc =
    "https://479141-1506839-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/college_closed_img-700x441.jpg";
  if (props.data) {
    imgSrc = props.data.imgSrc;
  }

  return (
    <div className="mt-5 text-left">
      <img src={imgSrc} alt="event-card" className="w-100" />
      <h2 className="text-left text-indigo-800 py-2">
        <a
          className="text-left py-2"
          href="https://479141-1506839-raikfcquaxqncofqfm.stackpathdns.com"
        >
          Vacancy – Finance Manager
        </a>
      </h2>
      <p className="text-xs text-slate-500">January 29th, 2022</p>
      <p className="pt-2 text-sm pr-5">
        Finance Manager The Finance Manager with oversight from the Operations
        Director will be [...]
      </p>
    </div>
  );
};

export default EventCard;
