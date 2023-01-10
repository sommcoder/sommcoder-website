import styled from "styled-components";

export default function CarouselItem({ thumbnail, title, short }) {
  return (
    <StyledCarouselItem>
      <h3>{title}</h3>
      <img src={thumbnail} />
      <p>{short}</p>
    </StyledCarouselItem>
  );
}

/*
 
maybe we remove the titles and provide a tooltip instead??
 
*/
const StyledCarouselItem = styled.span`
  display: grid;
  justify-items: center;
  text-align: center;
  align-content: center;

  grid-template-rows: auto auto auto;
  row-gap: 1.5rem;

  padding: 3rem;
  min-height: 100px;
  height: auto;
  border-radius: 50px;
  background: #324935;
  box-shadow: 20px 20px 60px #2b3e2d, -20px -20px 60px #3a543d;

  /*
  should adjust this  to a gif or short video asset!
  */

  h3 {
    text-decoration: underline;
  }

  img {
    height: 250px;
    width: 250px;
    border-radius: 10px;
  }
`;
