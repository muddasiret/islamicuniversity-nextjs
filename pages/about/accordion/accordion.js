import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Accordion = ({ title, content, pdf }) => {
  const [isActive, setIsActive] = useState(false);
  console.log("pdf", pdf);
  const pdfLink = pdf ? (pdf.data ? pdf.data.attributes.url : "") : "";

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <Fade direction="left" duration={700} triggerOnce>
          <div className="accordion-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </Fade>
      )}
      {isActive && pdfLink && (
        <div className="mb-5">
          <a
            rel="noreferrer"
            className="p-5 text-blue-500 font-bold mb-5 pb-5"
            target={"_blank"}
            href={pdfLink}
          >
            View PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default Accordion;
