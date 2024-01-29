import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      Designed & Created by: <br />
      Brian Davies
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  filter: brightness(90%);

  font-size: 1.2rem;
  letter-spacing: 1px;
  font-style: italic;
  margin: auto;
  padding: 1rem;
  max-width: 100%;
  height: 4rem;
  background: #324935;
  transition: 0.3s ease-in-out;
`;
