import { forwardRef } from "react";
import styled from "styled-components";

import ServiceCard from "../ServiceCard/ServiceCard.jsx";

import { servicesArr } from "../../../menus/serviceMenu.jsx";

export default forwardRef(function ServiceSection({ refStateObj }, ref) {
  return (
    <StyledServiceSection ref={refStateObj.service} className="content-section">
      <div className="services-container">
        <h3 className="services-table-header">✨ Freelance Services: ✨</h3>
        <div className="services-table-container">
          {servicesArr.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </StyledServiceSection>
  );
});

const StyledServiceSection = styled.section`
  // min-width: 32rem
  .services-container {
    display: grid;
    grid-template-rows: 4.5rem auto;
    justify-items: center;

    row-gap: 1.5rem;

    min-height: 30rem;
    min-width: 28rem;
    max-width: 150rem;

    margin: 3rem;
    /* padding: 2rem; */
    color: var(--dark-font);
    border-radius: 2rem;
  }

  .services-table-header {
    font-size: 2.4rem;
    border: 0.1rem solid pink;
    background-color: whitesmoke;
    border-radius: 2rem;
    padding: 2rem;
    display: grid;
    justify-content: center;
    align-content: center;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  }

  .services-table-container {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    width: auto;
    justify-content: center;
    align-items: baseline;
    column-gap: 1.5rem;
    row-gap: 2rem;
  }
`;
