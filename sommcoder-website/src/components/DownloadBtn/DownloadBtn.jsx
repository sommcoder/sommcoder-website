import styled from "styled-components";

export default function DownloadBtn() {
  return <StyledDownloadBtn>Download CV</StyledDownloadBtn>;
}
const StyledDownloadBtn = styled.button`
  margin: 1rem;
  display: none;

  @media (min-width: 600px) {
    display: inline-block;
  }
`;
