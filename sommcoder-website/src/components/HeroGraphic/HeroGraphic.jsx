import styled from "styled-components";
import wine1 from "../../assets/wine-stain-1.svg";
import wine2 from "../../assets/wine-stain-2.svg";

export default function HeroGraphic() {
  return (
    <StyledHeroGraphic>
      <img height="200px" width="200px" alt="Wine Stain Graphic" src={wine1} />
      <img
        height="200px"
        width="200px"
        alt="Wine Stain Graphic 2"
        src={wine2}
      />
    </StyledHeroGraphic>
  );
}
const StyledHeroGraphic = styled.div`
  display: none;

  // only visible on Tablet/Desktop
  @media (min-width: 700px) {
    display: inline-block;
    justify-self: center;
    align-self: center;
    min-width: 50px;
    min-height: 50px;
  }
`;
