import styled from "styled-components";

import { forwardRef } from "react";
import AboutMeCard from "../AboutMeCard/AboutMeCard";

export default forwardRef(function AboutMeSection({ refStateObj }, ref) {
  return (
    <StyledAboutMeSection ref={refStateObj.about} className="content-section">
      <AboutMeCard />
    </StyledAboutMeSection>
  );
});

const StyledAboutMeSection = styled.section`
  height: auto;
`;
