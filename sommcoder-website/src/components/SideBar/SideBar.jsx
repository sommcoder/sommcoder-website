import styled from "styled-components";
import SideBarIcon from "../SideBarIcon/SideBarIcon";

export default function SideBar() {
  return (
    <StyledSideBar>
      <SideBarIcon />
    </StyledSideBar>
  );
}
const StyledSideBar = styled.div`
  border: 1px solid white;
  min-width: 50px;
  max-width: 80px;
`;
