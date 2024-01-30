import styled from "styled-components";

export default function FooterRightContainer() {
  return (
    <StyledFooterRightContainer>
      <div>back to top^</div>
      <div>projects</div>
      <div>about me</div>
    </StyledFooterRightContainer>
  );
}

const StyledFooterRightContainer = styled.span`
  display: flex;
  height: 100%;
`;
