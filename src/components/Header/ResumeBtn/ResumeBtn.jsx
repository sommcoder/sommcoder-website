import styled from "styled-components";
import { IoMdDownload } from "react-icons/io";

import cv from "/Brian - resume.pdf";

export default function ResumeBtn() {
  return (
    <StyledResumeBtn onClick={() => {}}>
      <a download="Brian's Resume" href={cv}>
        <IoMdDownload style={{ height: "2rem", width: "2rem" }} />
        <span className="button-text">Download CV</span>
      </a>
    </StyledResumeBtn>
  );
}

const StyledResumeBtn = styled.button`
  display: none;
  margin-right: 4rem;

  // desktop:
  @media (min-width: 50rem) {
    display: inline-block; // make it visible
    width: 12rem;

    a {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: 20% 80%;
      align-items: center;
      color: black;
      height: 100%;
      width: 100%;
    }
    span {
      display: flex;
      line-height: 1.5rem;
      align-items: center;
    }
  }
`;
