import styled from "styled-components";
import wine from "/wine-stain.svg";

export default function HeroGraphic() {
  return (
    <StyledHeroGraphic>
      <img alt="Wine Stain Graphic" src={wine} />
    </StyledHeroGraphic>
  );
}
const StyledHeroGraphic = styled.div`
  display: none;

  // only visible on Tablet/Desktop
  @media (min-width: 850px) {
    align-content: baseline;
    display: inline-block;
    justify-self: center;
    align-self: start;

    img {
      display: inline-block;
      max-height: 400px;
      max-width: 400px;
    }
  }
`;
