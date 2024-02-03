import styled from "styled-components";

export default function FooterLeftContainer() {
  const contactListArr = [
    {
      label: "email",
      link: "https://www.fiverr.com/sommcoder",
    },
    {
      label: "fiverr",
      link: "https://www.fiverr.com/sommcoder",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/brian-davies-178b0b48/",
    },
    {
      label: "github",
      link: "https://github.com/sommcoder",
    },
    {
      label: "npm",
      link: "https://www.npmjs.com/~somm-coder",
    },
  ];

  return (
    <StyledFooterLeftContainer>
      <header>Contact</header>
      <ul>
        {contactListArr.map(({ label, link }, i) => (
          <li key={i}>
            <a href={link} key={i}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </StyledFooterLeftContainer>
  );
}

const StyledFooterLeftContainer = styled.span`
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 4;

  grid-column: span 2;
  @media (min-width: 700px) {
    grid-column: span 1;
  }

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
