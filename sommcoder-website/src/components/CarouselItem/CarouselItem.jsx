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
  min-height: 100px;
  height: auto;
  border-radius: 50px;
  background: #324935;
  box-shadow: 20px 20px 60px #2b3e2d, -20px -20px 60px #3a543d;
`;
