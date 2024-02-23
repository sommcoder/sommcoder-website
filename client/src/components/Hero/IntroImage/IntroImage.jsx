import styled from "styled-components";
// import headshot from "/headshot.png";
import headshot from "/Brian-headshot-white-background-square-more-margin.jpg";
import wine from "/wine-stain2.svg";

export default function IntroImage() {
  return (
    <StyledIntroImageBox>
      <img
        className="wine-stain-border"
        image
        alt="Wine Stain Border"
        src={wine}
      />
      <img
        className="headshot-image"
        image
        alt="Brian Davies Headshot"
        src={headshot}
      />
    </StyledIntroImageBox>
  );
}
const StyledIntroImageBox = styled.span`
  position: relative;
  display: grid;
  max-height: 100%;
  max-width: 100%;
  justify-self: left;
  align-self: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-column: 1;
  grid-row: 3;
  margin-left: 2rem; // match the paragraph margin above

  .wine-stain-border {
    z-index: 3;
    position: absolute;
    height: 125%;
    width: 125%; // just outside the box & surrounding the headshot
  }

  .headshot-image {
    // slight adjustments to fit image properly:
    transform: translateY(-0.25rem);
    transform: translateX(0.25rem);
    margin-right: 1rem;
    height: 16rem;
    width: 16rem;
    clip-path: circle(50% at 50% 50%);
  }

  // 480px
  @media (min-width: 30rem) {
    grid-column: 3;
    grid-row: 2;
    margin-left: 2rem;
    .headshot-image {
      height: 16rem;
      width: 16rem;
    }
  }
  // 768px
  @media (min-width: 48rem) {
    grid-row: 1 / span 2;
    justify-self: center;
    align-self: center;
    margin-left: 8rem;
    .headshot-image {
      height: 18rem;
      width: 18rem;
    }
  }

  // 960px
  @media (min-width: 60rem) {
    .headshot-image {
      height: 23rem;
      width: 23rem;
    }
  }
`;
