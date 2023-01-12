import styled from "styled-components";

export default function NavIconBox({ link, image }) {
  return (
    <StyledNavIconBox target="_blank" href={link}>
      <img src={image} />
    </StyledNavIconBox>
  );
}
const StyledNavIconBox = styled.a`
  display: none;

  @media (min-width: 600px) {
    display: inline-block;

    margin: 0rem 1rem;

    img {
      height: 55px;
      width: 55px;
      filter: brightness(150%);
    }

    &:hover {
      cursor: pointer;
      filter: brightness(125%);
    }
  }
`;
