import styled from "styled-components";

import { LuBadgeMinus } from "react-icons/lu";
import { LuBadgePlus } from "react-icons/lu";

// dashis function:
//  function handleMenuClick(ev) {
//    ev.preventDefault();
//    let targetMenu = ev.currentTarget.dataset.menu;
//    const newNavBarObj = navBarObj;
//    if (newNavBarObj[targetMenu]) {
//      newNavBarObj[targetMenu] = false;
//    } else {
//      newNavBarObj[targetMenu] = true;
//      Object.keys(newNavBarObj).forEach((key) => {
//        if (key === targetMenu) return;
//        newNavBarObj[key] = false;
//      });
//    }
//    // console.log("newNavBarObj:", newNavBarObj);
//    adjustNavBar((navBarObj) => ({ ...navBarObj, newNavBarObj }));
//  }

/*
   
   <li className="nav-side-bar-menu-header-container">
      <div
        data-menu={menu}
        onClick={(ev) => handleMenuClick(ev)}
        className="nav-side-bar-menu-container menu-item"
      >
        <IconContext.Provider value={{ className: "nav-side-bar-icon" }}>
          {menuIcon && React.createElement(menuIcon)}
        </IconContext.Provider>
        <h5 className={"nav-side-bar-menu-text"}>{menu}</h5>
        <DropDownArrow navBarObj={navBarObj} menu={menu} />
      </div>
      <div
        className={`nav-side-bar-submenu-container ${
          navBarObj[menu] ? "menu-active" : "menu-inactive"
        }`}
        style={subMenuRows}
      >
        {subMenus.map(({ path, subMenu, subMenuIcon }, i) => {
          return (
            <NavSubMenuItem
              path={path}
              key={`${subMenu}-${i}`}
              subMenu={subMenu}
              menu={menu}
              navBarObj={navBarObj}
              subMenuIcon={subMenuIcon}
              navState={navState}
            />
          );
        })}
      </div>
    </li>
   
  */

export default function PricingItem({ item }) {
  return (
    <StyledPricingItem>
      <div className="pricing-menu-item-header-container">
        <h5 className="pricing-menu-item-header">{item.service}</h5>
        <h5 className="pricing-menu-item-header">{`$${item.price}`}</h5>
        <LuBadgePlus style={{ gridColumn: "span 2" }} />
      </div>
      <div className="pricing-submenu-container">
        <p className="pricing-submenu-content">{item.description}</p>
      </div>
    </StyledPricingItem>
  );
}

const StyledPricingItem = styled.li`
  // mobile and general styling
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  align-items: center;
  justify-items: center;
  text-align: center;
  width: 100%; */

  .pricing-menu-item-header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    width: 100%;
  }

  .pricing-submenu-content {
    grid-column: span 2;
  }
  @media (min-width: 800px) {
    // desktop styling here
  }
`;

/*
 
.nav-side-bar-menu-header-container {
  display: grid;
  position: relative;
  align-items: center;
  min-height: 3.5rem;
  z-index: 3;
}

.nav-side-bar-menu-header-container:last-child {
  border-bottom: 1px solid rgb(21, 52, 63);
}

.nav-side-bar-icon {
  color: white;
  height: 1.5rem;
  width: 1.5rem;
  align-self: center;
  justify-self: center;
  z-index: 3;
  opacity: 1;
  transition: opacity 250ms ease-in-out;
}

.menu-item {
  min-height: 3.5rem;
  align-self: center;
  z-index: 3;
  opacity: 1;
  transition: opacity 250ms ease-in-out;
}

.menu-item:hover {
  cursor: pointer;
  background-color: rgb(27, 64, 75);
}

.nav-side-bar-menu-text {
  text-wrap: wrap;
  align-self: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(231, 231, 231);
}

.nav-side-bar-menu-container {
  display: grid;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgb(62, 91, 100);
  grid-template-columns: 25% 50% 25%; 
  border-top: 1px solid rgb(21, 52, 63);
}

.nav-side-bar-submenu-container {
  display: grid;
  padding: "0rem";
  max-height: 0px; 
  z-index: 1;
}

.menu-active {
  z-index: 5;
  max-height: 200px; 
  transition: z-index 1000ms ease-in-out;
  transition: max-height 500ms ease-in-out;
}

.menu-inactive {
  z-index: 1;
  max-height: 0px; 
  transition: z-index 2000ms linear;
  transition: max-height 500ms ease-in-out;
}

 
*/
