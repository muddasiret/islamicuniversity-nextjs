import React, { useEffect } from "react";

const PaperCard = ({ details }) => {
  const { title, author, image, pdf } = details.attributes;
  const thumb = image.data.attributes.url;
  const pdfLink = pdf.data.attributes.url;

  return (
    <a
      href={pdfLink}
      target="_blank"
      rel="noreferrer"
      className="mt-5 text-left bg-slate-200/50 p-5 cursor-pointer shadow-lg group card-zoom hover:shadow-2xl"
    >
      <p className="text-sky-800 text-lg my-2 ">{author}</p>
      <img src={thumb} alt="thumb" />
      <h2 className="text-left text-md uppercase pt-4 mb-2 font-bold leading-6">
        {title}
      </h2>
    </a>
  );
};

export default PaperCard;
