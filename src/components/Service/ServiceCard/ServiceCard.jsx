import styled from "styled-components";
import { useState } from "react";
import { pricingMenuObj } from "../../../menus/pricingMenu";
import PricingItem from "../PricingItem/PricingItem";

export default function ServiceCard({ service }) {
  // !Open Card's Pricing Table:
  const [cardState, toggleCardState] = useState(false);

  // dynamically populate the State for accordion menu:
  const initTblStateObj = {};
  Object.keys(pricingMenuObj[service.title]).forEach(
    (_, i) => (initTblStateObj[pricingMenuObj[service.title][i].id] = false)
  );
  console.log("initTblStateObj:", initTblStateObj);

  // ! the state of each individual pricingItem
  const [priceTblState, adjustPriceTblState] = useState(initTblStateObj);

  return (
    <StyledServiceCard
      onMouseEnter={() => toggleCardState(true)}
      onMouseLeave={() => toggleCardState(false)}
      onFocus={() => toggleCardState(true)}
      onBlur={() => toggleCardState(false)}
    >
      <span className="service-card-header-container">
        <h3>{service.title}</h3>
        <span>{service.component}</span>
      </span>
      <span active={cardState} className="service-card-content-container">
        <h5>{service.subtitle}</h5>
        <p>{service.description}</p>
      </span>
      <StyledPricingTable>
        {Object.keys(pricingMenuObj[service.title]).map((item, i) => (
          <PricingItem
            count={i}
            item={item}
            key={`${item.id}-i`}
            cardState={cardState}
            priceTblState={priceTblState}
            adjustPriceTblState={adjustPriceTblState}
          />
        ))}
      </StyledPricingTable>
      <div className="service-card-bottom"></div>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.span`
  background-color: whitesmoke;
  display: grid;
  row-gap: 1.5rem;
  width: auto;
  max-width: 30rem;
  align-items: center;
  justify-items: center;
  border-radius: 2rem 2rem 2rem 2rem;

  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
  .service-card-header-container {
    border-radius: 2rem 2rem 0rem 0rem;
    width: 100%;
    height: 4rem;
    background-color: pink;
    display: flex;
    justify-content: left;
    gap: 1rem;
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
`;

const StyledPricingTable = styled.ul`
  /* min-height: 35rem; */
  font-size: 1.8rem;
  row-gap: 1.5rem;
  justify-items: center;
  justify-content: center;
  align-content: baseline;
  align-items: baseline;
  list-style: none;
  width: 100%;
  overflow: hidden; // hides contents

  border-top: 0.1rem lightgrey solid;

  display: grid;
  list-style: none;
  ${({ cardState }) =>
    cardState
      ? `
  max-height: 40rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
  `
      : `
      max-height: 0rem;
      padding: 0rem 2rem 0rem 2rem;
      `};
  transition: max-height 200ms linear;
  transition: padding 200ms linear;

  width: inherit;
  text-align: center;

  @media (min-width: 800px) {
    // desktop styling here
  }
`;
