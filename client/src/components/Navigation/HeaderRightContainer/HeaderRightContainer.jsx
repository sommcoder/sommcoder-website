import styled from "styled-components";
import DownloadBtn from "../DownloadBtn/DownloadBtn";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavIconBox from "../NavIconBox/NavIconBox";

// icons:
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";

export default function HeaderRightContainer() {
  const icons = [
    {
      component: (
        <SiFiverr
          style={{
            height: "7rem",
            width: "8rem",
            transform: "translateY(-13px)", // hack fix
          }}
        />
      ),
      link: "https://www.fiverr.com/sommcoder",
    },
    {
      component: (
        <FaLinkedinIn
          style={{
            height: "4rem",
            width: "3rem",
          }}
        />
      ),
      link: "https://www.linkedin.com/in/brian-davies-178b0b48/",
    },
    {
      component: (
        <AiFillGithub
          style={{
            height: "4rem",
            width: "3.75rem",
            transform: "translateY(-2px)", // hack fix
          }}
        />
      ),
      link: "https://github.com/sommcoder",
    },
  ];

  return (
    <StyledHeaderRightContainer>
      {icons.map(({ component, link }, i) => (
        <NavIconBox key={i} component={component} link={link} />
      ))}
      <DownloadBtn />
      <HamburgerMenu />
    </StyledHeaderRightContainer>
  );
}
const StyledHeaderRightContainer = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: right;
  gap: 1.5rem;
`;
