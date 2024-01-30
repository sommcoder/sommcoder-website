import styled from "styled-components";

export default function CarouselItem({ thumbnail, title, link, short }) {
  function linkToProject(e) {
    e.preventDefault();
    window.open(link, "_blank");
  }

  // add a <video> tag for YouTube links
  // create brief tutorial videos on Loom and upload them to YT

  return (
    <StyledCarouselItem onClick={linkToProject} href={link}>
      <h3>{title}</h3>
      <img src={thumbnail} />

      <p>{short}</p>
    </StyledCarouselItem>
  );
}

const StyledCarouselItem = styled.a`
  display: grid;
  justify-items: center;
  text-align: center;
  grid-template-rows: auto auto 33%;
  row-gap: 1.5rem;
  padding: 2rem;
  text-decoration: none;
  min-height: 10rem;
  height: auto;
  width: 28rem;
  border-radius: 2rem;
  background-color: rgb(80, 104, 84);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);

  /*
  should adjust this to a gif or short video asset!
  */

  &:hover {
    cursor: pointer;
    transition: 200ms ease-in-out;
    transform: translateY(-2.5px);
  }

  img {
    max-height: 210px;
    max-width: 210px;
    height: auto;
    width: auto;
    border-radius: 10px;
  }
`;
