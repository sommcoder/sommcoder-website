import styled from 'styled-components';

import { LuBadgeMinus } from 'react-icons/lu';
import { LuBadgePlus } from 'react-icons/lu';

export default function PricingItem({
  item,
  priceTblState,
  adjustPriceTblState,
}) {
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
    right: '50%',
    left: '50%',
    backgroundColor: 'white',
    'z-index': '3',
    height: '2.25rem',
    borderRadius: '50%',
    width: '3rem',
    position: 'absolute',
  };

  console.log('priceTblState[item.id]:', priceTblState[item.id]);
  console.log('item.id:', item.id);
  return (
    <StyledPricingItem>
      <div className="pricing-menu-item-header-container">
        <h5 className="pricing-menu-item-header">{item.service}</h5>
        <h5 className="pricing-menu-item-header">{`$${item.price}`}</h5>
        {priceTblState[item.id] ? (
          <LuBadgeMinus
            data-item={item.id}
            onClick={ev => handleMenuClick(ev)}
            style={iconStyling}
          />
        ) : (
          <LuBadgePlus
            data-item={item.id}
            onClick={ev => handleMenuClick(ev)}
            style={iconStyling}
          />
        )}
      </div>
      <div
        data-item={item.id}
        className={`pricing-submenu-container ${
          priceTblState[item.id] ? 'menu-active' : 'menu-inactive'
        }`}
      >
        <p className="pricing-submenu-content">{item.description}</p>
      </div>
    </StyledPricingItem>
  );
}
// we don't want to display we want the container to increase in height

const StyledPricingItem = styled.li`
  justify-content: center;
  align-content: center;

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
    position: relative;
    background-color: whitesmoke;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    width: 100%;
    border-bottom: 0.1rem solid grey;
  }

  .pricing-submenu-content {
    grid-column: span 2;
    padding: 1rem 0rem;
  }
  @media (min-width: 800px) {
    // desktop styling here
  }

  .menu-active {
    z-index: 3;
    max-height: 200px;
    transition: z-index 1000ms linear;
    transition: max-height 500ms linear;
  }

  .menu-inactive {
    z-index: 1;
    max-height: 0px;
    transition: z-index 2000ms linear;
    transition: max-height 500ms linear;
  }
`;
