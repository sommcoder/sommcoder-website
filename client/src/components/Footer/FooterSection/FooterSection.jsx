import styled from "styled-components";
import FooterLeftContainer from "../FooterLeftContainer/FooterLeftContainer";
import FooterRightContainer from "../FooterRightContainer/FooterRightContainer";

export default function FooterSection({ refStateObj, navLabelArr }) {
  return (
    <StyledFooterSection>
      <StyledFooterImage />
      <StyledFooterHeader>SOMMCODER</StyledFooterHeader>
      <FooterLeftContainer />
      <FooterRightContainer
        refStateObj={refStateObj}
        navLabelArr={navLabelArr}
      />
    </StyledFooterSection>
  );
}
const StyledFooterSection = styled.footer`
  position: relative;
  z-index: 1;
  min-width: 32rem; // min screen width worrying about
  max-width: 100%;
  display: grid;
  min-height: 6rem;
  background-image: linear-gradient(to bottom right, #324935, #59755d);
  // the second parameter is negative to go above Footer component
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  // mobile: 1 column, three rows
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr 1fr;
  row-gap: 3rem;
  padding: 3rem 3rem 3rem 4rem;
  // desktop: 2 column, 2 rows

  @media (min-width: 60rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  li {
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledFooterHeader = styled.div`
  margin-top: 2rem;
  grid-column: span 2;
  font-family: "Major Mono Display", sans-serif;
  font-size: 2.5rem;
  justify-self: center;
  align-self: center;

  @media (min-width: 60rem) {
    justify-self: left;
  }
`;

const StyledFooterImage = styled.div`
  background-image: url("/Wine Splatter.svg");
  position: absolute;

  z-index: 2;
  right: 0;
  top: 0;
`;
