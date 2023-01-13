import styled, { keyframes } from "styled-components";

export default function LoadingEllipsis() {
  const circlesArr = [1, 2, 3];

  return (
    <StyledLoadingEllipsis>
      {circlesArr.map((i) => (
        <span key={i}></span>
      ))}
    </StyledLoadingEllipsis>
  );
}

const loadingAnimation = keyframes`
    0% {
      background: white;
    }

    100% {
      background: transparent;
    }
`;

const StyledLoadingEllipsis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 250px;
  padding: 2rem;

  span {
    margin: 0 0.15rem;
    width: 8px;
    height: 8px;
    border: 1px solid white;
    border-radius: 50%;
    // the duration needs to equal the sum of the nth-child elements being delayed ( 0.25 delay + 0.5 delay = 0.75 duration)
    animation: 0.9s linear infinite ${loadingAnimation};
  }

  span:nth-child(2) {
    animation-delay: 0.3s;
  }
  span:nth-child(3) {
    animation-delay: 0.6s;
  }
`;
