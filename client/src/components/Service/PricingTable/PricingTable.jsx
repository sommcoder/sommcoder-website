import styled from "styled-components";

import { useState } from "react";

import PricingItem from "../PricingItem/PricingItem";

export default function PricingTable({ menu, title }) {
  if (!menu) return; // hack fix.. not sure why I even had to do this... for some reason we're passing a menu with an undefined value
  console.log("menu, title:", menu, title);

  const initTblStateObj = {};

  // dynamically populate the State for accordion menu
  menu.forEach(({ id }) => (initTblStateObj[id] = false));

  // ? now, each card will have independently managed accordion state

  const [priceTblState, adjustPriceTblState] = useState(initTblStateObj);

  console.log("initTblStateObj:", initTblStateObj);

  return (
    <StyledPricingTable className="pricing-table-content-container">
      {menu.map((item, i) => (
        <PricingItem
          count={i}
          // length={pricingMenuArr.length - 1}
          item={item}
          key={`${item.id}-i`}
          priceTblState={priceTblState}
          adjustPriceTblState={adjustPriceTblState}
        />
      ))}
    </StyledPricingTable>
  );
}

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

  border-top: 0.1rem lightgrey solid;
  padding: 1.5rem 2rem 1.5rem 2rem;
  display: grid;
  list-style: none;
  /* grid-template-rows: auto-fit; */
  width: inherit;
  text-align: center;

  @media (min-width: 800px) {
    // desktop styling here
  }
`;
