import styled from "styled-components";
import DownloadBtn from "../DownloadBtn/DownloadBtn";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavIconBox from "../NavIconBox/NavIconBox";

// icons:
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

export default function NavRightContainer() {
  const icons = [
    {
      name: "linked-in",
      image: linkedin,
      link: "https://www.linkedin.com/in/brian-davies-178b0b48/",
    },
    { name: "github", image: github, link: "https://github.com/sommcoder" },
  ];

  return (
    <StyledNavRightContainer>
      {icons.map(({ name, image, link }) => (
        <NavIconBox key={name} image={image} link={link} />
      ))}
      <DownloadBtn />
      <HamburgerMenu />
    </StyledNavRightContainer>
  );
}
const StyledNavRightContainer = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: right;
  margin-right: 2rem;
`;
