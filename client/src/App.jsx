import Overlay from "./components/Navigation/Overlay/Overlay";
import HeaderBar from "./components/Navigation/HeaderBar/HeaderBar";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Footer from "./components/Navigation/Footer/Footer";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

export default function App() {
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
  width: 100%; // App should adjust with the ViewPort
  grid-template-rows: 6rem auto auto;
  overflow-x: scroll;
`;
