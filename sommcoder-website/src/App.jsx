import NavBar from "./components/NavBar/NavBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import CarouselContainer from "./components/CarouselContainer/CarouselContainer";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  const theme = {};
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp className="App">
        <NavBar />
        <HeroContainer />
        <CarouselContainer />
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled.div``;
