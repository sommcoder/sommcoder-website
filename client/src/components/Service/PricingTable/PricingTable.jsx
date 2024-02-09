import styled from "styled-components";

import { useState } from "react";

import { pricingMenuArr } from "../../../menus/pricingMenu";

export default function PricingTable() {
  // TODO: would be cool to make this an accordian style menu, when the user clicks, the detail beneath open up, closing the other menu items but most importantly this will allow the users to view this really easily on mobile

  const [navBarObj, adjustNavBar] = useState({
    Sales: false,
    Product: false,
    Expenses: false,
    Ordering: false,
  });

  /*
   
  - li houses the whole content
  - 
   
  */

  return (
    <StyledPricingTable id="pricing-table" className="content-card">
      <h3>🫰 Pricing Estimates 🫰</h3>
      <h5>starting at:</h5>
      <ul>
        <li>
          <div className="pricing-menu-item">
            <h5 className="pricing-menu-item-header">Service</h5>
            <h5 className="pricing-menu-item-header">Price</h5>
          </div>
          <div className="pricing-submenu-container">
            <p className="pricing-submenu-content">service text</p>
            <p className="pricing-submenu-content">pricing details?</p>
          </div>
        </li>
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
  #pricing-table {
    margin: 0rem !important;
    padding: 0rem !important;
  }
  ul,
  li {
    list-style: none;
  }
  h3 {
    height: 3rem;
  }

  h5 {
    font-style: italic;
  }

  ul {
    display: grid;
    justify-items: center;
    align-items: baseline;
    padding: 2rem;
    border: 0.1rem solid grey;
    height: 100%;
    width: 100%;
    border-radius: 3rem;

    tr {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
    }
  }

  @media (min-width: 800px) {
    // desktop styling here
  }
`;
