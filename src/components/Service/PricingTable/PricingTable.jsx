import styled from "styled-components";

import { useState } from "react";

import PricingItem from "../PricingItem/PricingItem";

export default function PricingTable({
  menu,
  title,
  toggleCardState,
  cardState,
}) {
  if (!menu) return; // hack fix.. not sure why I even had to do this... for some reason we're passing a menu with an undefined value
  const initTblStateObj = {};
  // dynamically populate the State for accordion menu
  menu.forEach(({ id }) => (initTblStateObj[id] = false));
  const [priceTblState, adjustPriceTblState] = useState(initTblStateObj);

  return (
    <StyledPricingTable cardState={cardState}>
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
