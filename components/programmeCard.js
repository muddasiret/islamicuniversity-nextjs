import Link from "next/link";
import React from "react";

const ProgrammeCard = ({ details }) => {
  const { title, slug, image } = details.attributes;
  const thumb = image.data.attributes.url;
  let degree = "diploma";
  return (
    <Link href={"/programmes/" + slug}>
      <div className="my-7 flex flex-col justify-center items-center text-center bg-slate-200/50 cursor-pointer shadow-lg group card-zoom hover:shadow-2xl">
        <h2 className="text-center my-5 text-lg uppercase text-primaryblue px-5 pb-2 pt-2 font-bold leading-6">
          {title}
        </h2>
        <div
          style={{ backgroundImage: `url(${thumb})` }}
          className="h-44 w-10/12 bg-cover"
        />
        <p className="text-center py-5 uppercase font-semibold">{degree}</p>
        <div className="text-center mb-5">
          <button className="bg-primaryblue text-white p-2 px-4 text-center align-middle mb-2">
            READ MORE
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProgrammeCard;
