import styled from "styled-components";
import downloadIcon from "../../assets/images/download-solid.svg";
import cv from "../../assets/pdf/Brian - Resume.pdf";

export default function DownloadBtn() {
  return (
    <StyledDownloadBtn onClick={() => {}}>
      <a download="Brian's Resume" href={cv}>
        <img alt="download icon from font-awesome" src={downloadIcon} />
        Download CV
      </a>
    </StyledDownloadBtn>
  );
}
const StyledDownloadBtn = styled.button`
  margin-left: 1rem; // keeps btn away from icons
  display: none;

  a {
    color: black;
  }

  img {
    height: 15px;
    width: 15px;
    margin: 0 0.5rem 0 0.5rem;
  }

  @media (min-width: 600px) {
    display: inline-block;
  }
`;
