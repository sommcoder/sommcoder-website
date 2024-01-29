import styled from "styled-components";
import wine from "../../../assets/images/wine-stain.svg";

export default function HeroGraphic() {
  return (
    <StyledHeroGraphic>
      <img alt="Wine Stain Graphic" src={wine} />
    </StyledHeroGraphic>
  );
}
const StyledHeroGraphic = styled.div`
  display: none;
  align-self: center;

  img {
    max-height: 400px;
    max-width: 400px;
  }

  // only visible on Tablet/Desktop
  @media (min-width: 850px) {
    display: inline-block;
    justify-self: center;
    align-self: center;

    img {
      display: inline-block;
    }
  }
`;
