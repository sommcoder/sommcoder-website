import styled from 'styled-components';
import OverlayNavList from '../OverlayNavList/OverlayNavList';

export default function OverlaySection({
  refStateObj,
  mobileMenu,
  toggleMobileMenu,
  navLabelArr,
  menuAnimation,
  toggleMenuAnimation,
}) {
  // TODO: create an onBlur to exit if the user clicks outside the overla menu
  function handleBlur() {
    console.log('BLURRRRR');
    toggleMobileMenu(prevState => !prevState);
  }

  return (
    <StyledOverlaySection mobileMenu={mobileMenu} onBlur={handleBlur}>
      <OverlayNavList
        refStateObj={refStateObj}
        mobileMenu={mobileMenu}
        toggleMobileMenu={toggleMobileMenu}
        navLabelArr={navLabelArr}
        menuAnimation={menuAnimation}
        toggleMenuAnimation={toggleMenuAnimation}
      />
    </StyledOverlaySection>
  );
}

// TODO: would be really cool to have a hamburger menu that has it's middle line transform and move to the overlay menu and serve as the users VISUAL reference for where they are on the single page site. The line would need to move based on the users location to the section elements across the page. The user would also be able to click these nav items to scroll to them.
const StyledOverlaySection = styled.nav`
  z-index: 8;
  position: fixed;
  background-color: rgba(212, 198, 228, 0.95);
  height: 100%;
  width: 20rem;
  right: ${({ mobileMenu }) => (mobileMenu ? '0rem' : '-20rem')};
  transition: all 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  padding-top: 8rem;
`;
