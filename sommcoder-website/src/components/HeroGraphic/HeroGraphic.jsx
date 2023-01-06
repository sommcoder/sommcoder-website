import styled from "styled-components";

export default function HeroGraphic() {
  return (
    <StyledHeroGraphic>
      <img
        height="200px"
        width="200px"
        alt="Wine Stain Graphic"
        src="../../assets/wine-stain-1.svg"
      />
      <img
        height="200px"
        width="200px"
        alt="Wine Stain Graphic 2"
        src="../../assets/wine-stain-2.svg"
      />
    </StyledHeroGraphic>
  );
}
const StyledHeroGraphic = styled.div`
  display: none;

  // only visible on Tablet/Desktop
  @media (min-width: 700px) {
    display: inline-block;
    align-self: center;
    min-width: 50px;
    min-height: 50px;
  }
`;
