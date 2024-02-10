import styled from 'styled-components';

import { LuBadgeMinus } from 'react-icons/lu';
import { LuBadgePlus } from 'react-icons/lu';

export default function PricingItem({
  item,
  priceTblState,
  adjustPriceTblState,
  count,
  length,
}) {
  console.log(count);
  console.log(length);
  function handleMenuClick(ev) {
    ev.preventDefault();
    let targetMenu = ev.currentTarget.dataset.item;
    console.log('targetMenu:', targetMenu);
    const newTblStateObj = priceTblState;
    console.log('newTblStateObj:', newTblStateObj);
    if (newTblStateObj[targetMenu]) {
      newTblStateObj[targetMenu] = false;
    } else {
      newTblStateObj[targetMenu] = true;
      Object.keys(newTblStateObj).forEach(key => {
        if (key === targetMenu) return;
        newTblStateObj[key] = false;
      });
    }
    // console.log("newTblStateObj:", newTblStateObj);
    adjustPriceTblState(tblStateObj => ({ ...tblStateObj, newTblStateObj }));
  }

  const iconStyling = {
    gridColumn: 'span 2',
    top: '4.75rem',
    left: '49%',
    backgroundColor: 'white',
    'z-index': '3',
    height: '2.25rem',
    borderRadius: '50%',
    width: '2rem',
    position: 'absolute',
  };

  console.log('priceTblState[item.id]:', priceTblState[item.id]);
  console.log('item.id:', item.id);
  return (
    <StyledPricingItem>
      <div
        data-item={item.id}
        className="pricing-menu-item-header-container"
        onClick={ev => handleMenuClick(ev)}
      >
        <h5 className="pricing-menu-item-header">{item.service}</h5>
        <h5 className="pricing-menu-item-header">{`$${item.price}`}</h5>
      </div>
      {priceTblState[item.id] ? (
        <LuBadgeMinus style={iconStyling} />
      ) : (
        <LuBadgePlus style={iconStyling} />
      )}

      <div
        data-item={item.id}
        className={`pricing-submenu-container ${
          priceTblState[item.id] ? 'menu-active' : 'menu-inactive'
        }`}
      >
        <p
          className={`pricing-submenu-content
      ${priceTblState[item.id] ? 'text-active' : 'text-inactive'}`}
        >
          {item.description}
        </p>
      </div>
    </StyledPricingItem>
  );
}
// we don't want to display we want the container to increase in height

const StyledPricingItem = styled.li`
  justify-content: center;
  align-content: center;
  position: relative;

  .last-item-cover {
    position: absolute;
    bottom: 1rem;
    height: 6rem;
    width: 100%;
    z-index: 6;
    background-color: whitesmoke;
  }

  &:last-child() {
    margin-bottom: 4rem;
  }

  h5 {
    font-size: 2rem;
  }
  &:hover {
    background-color: none;
  }

  .pricing-menu-item-header-container {
    display: grid;
    z-index: 3;
    min-height: 6rem;

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

    background-color: whitesmoke;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    width: 100%;
    border-bottom: 0.1rem solid grey;
  }
  .pricing-submenu-container {
    display: grid;
    align-items: center;
    text-align: center;
    justify-items: center;
  }

  .pricing-submenu-content {
    grid-column: span 2;
    padding: 1rem 0rem;
    max-width: 45rem;
    display: grid;
    text-align: center;
    justify-content: center;
  }
  @media (min-width: 800px) {
    // desktop styling here
  }

  .menu-active {
    z-index: 3;
    color: rgba(0, 0, 0, 1);
    max-height: 7rem;
    transition: color 500ms linear 250ms;
    transition: z-index 0ms ease-in-out 0s;
    transition: max-height 0s ease-in-out 0s;
  }

  .menu-inactive {
    z-index: 1;
    color: rgba(0, 0, 0, 0);
    max-height: 0rem;
    transition: color 0s linear 0s;
    transition: z-index 0s ease-in-out 0s;
    transition: max-height 0s ease-in-out 0s;
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
