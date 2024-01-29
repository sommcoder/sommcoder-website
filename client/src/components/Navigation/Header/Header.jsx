import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <svg
        viewBox="300 200 700 700"
        style={{
          height: "6rem",
          width: "30rem",
          overflow: "visible",
        }}
        src="/SommCoder Logo.svg"
      ></svg>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  justify-content: center;
  font-family: "Major Mono Display", sans-serif;
  font-size: 2.5rem;

  @media (min-width: 610px) {
    font-size: 3.5rem;
  }

  svg {
    overflow: visible;
    height: 5rem;
    width: 12rem;
  }
`;
