﻿import styled from "styled-components";

export default function HireMeBtn() {
  return (
    <StyledHireMeBtn href="mailto:brian.davies589@gmail.com?subject=General Inquiry">
      <button>Hire Me!</button>
    </StyledHireMeBtn>
  );
}
const StyledHireMeBtn = styled.a`
  justify-self: center;
  align-self: center;
`;
