import styled from "styled-components";

import ContactForm from "../ContactForm/ContactForm";

import { forwardRef } from "react";

export default forwardRef(function ContactSection({ refStateObj }, ref) {
  return (
    <StyledContactSection ref={refStateObj.contact} className="content-section">
      <ContactForm />
    </StyledContactSection>
  );
});

const StyledContactSection = styled.section``;
