import styled from "styled-components";
import Header from "../Header/Header";

export default function NavLeftContainer() {
  return (
    <StyledNavLeftContainer>
      <Header />
    </StyledNavLeftContainer>
  );
}
const StyledNavLeftContainer = styled.span`
  display: grid;
  margin: auto;
  justify-content: left;
  width: 100%;
  margin-left: 2rem;
`;
