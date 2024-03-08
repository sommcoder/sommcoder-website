import styled from "styled-components";
import { IoMdDownload } from "react-icons/io";

import cv from "/Brian - resume.pdf";

export default function ResumeBtn() {
  return (
    <StyledResumeBtn onClick={() => {}}>
      <a download="Brian's Resume" href={cv}>
        <IoMdDownload
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        />
        <span className="button-text">My Resume</span>
      </a>
    </StyledResumeBtn>
  );
}

const StyledResumeBtn = styled.button`
  display: none;
  margin-right: 4rem;
  padding: 1rem;

  // desktop:
  @media (min-width: 50rem) {
    display: inline-block; // make it visible
    width: 12rem;
    a {
      display: grid;
      grid-template-columns: 20% 80%;
      justify-items: center;
      align-items: center;
      align-items: center;
      color: black;
      height: 100%;
      width: 100%;
    }
    span {
      padding: 0rem;
      display: flex;
      line-height: 1.5rem;
      align-items: center;
      font-size: 1.3rem;
    }
  }
`;
