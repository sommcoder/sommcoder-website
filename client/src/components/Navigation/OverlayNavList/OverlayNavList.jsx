import styled from "styled-components";

export default function OverlayNavList() {
  const NavItems = ["Github", "LinkedIn"];

  return (
    <StyledOverlayNavList>
      {NavItems.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </StyledOverlayNavList>
  );
}
const StyledOverlayNavList = styled.ul`
  li {
    font-size: 2rem;
    color: black;
    list-style: none;
    margin-top: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
