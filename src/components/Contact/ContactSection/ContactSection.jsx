import { useRef, forwardRef } from "react";
import styled from "styled-components";
import ContactFormItem from "../ContactFormItem/ContactFormItem";
import { GrPowerReset } from "react-icons/gr";
import { formInputArr } from "../../../menus/contactMenu.jsx";

import { database } from "../../../../firebase-sdk.js";
import { ref, set } from "firebase/database";

function writeUserFormData(formData) {
  set(ref(database, "forms/" + Date.now()), {
    fname: formData.get("fname"),
    lname: formData.get("lname"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
}

export default forwardRef(function ContactSection({ refStateObj }, ref) {
  const formRef = useRef();
  function handleResetForm(ev) {}

  function handleFormSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(formRef.current);
    // write data:
    writeUserFormData(formData);
    // Clear form fields:
    formRef.current.reset();
  }
  return (
    <StyledContactSection
      length={formInputArr.length - 1}
      ref={refStateObj.contact}
      className="content-section"
      onSubmit={handleFormSubmit}
    >
      <form ref={formRef} id="contact-form" className="content-card">
        <button type="reset" id="reset-button" onClick={handleResetForm}>
          <GrPowerReset style={{ height: "2rem", color: "black" }} />
        </button>
        <h4>HOW CAN I HELP?</h4>
        {formInputArr.map(({ title, description, errorMsg, type, id }, i) => (
          <ContactFormItem
            key={i}
            title={title}
            description={description}
            errorMsg={errorMsg}
            type={type}
            id={id}
          />
        ))}
        <button onSubmit={handleFormSubmit} form="contact-form" type="submit">
          Send
        </button>
      </form>
    </StyledContactSection>
  );
});

const StyledContactSection = styled.section`
  background-image: url("/Wine Splatter.svg");

  form {
    z-index: 5;
    min-height: 40rem;
    min-width: 30rem;
    width: auto;
    position: relative;
    margin: 2rem 1.5rem 3rem 1.5rem;
    display: grid;
    background-color: white;
    border-radius: 2rem;
    grid-template-rows: ${({ length }) => `repeat(${length}, "1fr")`};
    align-items: center;
    justify-items: center;
    justify-content: center;
    row-gap: 1.5rem;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  }

  #reset-button {
    display: grid;
    align-content: center;
    justify-content: center;
    min-width: 3rem;
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 7.5%;
    top: 4%;
    background-color: #ff0000;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
    svg,
    path {
      pointer-events: none;
    }
  }

  h4 {
    color: black;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    font-size: 1.6rem;
    width: 50%; // change this??
    &:active {
      filter: brightness(75%);
    }
  }
`;