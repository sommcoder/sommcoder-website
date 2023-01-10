import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  const theme = {};
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp className="App">
        <NavBar />
        <HeroSection />
        <ProjectSection />
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div``;
