import styled from 'styled-components';

export default function Header() {
  return <StyledHeader>SOMMCODER</StyledHeader>;
}
const StyledHeader = styled.header`
  justify-content: center;
  font-family: 'Major Mono Display', sans-serif;
  font-size: 2.5rem;

  @media (min-width: 610px) {
    font-size: 3.5rem;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(85%);
    transition: 200ms ease-in-out;
    transform: translateY(-2.5px);
  }
`;
