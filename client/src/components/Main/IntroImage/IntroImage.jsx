import styled from "styled-components";
import headshot from "/headshot.png";

export default function IntroImage() {
  return (
    <StyledIntroImageBox>
      <div>
        <img image alt="Brian Davies Headshot" src={headshot} />
      </div>
    </StyledIntroImageBox>
  );
}
const StyledIntroImageBox = styled.span`
  display: grid;
  justify-self: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-self: center;
  height: 210px;
  width: 210px;
  // the effect around the pink border
  box-shadow: 0 1px 1px rgba(255, 192, 203, 0.8),
    0 2px 2px rgba(255, 192, 203, 0.8), 0 4px 4px rgba(255, 192, 203, 0.2),
    0 8px 8px rgba(255, 192, 203, 0.2);
  border-radius: 50%;
  margin-left: 1rem;

  // the pink background made to look like a border:
  div {
    display: grid;
    width: 210px;
    height: 210px;
    clip-path: circle(50% at 50% 50%);
    background-color: pink;
  }

  img {
    display: inline-block;
    height: 205px;
    width: 205px;
    margin-left: 0.25rem;
    clip-path: circle(50% at 50% 50%);
    transform: translateY(2px);
  }

  // mobile:
  @media (max-width: 475px) {
    grid-column: span 2;
    justify-self: left;
    height: 165px;
    width: 165px;
    margin-left: 0rem;
    div {
      width: 160px;
      height: 160px;
      justify-content: center;
      align-items: center;
      align-content: center;
      justify-items: center;
    }
    img {
      height: 160px;
      width: 160px;
    }
  }
`;
