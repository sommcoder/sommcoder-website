import NavBar from "./components/NavBar/NavBar";
import HeroContainer from "./components/HeroContainer/HeroContainer";
import CarouselContainer from "./components/CarouselContainer/CarouselContainer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroContainer />
      <CarouselContainer />
    </div>
  );
}
