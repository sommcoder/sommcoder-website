import styled from "styled-components";
import CarouselItem from "../CarouselItem/CarouselItem";
import wordle from "../../assets/images/wordle.svg";
import markey from "../../assets/images/mar-key.svg";
import sommcoder from "../../assets/images/sommcoder.svg";

export default function CarouselSection() {
  // we should useEffect to fetch public git repositories and post them here. Or use React Query and query our server API!!! Or are we gunna use Astro????

  // we want to get an array so that we can map them to produce the number of CarouselItems needed WITH their content

  // this is just sample data to get the logic down but this will become a server query eventually

  // maybe we create Pages with React Router to have an initial short for the Home page, clicking the CarouselItem will link to the projects respective page where more details about the application can be seen by the user.

  // the long description will get passed to the Page only
  const items = [
    {
      thumbnail: wordle,
      link: "https://sommcoder.github.io/Wordle-Clone-App/",
      title: "Wordle Clone",
      short:
        "A vanilla JavaScript and jQuery clone of the popular game Wordle. Brian's first app!",
      long: "",
    },
    {
      thumbnail: markey,
      link: "https://github.com/sommcoder/Mar-Key",
      title: "Mar-Key",
      short:
        "Allows users to determine how many letter blocks to collect for an analog marquee display with input validation based on the current display",
      long: "Marquee keeps track of block counts, dynamically validates messages as they're entered, cross references the former display to the desired new display so that users can determine which blocks they need to retrieve and how many of each depending on which of the 3 marquees have received input",
    },
    // {
    //   thumbnail: "",
    //   link: "",
    //   title: "Grat-ify",
    //   short:
    //     "Grat-ify is a full-stack hospitality gratuity app that alleviates the need for users to handle gratuity distribution amongst their employees via spreadsheets.",
    //   long: "After initial setup, Grat-ify allows users to upload csv files from their payroll and POS applications to quickly determine how much money each employee should receive from the gratuity pool based on the users specifications ",
    // },
    {
      thumbnail: sommcoder,
      link: "",
      title: "SommCoder Website",
      short:
        "This Website! The UI is built with React & styled-components and it is rendered using Astro to create this JAM stack website",
      long: "",
    },
    // {
    //   thumbnail: "",
    //   link: "",
    //   title: "Mass Photo Uploader",
    //   short:
    //     "This is Brian's first Shopify app using the Node.js template, Shopify CLI 3.0, React, ",
    //   long: "",
    // },
  ];

  return (
    <StyledCarouselSection>
      {items.map(({ thumbnail, link, title, short }) => (
        <CarouselItem
          thumbnail={thumbnail}
          title={title}
          short={short}
          key={title}
          link={link}
        />
      ))}
    </StyledCarouselSection>
  );
}
const StyledCarouselSection = styled.div`
  display: grid;
  margin: 5rem 2rem 5rem 2rem;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  // min needs to be large enough to accommodate the px of the img tags in CarouselItem
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  // Mobile users should just be able to scroll down through the projects, but Desktop users will have arrows and a proper Carousel setup to scroll through the CarouselItems

  // We will have to wrap the grid code above in a media query to show what we need for Desktop Users.

  // min-width is a mobile first approach!!
  /* @media (min-width: 500px) {
    
  } */

  // we need to have the carousel items appear as if they are cycling through the page
`;
