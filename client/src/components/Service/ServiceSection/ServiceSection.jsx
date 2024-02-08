import { forwardRef } from "react";
import styled from "styled-components";

import ServiceCard from "../ServiceCard/ServiceCard";
import { servicesArr } from "../../../menus/serviceMenu";

export default forwardRef(function ServiceSection(props, ref) {
  return (
    <StyledServiceSection ref={ref.services}>
      <div className="services-container">
        <h3 className="services-table-header">✨ My Core Services: ✨</h3>
        <div className="services-table-container">
          {servicesArr.map((service, i) => (
            <ServiceCard key={`${service.title}-${i}`} service={service} />
          ))}
        </div>
      </div>
    </StyledServiceSection>
  );
});

const StyledServiceSection = styled.section`
  // mobile and general styling
  display: grid;
  align-items: center;
  justify-items: center;
  min-width: inherit;
  min-height: inherit;
  background-image: url("/Wine Splatter.svg");

  .services-container {
    display: grid;
    grid-template-rows: 4.5rem auto;
    justify-items: center;
    row-gap: 1rem;

    min-height: 30rem;
    min-width: 25rem;
    max-width: 70%;

    margin: 1rem 1rem;
    padding: 3rem;
    color: black;
    background-color: whitesmoke;
    border-radius: 2rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  }

  .services-table-header {
    font-size: 2.25rem;
  }

  .services-table-container {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;

    justify-items: center;
    align-content: center;
    justify-content: center;
    align-items: baseline;
    column-gap: 1.5rem;
    row-gap: 2rem;
  }
`;
