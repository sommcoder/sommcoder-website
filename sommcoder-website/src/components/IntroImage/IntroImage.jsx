﻿import styled from "styled-components";
import headshot from "../../assets/images/headshot.png";

export default function IntroImage() {
  return (
    <StyledIntroImageBox>
      <img image alt="Brian Davies Headshot" src={headshot} />
    </StyledIntroImageBox>
  );
}
const StyledIntroImageBox = styled.span`
  justify-self: center;
  justify-content: center;
  align-self: center;
  height: 210px;
  width: 210px;

  clip-path: circle(50% at 50% 50%);
  background-color: pink;
  margin-left: 1rem;

  img {
    display: inline-block;
    height: 205px;
    width: 205px;
    margin-left: 0.25rem;
    clip-path: circle(50% at 50% 50%);
    transform: translateY(2px);
  }

  @media (max-width: 475px) {
    grid-column: span 2;
    justify-self: left;
    height: 165px;
    width: 165px;
    margin-left: 0rem;
    img {
      height: 160px;
      width: 160px;
    }
  }
`;
