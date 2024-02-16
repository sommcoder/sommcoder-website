import styled from "styled-components";

import { useState } from "react";
import PricingTable from "../PricingTable/PricingTable";

import { pricingMenuObj } from "../../../menus/pricingMenu";

export default function ServiceCard({ service }) {
  const [cardState, toggleCardState] = useState(false);
  function handleDropdownClick() {
    toggleCardState((prevState) => !prevState);
  }

  return (
    <StyledServiceCard onClick={handleDropdownClick}>
      <span className="service-card-header-container">
        <h3>{service.title}</h3>
      </span>
      <span active={cardState} className="service-card-content-container">
        <h5>{service.subtitle}</h5>
        <p>{service.description}</p>
      </span>
      <PricingTable
        key={service.title}
        menu={pricingMenuObj[service.title]}
        title={service.title}
      />
      <div className="service-card-bottom"></div>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.span`
  background-color: whitesmoke;
  display: grid;
  grid-template-rows: 4rem auto auto 2.5rem; // content is auto

  row-gap: 1.5rem;
  width: auto;
  max-width: 30rem;
  align-items: center;
  justify-items: center;
  border-radius: 2rem 2rem 2rem 2rem;

  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);

  .service-card-header-container {
    border-radius: 2rem 2rem 0rem 0rem;
    width: 100%;
    height: 4rem;
    background-color: pink;
    display: flex;
    justify-content: left;
    align-items: center;

    h3 {
      font-size: 2.4rem;
      padding-left: 2rem;
      text-align: left;
    }
  }

  .service-card-content-container {
    background-color: whitesmoke;
    grid-template-rows: auto auto auto;
    row-gap: 1rem;
    text-align: left;
    height: auto;
    line-height: 1.75rem;
    padding: 0rem 2rem;

    h5 {
      font-size: 1.8rem;
      text-align: left;
      margin: 0.75rem 0rem;
      padding-bottom: 1rem;
      border-bottom: 0.1rem lightgrey solid;
    }
    p {
    }
  }
  .service-card-bottom {
    background: linear-gradient(145deg, #bba6d2, #9e8cb0);
    width: 100%;
    height: 2.5rem;
    margin: 0rem;
    border-radius: 0rem 0rem 2rem 2rem;
    display: grid;
    justify-items: center;
  }

  .dropdown-button-wrapper {
    transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
    display: grid;
    justify-items: center;
    align-items: center;
    /* transform: rotate(180deg); */
  }
`;
