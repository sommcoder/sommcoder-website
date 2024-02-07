import { forwardRef } from "react";
import styled from "styled-components";

import ServiceCard from "../ServiceCard/ServiceCard";
import { servicesArr } from "../services.jsx";

export default forwardRef(function ServicesSection(props, ref) {
  return (
    <StyledServicesSection ref={ref.services}>
      <div className="services-table">
        <h3 className="services-table-header">✨ My Core Services: ✨</h3>
        <div className="services-table-card-container">
          {servicesArr.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
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

  .services-table {
    display: grid;
    grid-template-rows: 3rem auto;
    justify-items: center;
    row-gap: 1rem;

    min-height: 40rem;
    min-width: 28rem;
    max-width: 70%;

    margin: 1rem 1rem;
    padding: 3rem;
    color: black;
    background-color: whitesmoke;
    border-radius: 2rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  }

  .services-table-card-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: 800) {
    }
    justify-items: center;
    align-content: center;
    justify-content: center;
    align-items: baseline;
    column-gap: 1.5rem;
    row-gap: 1rem;
  }
`;
