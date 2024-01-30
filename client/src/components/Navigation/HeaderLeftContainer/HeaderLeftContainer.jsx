import styled from "styled-components";
import Logo from "../Logo/Logo";

export default function HeaderLeftContainer() {
  return (
    <StyledHeaderLeftContainer
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <Logo />
    </StyledHeaderLeftContainer>
  );
}
const StyledHeaderLeftContainer = styled.span`
  display: grid;
  margin: auto;
  justify-content: left;
  width: 100%;
`;
