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
  height: 21rem;
  width: 21rem;
  // the effect around the pink border
  box-shadow: 0rem 0rem 0.2rem 0.2rem rgba(255, 192, 203, 0.8),
    0rem 0rem 0.4rem 0.4rem rgba(255, 192, 203, 0.8),
    0rem 0rem 0.4rem 0.4rem rgba(250, 192, 255, 0.6),
    0rem 0rem 0.8rem 0.8rem rgba(255, 192, 203, 0.2);
  border-radius: 50%;
  margin-left: 1rem;

  // the pink background made to look like a border:
  div {
    display: grid;
    width: 21rem;
    height: 21rem;
    clip-path: circle(50% at 50% 50%);
    background-color: rgba(255, 192, 203, 1);
  }

  img {
    display: inline-block;
    height: 20.5rem;
    width: 20.5rem;
    margin-left: 0.25rem;
    clip-path: circle(50% at 50% 50%);
    transform: translateY(0.2rem);
  }

  // mobile:
  @media (max-width: 47.5rem) {
    grid-column: span 2;
    justify-self: left;
    height: 16.5rem;
    width: 16.5rem;
    margin-left: 0rem;
    div {
      width: 16.5rem; // needed
      height: 16.5rem; // needed
      justify-content: center;
      align-items: center;
      align-content: center;
      justify-items: center;
    }
    img {
      transform: translateY(-0.1rem); // hack fix
      height: 16rem;
      width: 16rem;
    }
  }
`;
