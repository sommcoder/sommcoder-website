import { forwardRef } from "react";
import styled from "styled-components";

export default forwardRef(function ServicesSection(props, ref) {
  const servicesArr = [
    {
      name: "Programming",
      icon: "",
      description:
        "After several years of practicing JavaScript, I've also become versed in Python and hope to learn Swift for iOS development. I love learning new things and the options are endless on the web!",
    },
    {
      name: "UX/UI Design",
      icon: "",
      description:
        "Though I'm no designer by trade, I have an eye for detail and as a web developer, I have a keen sense for what can realistically be built. I can scaffold a wireframe design and prepare color themes before jumping into development.",
    },
    {
      name: "Software Architecture",
      icon: "",
      description:
        "Whether you require an SPA, MPA, JAM stack, or a static website, I'm happy to draw up solutions to whatever you need to what your business needs now and with plenty of room to grow as your operation scales!",
    },
    {
      name: "Food & Beverage",
      icon: "",
      description:
        "It's not everyday that you can hire a web developer that actually has experience in the products you're listing! I have well over a decade of experience in food, beverage and hospitality that could prove invaluable to your project. ",
    },
    { name: "creative", icon: "", description: "" },
  ];

  return (
    <StyledServicesSection ref={ref.services}>
      <div className="services-table">
        <h3>Web Development Services:</h3>
        <ul>
          <h3>Technologies:</h3>
          <li>JavaScript (w. TypeScript experience)</li>
          <li>React.js</li>
          <li>Node.js (Express and Fastify)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>PostgreSQL</li>
          <li>SCSS</li>
          <li>Styled-Components</li>
          <li>GraphQL</li>
          <li>Liquid (Shopify Template Language)</li>
          <li>HTML5</li>
          <li>HTML5</li>
          <h3>Custom:</h3>
          <li>Custom Website</li>
          <li>Custom Application</li>
          <h3>Shopify:</h3>
          <li>Store Apps</li>
          <li>Store Implementation</li>
          <li>Custom Shopify Themes</li>
          <h3>General:</h3>
          <li>Business Automation</li>
          <li>API and App Integrations</li>
          <li>CMS Migrations</li>
          <h3>Support:</h3>
          <li>Monitoring</li>
          <li>Site Maintenance</li>
          <li>Staff Web Training</li>
        </ul>
        <p></p>
      </div>
    </StyledServicesSection>
  );
});

const StyledServicesSection = styled.section`
  // mobile and general styling
  display: grid;
  align-items: center;
  justify-items: center;
  min-width: inherit;
  min-height: inherit;
  border-top: 1px solid grey;
  background-image: url("/Wine Splatter.svg");

  h3,
  P {
    grid-column: span 2;
  }

  .services-table {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem auto;
    column-gap: 1.5rem;
    row-gap: 1rem;
    min-width: 28rem;
    max-width: 70%;
    margin: 1rem 1rem;
    min-height: 35rem;
    padding: 3rem;
    color: black;
    background-color: whitesmoke;
    border-radius: 2rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 800) {
    // desktop styling here
  }
`;
