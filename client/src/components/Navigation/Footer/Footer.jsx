import styled from "styled-components";
import FooterLeftContainer from "../FooterLeftContainer/FooterLeftContainer";
import FooterRightContainer from "../FooterRightContainer/FooterRightContainer";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterHeader>SOMMCODER</StyledFooterHeader>
      <FooterLeftContainer />
      <FooterRightContainer />
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  z-index: 2;
  min-width: 32rem; // min screen width worrying about
  max-width: 100%;
  display: grid;
  min-height: 6rem;
  background-image: linear-gradient(to bottom right, #324935, #59755d);
  // the second parameter is negative to go above Footer component
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.08), 0 -2px 2px rgba(0, 0, 0, 0.12),
    0 -4px 4px rgba(0, 0, 0, 0.16), 0 -8px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 2rem;
  padding: 2rem;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledFooterHeader = styled.div`
  margin-top: 2rem;
  grid-column: span 2;
  font-family: "Major Mono Display", sans-serif;
  font-size: 2.5rem;
`;
