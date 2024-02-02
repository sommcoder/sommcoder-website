import Overlay from "./components/Navigation/Overlay/Overlay";
import HeaderBar from "./components/Navigation/HeaderBar/HeaderBar";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Footer from "./components/Navigation/Footer/Footer";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  // if screen window.screen() is below 32rem/320px then show an error page
  // if user has javascript disabled, show a warning page
  return (
    <>
      <GlobalStyles />
      <StyledApp className="App">
        {/* <Overlay /> */}
        <HeaderBar />
        <ContentWrapper />
        <Footer />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  display: grid;
  min-width: 32rem;
  max-width: 100%;
  grid-template-rows: 6rem auto auto;
  overflow-x: scroll;
`;
