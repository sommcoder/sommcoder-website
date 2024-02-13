import { forwardRef } from "react";
import styled from "styled-components";

import ServiceCard from "../ServiceCard/ServiceCard.jsx";

import { servicesArr } from "../../../menus/serviceMenu.jsx";

export default forwardRef(function ServiceSection({ refStateObj }, ref) {
  console.log("servicesArr:", servicesArr);
  return (
    <StyledServiceSection ref={refStateObj.service} className="content-section">
      <div className="services-container">
        <h3 className="services-table-header">✨ My Core Services: ✨</h3>
        <h5>prices starting points</h5>
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
  background-image: url("/Wine Splatter.svg");

  // min-width: 32rem
  .services-container {
    display: grid;
    grid-template-rows: 4.5rem auto;
    justify-items: center;

    row-gap: 1rem;

    min-height: 30rem;
    min-width: 28rem;
    max-width: 150rem;

    margin: 1rem 2rem;
    /* padding: 2rem; */
    color: black;
    border-radius: 2rem;
  }

  .services-table-header {
    font-size: 2.4rem;
    color: white;
    background-color: rgba(228, 202, 202, 0.671);
    border-radius: 2rem;
    display: grid;
    align-items: center;
    justify-items: center;
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
