import styled, { keyframes } from "styled-components";

export default function LoadingEllipsis() {
  const circlesArr = [1, 2, 3];

  return (
    <StyledLoadingEllipsis>
      {circlesArr.map((i) => (
        <span key={i} delay={i + 1}></span>
      ))}
    </StyledLoadingEllipsis>
  );
}

const loadingAnimation = keyframes`
    0% {
      background: black;
    }
    25% {
      background: transparent;
    }
    75% {
      background: black;
    }
    75% {
      background: transparent;
    }
`;

const StyledLoadingEllipsis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  padding: 2rem;

  span {
    margin: 0 0.1rem;
    width: 5px;
    height: 5px;
    border: 2px solid black;
    border-radius: 50%;
    /* background: transparent; */
    animation: linear ${(props) => (props.delay * 100).toString() + "ms"} 20
      ${loadingAnimation};
  }
`;
