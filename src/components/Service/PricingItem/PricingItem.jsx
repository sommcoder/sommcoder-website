import styled from "styled-components";

import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

import { useState } from "react";

export default function PricingItem({ item, priceTblState, handleMenuClick }) {
  const iconStyling = {
    gridColumn: "span 2",
    top: "3rem",
    left: "46.5%", // can't be 50% cause have to consider CENTER of item
    backgroundColor: "whitesmoke",
    zIndex: "3",
    height: "2.25rem",
    borderRadius: "50%",
    width: "2rem",
    position: "absolute",
  };

  console.log("priceTblState:", priceTblState);

  return (
    <StyledPricingItem>
      <div
        data-item={item.id}
        onClick={(ev) => handleMenuClick(ev)}
        className="pricing-menu-item-header-container"
      >
        <h5 className="pricing-menu-item-header">{item.service}</h5>
        <h5 className="pricing-menu-item-header price-header">{`$${item.price}`}</h5>
      </div>
      {priceTblState[item.id] ? (
        <FiMinusCircle style={iconStyling} />
      ) : (
        <FiPlusCircle style={iconStyling} />
      )}
      <div
        data-item={item.id}
        className={`pricing-submenu-container ${
          priceTblState[item.id] ? "menu-active" : "menu-inactive"
        }`}
      >
        <p
          key={item.id}
          className={`pricing-submenu-content
      ${priceTblState[item.id] ? "text-active" : "text-inactive"}`}
        >
          {item.description}
        </p>
      </div>
    </StyledPricingItem>
  );
}

const StyledPricingItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: left;
  align-content: left;
  position: relative;
  width: 100%;
  height: auto;
  grid-template-rows: auto auto auto;

  .pricing-menu-item-header-container {
    display: grid;
    grid-column: span 2;
    text-align: left;
    align-items: left;
    align-content: center;

    width: 100%;
    z-index: 3;
    min-height: 4rem;
    background-color: whitesmoke;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    width: auto;
    border-bottom: 0.1rem solid lightgrey;

    .price-header {
      justify-self: right;
    }
    &:active {
      filter: brightness(85%);
    }

    &:hover {
      cursor: pointer;
      filter: brightness(95%);

      svg {
        cursor: pointer;
        pointer-events: none;
      }
    }
  }

  &:hover {
    background-color: none;
  }

  .pricing-menu-item-header {
    display: grid;
    align-content: center;
    justify-self: left;
    min-height: 4rem;
    /* width: auto; */

    font-size: 1.6rem;
  }
  .pricing-submenu-container {
    /* width: inherit; */
    display: grid;
    align-items: center;
    text-align: center;
    justify-items: center;
    grid-column: span 2;

    height: auto;
  }

  .pricing-submenu-content {
    width: 100%;
    padding: 1.5rem 0rem;
    text-align: left;
    height: auto;
    font-size: 1.6rem;
  }

  /* */

  .menu-active {
    z-index: 3;
    color: rgba(0, 0, 0, 1);
    max-height: 35rem;
    transition: color 500ms linear 250ms;
    transition: z-index 0ms ease-in-out 0s;
    transition: max-height 500ms ease-in-out 0s;
  }

  .menu-inactive {
    z-index: 1;
    color: rgba(0, 0, 0, 0);
    max-height: 0rem;
    transition: color 0s linear 0s;
    transition: z-index 0s ease-in-out 0s;
    transition: max-height 500ms ease-in-out 0s;
  }

  .text-active {
    opacity: 1;
    transition: opacity 500ms linear 250ms;
  }
  .text-inactive {
    opacity: 0;
    transition: opacity 0ms linear 0ms;
  }
`;
