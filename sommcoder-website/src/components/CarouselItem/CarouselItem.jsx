import styled from "styled-components";

export default function CarouselItem() {
  return <StyledCarouselItem></StyledCarouselItem>;
}
const StyledCarouselItem = styled.span`
  border-radius: 50px;
  background: #324935;
  box-shadow: 20px 20px 60px #2b3e2d, -20px -20px 60px #3a543d;
`;
