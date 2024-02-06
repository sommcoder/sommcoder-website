import Overlay from "./components/Navigation/Overlay/Overlay";
import HeaderBar from "./components/Navigation/HeaderBar/HeaderBar";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Footer from "./components/Navigation/Footer/Footer";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useRef } from "react";

export default function App() {
  // TODO: if screen window.screen() is below 32rem/320px then show an error page
  // TODO: if user has javascript disabled, show a warning page

  // need a reference to each section element on the one page site.
  // this will be passed to the footer (all devices) and the header (mobile)
  const refStateObj = {
    main: useRef(null),
    project: useRef(null),
    about: useRef(null),
    services: useRef(null),
    contact: useRef(null),
  };
  const navLabelArr = Object.keys(refStateObj);
  //TODO: trying to move the 4 refs up to App and then pass the refs down to Footer and eventually the HamburgerModal so that the menu click can bring the user to the right coordinates on the page to view that particular element/section

  console.log("refStateObj:", refStateObj);

  return (
    <>
      <GlobalStyles />
      <StyledApp className="App">
        {/* <Overlay  refStateObj={refStateObj}/> */}
        <HeaderBar refStateObj={refStateObj} navLabelArr={navLabelArr} />
        <ContentWrapper ref={refStateObj} />
        <Footer refStateObj={refStateObj} navLabelArr={navLabelArr} />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  display: grid;
  min-width: 32rem;
  max-width: 100%;
  grid-template-rows: 6rem auto auto;
`;
