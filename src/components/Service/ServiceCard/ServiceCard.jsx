import styled from "styled-components";
import { useState, useEffect } from "react";

import { IoIosMore } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";

export default function ServiceCard({ service }) {
  // !Open/Close Card's Pricing Table to reveal pricing items:
  const [cardState, toggleCardState] = useState(false);

  // dynamically populate the State for accordion menu ONCE:
  const initTblStateObj = {};
  useEffect(() => {
    service.pricing.forEach(({ id }, i) => (initTblStateObj[id] = false));
  }, []);

  // ! the state of each individual pricing items details:
  // ! Only one detail content can be opened at a time
  const [priceTblState, adjustPriceTblState] = useState(initTblStateObj);

  function handleMenuClick(ev) {
    ev.preventDefault();
    let targetMenu = ev.currentTarget.dataset.item;
    const newTblStateObj = priceTblState;
    if (newTblStateObj[targetMenu]) {
      newTblStateObj[targetMenu] = false;
    } else {
      newTblStateObj[targetMenu] = true;
      Object.keys(newTblStateObj).forEach((key) => {
        if (key === targetMenu) return;
        newTblStateObj[key] = false;
      });
    }
    adjustPriceTblState((tblStateObj) => ({ ...tblStateObj, newTblStateObj }));
  }

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

  return (
    <StyledServiceCard
      onMouseEnter={() => toggleCardState(true)}
      onMouseLeave={() => toggleCardState(false)}
      onFocus={() => toggleCardState(true)}
      onBlur={() => toggleCardState(false)}
    >
      <StyledServiceCardHeaderContainer>
        <h3>{service.title}</h3>
        {service.component}
      </StyledServiceCardHeaderContainer>
      <StyledServiceCardContentContainer active={cardState}>
        <h5>{service.subtitle}</h5>
        <p>{service.description}</p>
      </StyledServiceCardContentContainer>
      <StyledPricingTable cardState={cardState}>
        {service.pricing.map((item, i) => (
          <StyledPricingItem>
            <StyledPricingItemHeaderContainer
              data-item={item.id}
              onClick={(ev) => handleMenuClick(ev)}
            >
              <h5>{item.service}</h5>
              <h5 className="price-header">{`$${item.price}`}</h5>
            </StyledPricingItemHeaderContainer>
            {priceTblState[item.id] ? (
              <FiMinusCircle style={iconStyling} />
            ) : (
              <FiPlusCircle style={iconStyling} />
            )}
            <StyledPricingSubmenu
              data-item={item.id}
              className={`${
                priceTblState[item.id] ? "menu-active" : "menu-inactive"
              }`}
            >
              <StyledPricingSubMenuContent
                key={item.id}
                className={`
      ${priceTblState[item.id] ? "text-active" : "text-inactive"}`}
              >
                {item.description}
              </StyledPricingSubMenuContent>
            </StyledPricingSubmenu>
          </StyledPricingItem>
        ))}
      </StyledPricingTable>
      <StyledServiceCardBottom>
        <IoIosMore style={{ height: "2rem", width: "2rem" }} />
      </StyledServiceCardBottom>
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
`;

const StyledServiceCardHeaderContainer = styled.span`
  border-radius: 2rem 2rem 0rem 0rem;
  width: 100%;
  height: 4rem;
  background-color: pink;
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  h3 {
    font-size: 2.4rem;
    padding-left: 2rem;
    justify-self: left;
    text-align: left;
  }
`;

const StyledServiceCardContentContainer = styled.span`
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
`;

const StyledPricingTable = styled.ul`
  font-size: 1.8rem;
  row-gap: 1.5rem;
  justify-items: center;
  justify-content: center;
  align-content: baseline;
  align-items: baseline;
  list-style: none;
  width: 100%;
  overflow: hidden; // hides contents, padding needs to be 0rem when inactive though!
  border-top: 0.1rem lightgrey solid;
  display: grid;
  list-style: none;
  ${({ cardState }) =>
    cardState
      ? `
      max-height: 40rem;
      padding: 1.5rem 2rem 1.5rem 2rem;
      opacity: 1;
        `
      : `
      max-height: 0rem;
      padding: 0rem 2rem 0rem 2rem;
      opacity: .2;
        `};
  // opacity has a delay to smoothly render:
  transition: max-height 300ms ease-in-out, padding 200ms ease-in-out 50ms,
    opacity 200ms ease-in-out 100ms;

  width: inherit;
  text-align: center;
`;

const StyledPricingItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: left;
  align-content: left;
  position: relative;
  width: 100%;
  height: auto;
  grid-template-rows: auto auto auto;

  &:hover {
    background-color: none;
  }

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

const StyledPricingItemHeaderContainer = styled.div`
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

  h5 {
    display: grid;
    align-content: center;
    justify-self: left;
    min-height: 4rem;
    font-size: 1.6rem;
  }

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
`;

const StyledPricingSubmenu = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  justify-items: center;
  grid-column: span 2;
  height: auto;
`;

const StyledPricingSubMenuContent = styled.p`
  width: 100%;
  padding: 1.5rem 0rem;
  text-align: left;
  height: auto;
  font-size: 1.6rem;
`;

const StyledServiceCardBottom = styled.div`
  background: linear-gradient(145deg, #bba6d2, #9e8cb0);
  width: 100%;
  height: 2.5rem;
  margin: 0rem;
  border-radius: 0rem 0rem 2rem 2rem;
  display: grid;
  justify-items: center;
  align-items: center;
`;
