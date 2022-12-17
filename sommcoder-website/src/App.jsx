import NavBar from "./components/NavBar/NavBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import CarouselContainer from "./components/CarouselContainer/CarouselContainer";
import styled from "styled-components";

export default function App() {
  return (
    <StyledApp className="App">
      <NavBar />
      <HeroContainer />
      <CarouselContainer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  background-color: black;
`;
