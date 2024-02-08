import styled from "styled-components";
import wine from "/wine-stain.svg";

export default function HeroGraphic() {
  return (
    <StyledHeroGraphic>
      <img alt="Wine Stain Graphic" src={wine} />
    </StyledHeroGraphic>
  );
}
// TODO: would love to get this centred in relation to the whole Hero Section. Need to align to top/baseline I think

const StyledHeroGraphic = styled.div`
  display: none;

  // only visible on Tablet/Desktop
  @media (min-width: 85rem) {
    align-content: baseline;
    display: inline-block;
    justify-self: center;
    align-self: start;

    img {
      display: inline-block;
      max-height: 35rem;
      max-width: 35rem;
    }
  }

  @media (min-width: 102rem) {
    img {
      display: inline-block;
      max-height: 40rem;
      max-width: 40rem;
    }
  }
`;
