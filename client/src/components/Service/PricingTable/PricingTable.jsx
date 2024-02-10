import styled from 'styled-components';

import { useState } from 'react';

import { pricingMenuArr } from '../../../menus/pricingMenu';

import PricingItem from '../PricingItem/PricingItem';

export default function PricingTable() {
  // TODO: would be cool to make this an accordian style menu, when the user clicks, the detail beneath open up, closing the other menu items but most importantly this will allow the users to view this really easily on mobile
  console.log('pricingMenuArr:', pricingMenuArr);
  const initTblStateObj = {};
  // dynamically populate the

  pricingMenuArr.forEach(({ id }) => (initTblStateObj[id] = false));

  const [priceTblState, adjustPriceTblState] = useState(initTblStateObj);

  /*
   
  - li houses the whole content
  - 
   
  */

  return (
    <StyledPricingTable id="pricing-table">
      <h3>🫰 Pricing Estimates 🫰</h3>
      <h5>starting at:</h5>
      <ul>
        <div className="pricing-table-header-container">
          <h5 className="pricing-menu-header">Service</h5>
          <h5 className="pricing-menu-header">Price</h5>
        </div>
        <div className="pricing-table-content-container">
          {pricingMenuArr.map((item, i) => (
            <PricingItem
              count={i}
              length={pricingMenuArr.length - 1}
              item={item}
              key={i}
              priceTblState={priceTblState}
              adjustPriceTblState={adjustPriceTblState}
            />
          ))}
        </div>
      </ul>
    </StyledPricingTable>
  );
}

const StyledPricingTable = styled.div`
  // mobile and general styling
  margin-top: 3rem;
  min-height: 35rem;
  min-width: 30rem;
  max-width: 80rem;

  display: grid;
  justify-items: center;
  align-items: baseline;
  grid-template-rows: 3rem 2rem auto;
  .pricing-table-header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    width: 100%;
  }

  .pricing-menu-header {
    font-size: 2.5rem;
  }
  .pricing-table-content-container {
    display: grid;
    width: 100%;
    text-align: center;
    // TODO: pickup back here!
  }

  h3 {
    height: 3rem;
  }

  h5 {
    font-style: italic;
  }

  ul {
    font-size: 1.8rem;
    display: grid;
    row-gap: 1.5rem;
    justify-items: center;
    align-items: baseline;
    list-style: none;
    padding: 2rem;
    /* border: 0.1rem solid grey; */
    height: 100%;
    width: 100%;
    border-radius: 3rem;
  }

  @media (min-width: 800px) {
    // desktop styling here
  }
`;