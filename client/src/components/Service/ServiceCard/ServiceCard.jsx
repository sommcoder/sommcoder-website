import styled from 'styled-components';

import { LuArrowUpCircle } from 'react-icons/lu';

import { useState } from 'react';

export default function ServiceCard({ service }) {
  const [cardState, toggleCardState] = useState(false);
  function handleDropdownClick() {
    console.log('clicked');
    console.log(cardState);
    cardState ? toggleCardState(false) : toggleCardState(true);
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
      <div className="service-card-arrow-btn">
        <span active={cardState} className="dropdown-button-wrapper">
          <LuArrowUpCircle style={{ transform: 'rotate(180deg)' }} />
        </span>
      </div>
    </StyledServiceCard>
  );
}

const StyledServiceCard = styled.span`
  // mobile and general styling
  display: grid;
  grid-template-rows: 4rem auto 2.5rem; // content is auto
  height: 27rem;
  min-width: 27.5rem;
  max-width: 46rem;
  align-items: center;
  justify-items: center;
  border-radius: 2rem 2rem 2rem 2rem;
  /* > * {
    padding: 1.25rem
  } */

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
    align-items: center;

    h3 {
      padding-left: 2rem;
      text-align: left;
    }
  }

  .service-card-content-container {
    background-color: whitesmoke;
    grid-template-rows: auto auto auto;
    row-gap: 1rem;
    text-align: left;
    height: 100%;
    line-height: 1.75rem;
    padding: 0rem 2rem;
    margin: 1rem 0rem;

    h5 {
      font-size: 1.5rem;
      text-align: left;
      margin: 0.75rem 0rem;
      padding-bottom: 1rem;
      border-bottom: 0.1rem lightgrey solid;
    }
    p {
    }
  }
  .service-card-arrow-btn {
    background: linear-gradient(145deg, #bba6d2, #9e8cb0);
    width: 100%;
    height: 2.5rem;
    margin: 0rem;
    border-radius: 0rem 0rem 2rem 2rem;
    display: grid;
    justify-items: center;
  }

  .dropdown-button-wrapper {
    transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0deg)')};
    display: grid;
    justify-items: center;
    align-items: center;
    /* transform: rotate(180deg); */
  }

  @media (min-width: 80rem) {
    // desktop styling here
  }
`;
