import { useState } from "react";
import styled from "styled-components";
import ContactFormItem from "../ContactFormItem/ContactFormItem";
import { forwardRef } from "react";

export default forwardRef(function ContactSection(props, ref) {
  const formInputArr = [
    {
      title: "first name",
      description: "",
      errorMsg: "",
      type: "text",
    },
    { title: "last name", description: "", errorMsg: "", type: "text" },

    { title: "email address", description: "", errorMsg: "", type: "text" },
    {
      title: "what can I help you with?",
      description: "",
      errorMsg: "",
      type: "text",
    },
  ];

  const [inputFocus, toggleInputFocus] = useState(false);

  return (
    <StyledContactSection ref={ref.contact}>
      <form>
        <h4>HOW CAN I HELP?</h4>
        {formInputArr.map(({ title, description, errorMsg, type }, i) => (
          <ContactFormItem
            title={title}
            type={type}
            description={description}
            errorMsg={errorMsg}
            inputFocus={inputFocus}
            toggleInputFocus={toggleInputFocus}
          />
        ))}
        <button type="submit"></button>
      </form>
    </StyledContactSection>
  );
});

const StyledContactSection = styled.section`
  display: grid;
  min-height: 45rem;
  min-width: inherit;
  max-width: inherit;
  justify-items: center;
  align-items: center;
  background-image: url("/Wine Splatter.svg");

  border-top: 1px solid grey;
  form {
    display: grid;
    background-color: white;
    min-width: 30rem; // 32rem is smaller screen width
    padding: 2rem;
    border-radius: 0.75rem;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    row-gap: 0.5rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  }

  h4 {
    color: black;
    font-size: 1.8rem;
    text-align: center;
  }

  button {
    margin-top: 1.5rem;
    width: 87.5%;
  }

  @media (min-width: 800) {
    // desktop styling here
  }
`;
