import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Accordion = ({ title, content, pdf }) => {
  const [isActive, setIsActive] = useState(false);
  const pdfLink = pdf ? (pdf.data ? pdf.data.attributes.url : "") : "";
  useEffect(() => {
    if (content.props) console.log(content.props.children);
  }, [content]);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive &&
        (content.props ? (
          <div className="accordion-content">
            {content.props.children.map(
              (link, ind) =>
                link.props && (
                  <div>
                    <Link
                      key={ind}
                      href={link.props.href}
                      className="uppercase rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-100 hover:text-slate-900 group relative"
                    >
                      {link.props.children}
                    </Link>
                  </div>
                )
            )}
          </div>
        ) : (
          <Fade direction="left" duration={700} triggerOnce>
            <div className="accordion-content">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </Fade>
        ))}
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
