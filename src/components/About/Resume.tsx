import * as React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import pdfFile from "./assets/resume.pdf";
import "./styles/Resume.scss";

interface IResumeProps {}

const ResumeDownload = () => {
  return (
    <div className="resume__download">
      <a href={pdfFile} target="_blank">
        {" "}
        Download resume in PDF format
      </a>
    </div>
  );
};

const Resume: React.FunctionComponent<IResumeProps> = (props) => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
  }

  return (
    <>
      <ResumeDownload />
      <div className="resume">
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} loading={<div>Loading...</div>} />
        </Document>
        <p className="resume__page-controls">
          <button onClick={() => setPageNumber(1)}>
            <BsArrowLeft />
          </button>
          <span className="resume__page-position">
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={() => setPageNumber(2)}>
            <BsArrowRight />
          </button>
        </p>
      </div>
    </>
  );
};

export default Resume;
