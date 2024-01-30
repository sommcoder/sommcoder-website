import Overlay from "./components/Navigation/Overlay/Overlay";
import NavBar from "./components/Navigation/NavBar/NavBar";
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
        <NavBar />
        <ContentWrapper />
        <Footer />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: auto auto auto;
  overflow-x: hidden;
`;
