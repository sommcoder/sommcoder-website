import styled from "styled-components";

export default function AboutMeSection() {
  /*
   
  TODO: this will obviously need to be improvded. Just wanted to get some initial content down
   
  */
  return (
    <StyledAboutMeSection>
      <div className="about-me-container">
        <h3>About Me:</h3>
        <p>
          After more than 12 years in the Hospitality industry as a wine
          sommelier, I discovered my passion for web development while building
          my own wine club subscription business in response to the challenges
          posed by COVID-19. <br />
          Proficient in CMS platforms for my business website, I embarked on a
          journey of self-study, online courses, and personal projects to delve
          into the intricacies of web development. With extensive applied
          business experience, I offer a mature perspective, coupled with a
          diverse background in entrepreneurship, operations management, and
          e-commerce, underpinned by the determination forged through
          professional challenges.
        </p>
      </div>
    </StyledAboutMeSection>
  );
}

const StyledAboutMeSection = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  min-width: inherit;
  max-width: inherit;

  // going to need

  div {
    margin: 2rem 4rem;
  }
  .about-me-container {
    padding: 2rem;
    color: black;
    background-color: whitesmoke;
    border-radius: 1.5rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 800) {
  }
`;
