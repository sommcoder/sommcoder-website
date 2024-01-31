import styled from "styled-components";
import downloadIcon from "/download-solid.svg";
import cv from "/Brian - Resume.pdf";

export default function DownloadBtn() {
  return (
    <StyledDownloadBtn onClick={() => {}}>
      <a download="Brian's Resume" href={cv}>
        <img alt="download icon from font-awesome" src={downloadIcon} />
        <span className="button-text">Download CV</span>
      </a>
    </StyledDownloadBtn>
  );
}
const StyledDownloadBtn = styled.button`
  display: none;
  margin-right: 2rem;

  // desktop:
  @media (min-width: 600px) {
    display: inline-block; // make it visible
    width: 12rem;

    a {
      display: flex;
      align-items: center;
      color: black;
      height: 100%;
      width: 100%;
    }

    img {
      display: inline-block;
      height: 1.5rem;
      width: 1.5rem;
      margin: 0 0.5rem 0 0.5rem;
    }

    span {
      display: flex;
      line-height: 1.5rem;
      align-items: center;
    }
  }
`;
