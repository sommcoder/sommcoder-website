import styled from "styled-components";
import SideBarIcon from "../SideBarIcon/SideBarIcon";
import linkedin from "../../assets/github-icon.svg";
import github from "../../assets/github-icon.svg";

export default function SideBar() {
  const icons = [linkedin, github];

  return (
    <StyledSideBar>
      {icons.map((icon) => (
        <SideBarIcon icon={icon} />
      ))}
    </StyledSideBar>
  );
}
const StyledSideBar = styled.span`
  display: none;

  // tablet+
  @media (min-width: 600px) {
    display: inline-block;
    width: 40px;
    border-bottom: 1px solid #d8c9e9;

    border-bottom-right-radius: 15px;

    background: linear-gradient(145deg, #d7cae6, #b39dc9);
    filter: brightness(90%);
    transition: 0.3s ease-in-out;
  }
`;
