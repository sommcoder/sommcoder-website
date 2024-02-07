import styled from "styled-components";

import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useState } from "react";

export default function ServiceCard({ service }) {
  const [cardState, toggleCardState] = useState(false);
  function handleDropdownClick() {
    console.log("clicked");
    console.log(cardState);
    cardState ? toggleCardState(false) : toggleCardState(true);
  }
  return (
    <StyledServiceCard onClick={handleDropdownClick}>
      <h3>{service.title}</h3>
      <span active={cardState} className="service-card-content-container">
        <h5>{service.subtitle}</h5>
        <p>{service.description}</p>
      </span>
      <div className="service-card-arrow-btn">
        <span active={cardState} className="dropdown-button-wrapper">
          <MdOutlineArrowDropDownCircle />
        </span>
      </div>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.span`
  // mobile and general styling
  display: grid;
  grid-template-rows: 2.5rem auto 2rem; // content is auto
  min-height: 30rem;
  width: 17.5rem;
  text-align: left;
  align-items: center;
  justify-items: center;
  background-color: pink;
  border-radius: 2rem 2rem 2rem 2rem;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
  h3 {
    border-radius: 2rem 2rem 0rem 0rem;
    width: 100%;
    height: 2.5rem;
    background-color: pink;
    display: grid;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 0.5rem 0rem;
  }
  .service-card-content-container {
    background-color: whitesmoke;
    grid-template-rows: auto auto auto;
    row-gap: 1rem;
    text-align: left;
    height: 100%;
    line-height: 1.75rem;
    padding: 0rem 1.25rem;
    margin: 1rem 0rem;

    h5 {
      text-align: center;
      margin: 0.75rem 0rem;
      padding-bottom: 1rem;
      border-bottom: 1px lightgrey solid;
    }
    p {
    }
  }
  .service-card-arrow-btn {
    background: linear-gradient(145deg, #bba6d2, #9e8cb0);
    width: 100%;
    height: 2rem;
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

  @media (min-width: 800px) {
    // desktop styling here
  }
`;
