import NavBar from "./components/Navigation/NavBar/NavBar";
import HeroSection from "./components/Main/HeroSection/HeroSection";
import ProjectSection from "./components/Project/ProjectSection/ProjectSection";
import Footer from "./components/Navigation/Footer/Footer";
import Overlay from "./components/Navigation/Overlay/Overlay";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  const theme = {
    // styles that can be used ACROSS the site
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp className="App">
        <Overlay />
        <NavBar />
        <HeroSection />
        <ProjectSection />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div``;
