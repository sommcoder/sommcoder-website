import styled from "styled-components";
import headshot from "/headshot.png";
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
  // ? The Component has a width and height based on the static contents inside it which is header-image. wine-stain-border is absolutely positioned to the parent component and its sizing will always be 165% of it
  position: relative;
  display: grid;
  max-height: 100%;
  max-width: 100%;
  justify-self: left;
  align-self: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-column: 1 / span 2;
  grid-row: 3;
  /* border: 1px solid red; // testing */
  /* grid-column: span 3; */
  margin-left: 0rem;

  .wine-stain-border {
    z-index: 3;
    position: absolute;
    height: 125%;
    width: 125%; // just outside the box & surrounding the headshot
  }

  .headshot-image {
    height: 15rem;
    width: 15rem;
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
