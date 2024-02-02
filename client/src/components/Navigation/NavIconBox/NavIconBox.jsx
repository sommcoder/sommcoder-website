import styled from "styled-components";

export default function NavIconBox({ link, component }) {
  return (
    <StyledNavIconBox target="_blank" href={link}>
      {component}
    </StyledNavIconBox>
  );
}
const StyledNavIconBox = styled.a`
  display: none;

  @media (min-width: 600px) {
    display: grid;
    height: 40px;
    width: fit-content;

    &:hover {
      cursor: pointer;
      filter: brightness(-100%);
    }
  }
`;
