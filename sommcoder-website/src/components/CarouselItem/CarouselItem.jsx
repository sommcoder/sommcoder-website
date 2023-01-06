import styled from "styled-components";

export default function CarouselItem({ thumbnail, title, short }) {
  return (
    <StyledCarouselItem>
      {/* <img>{thumbnail}</img> */}
      <h3>{title}</h3>
      <p>{short}</p>
    </StyledCarouselItem>
  );
}
const StyledCarouselItem = styled.span`
  padding: 3rem;
  height: 300px;
  /* margin: 1.5rem 1.5rem; */
  border-radius: 50px;
  background: #324935;
  box-shadow: 20px 20px 60px #2b3e2d, -20px -20px 60px #3a543d;
`;
