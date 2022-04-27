import Link from "next/link";
import React from "react";

const ProjectCard = ({ details }) => {
  const { title, slug, image, short_description } = details.attributes;
  const thumb = image.data.attributes.url;

  return (
    <Link href={"/projects/" + slug}>
      <div className="my-4 flex flex-col justify-center items-center text-center bg-slate-200/50 cursor-pointer shadow-lg group card-zoom hover:shadow-2xl">
        <h2 className="text-center my-5 text-lg uppercase text-sky-800 px-5 pb-2 pt-2 font-bold leading-6">
          {title}
        </h2>
        <img src={thumb}/>
        {/* <div
          style={{ backgroundImage: `url(${thumb})` }}
          className="h-44 w-10/12 bg-cover"
        /> */}
        <p className="text-center text-slate-500 py-5 px-5">{short_description}</p>
        <div className="text-center mb-5">
          <button className="bg-sky-800 text-white p-2 px-4 text-center align-middle mb-2">
            LEARN MORE
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
