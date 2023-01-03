import styled from "styled-components";
import Header from "../Header/Header";

export default function LeftNavItemContainer() {
  return (
    <StyledLeftNavItemContainer>
      <Header />
    </StyledLeftNavItemContainer>
  );
}
const StyledLeftNavItemContainer = styled.span`
  display: grid;
  margin: auto;
  justify-content: left;
  width: 100%;
`;
