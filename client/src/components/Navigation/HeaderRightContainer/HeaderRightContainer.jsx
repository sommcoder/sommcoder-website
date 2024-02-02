import styled from "styled-components";
import DownloadBtn from "../DownloadBtn/DownloadBtn";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavIconBox from "../NavIconBox/NavIconBox";

// icons:
import { FaLinkedinIn } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";

import { SiFiverr } from "react-icons/si";

export default function HeaderRightContainer() {
  const iconStyle = {
    height: "4rem",
    width: "4rem",
  };

  const icons = [
    {
      name: "fiverr",
      component: (
        <SiFiverr
          style={{
            height: "8rem",
            width: "8rem",
            transform: "translateY(-18px)", // hack fix
          }}
        />
      ),
      link: "https://www.fiverr.com/sommcoder",
    },
    {
      name: "linked-in",
      component: <FaLinkedinIn style={iconStyle} />,
      link: "https://www.linkedin.com/in/brian-davies-178b0b48/",
    },
    {
      name: "github",
      component: <AiFillGithub style={iconStyle} />,
      link: "https://github.com/sommcoder",
    },
  ];

  return (
    <StyledHeaderRightContainer>
      {icons.map(({ name, component, link }) => (
        <NavIconBox key={name} component={component} link={link} />
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
