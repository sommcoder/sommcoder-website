import styled from "styled-components";

export default function FooterRightContainer() {
  return (
    <StyledFooterRightContainer>
      <header>Navigation</header>
      <ul>
        <li>
          <a>back to top</a>
        </li>
        <li>
          <a>projects</a>
        </li>
        <li>
          <a>about me</a>
        </li>
      </ul>
    </StyledFooterRightContainer>
  );
}

const StyledFooterRightContainer = styled.span`
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;

  header {
    font-weight: 600;
    margin-bottom: 1rem;
    text-decoration: underline;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-items: left;
    gap: 1.5rem;
  }

  li {
    list-style: none;
  }

  div {
  }
`;
