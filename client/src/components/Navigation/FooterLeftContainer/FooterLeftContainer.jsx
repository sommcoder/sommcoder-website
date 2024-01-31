import styled from "styled-components";

export default function FooterLeftContainer() {
  return (
    <StyledFooterLeftContainer>
      <div>email me:</div>
      <>brian.davies589@gmail.com</>
    </StyledFooterLeftContainer>
  );
}

const StyledFooterLeftContainer = styled.span`
  display: flex;
  height: 100%;
  width: 100%;
`;
