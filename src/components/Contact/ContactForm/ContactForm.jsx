import styled from "styled-components";

import { useRef, useState, useEffect } from "react";

import ContactFormItem from "../ContactFormItem/ContactFormItem";
// icon:
import { GrPowerReset } from "react-icons/gr";
// data:
import { formInputArr } from "../../../menus/contactMenu.jsx";
// db:
import { db } from "../../../../firebase-sdk.js";
import { ref, set } from "firebase/database";

function writeUserFormData(formData) {
  console.log("formData:", formData);
  set(ref(db, "forms/" + Date.now()), {
    fname: formData.get("fname"),
    lname: formData.get("lname"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
}

export default function ContactForm() {
  const initFormInputState = {
    0: false,
    1: false,
    2: false,
    3: false,
  };

  const [formInputState, setFormInputState] = useState(initFormInputState);
  const [formSubmitState, setFormSubmitState] = useState(false);

  const formRef = useRef();

  function handleFieldClick(ev) {
    if (ev.target.dataset.position) {
      setFormInputState((prevState) => {
        return { ...prevState, [ev.target.dataset.position]: true };
      });
    }
  }
  // auto-fill:
  function handleInput(ev) {
    // if not true, make true
    if (!formInputState[ev.target.dataset.position]) {
      setFormInputState((prevState) => {
        return { ...prevState, [ev.target.dataset.position]: true };
      });
    }
  }
  // if leave, no value? make false
  function handleFieldBlur(ev) {
    if (!ev.target.value) {
      setFormInputState((prevState) => {
        return { ...prevState, [ev.target.dataset.position]: false };
      });
    }
  }

  function handleResetForm(ev) {
    // reset fields:
    formRef.current.reset();
    // reset positions:
    setFormInputState(initFormInputState);
  }

  function handleFormSubmit(ev) {
    ev.preventDefault();
    // get form data:
    const formData = new FormData(formRef.current);
    // write data:
    writeUserFormData(formData);
    // reset fields:
    formRef.current.reset();
    // reset positions:
    setFormInputState(() => initFormInputState);
    // Create form submission notification
    setFormSubmitState(true);
  }

  useEffect(() => {
    if (formSubmitState) {
      setTimeout(() => {
        setFormSubmitState(false);
      }, 1750);
    }
  }, [formSubmitState]);

  return (
    <StyledContactForm
      ref={formRef}
      id="contact-form"
      className="content-card"
      length={formInputArr.length - 1}
      onSubmit={handleFormSubmit}
    >
      <button type="reset" id="reset-button" onClick={handleResetForm}>
        <GrPowerReset style={{ height: "2rem", color: "black" }} />
      </button>
      <h4>HOW CAN I HELP?</h4>
      {formInputArr.map(({ title, description, errorMsg, type, id }, i) => (
        <ContactFormItem
          key={`${id}-${i}`}
          position={`${i}`}
          title={title}
          formInputState={formInputState}
          handleInput={handleInput}
          handleFieldClick={handleFieldClick}
          handleFieldBlur={handleFieldBlur}
          description={description}
          errorMsg={errorMsg}
          type={type}
          id={id}
        />
      ))}
      {formSubmitState ? (
        <StyledNotificationPopup>Form sent!</StyledNotificationPopup>
      ) : (
        ""
      )}
      <button form="contact-form" type="submit">
        Send
      </button>
    </StyledContactForm>
  );
}

const StyledContactForm = styled.form`
  z-index: 5;
  min-height: 40rem;
  min-width: 30rem;
  width: auto;
  position: relative;
  margin: 2rem 1.5rem 2rem 1.5rem;
  display: grid;
  background-color: whitesmoke;
  border-radius: 2rem;
  grid-template-rows: ${({ length }) => `repeat(${length}, "1fr")`};
  align-items: center;
  justify-items: center;
  justify-content: center;
  row-gap: 1.5rem;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);

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

  #loading {
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

const StyledNotificationPopup = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  bottom: 10rem;
  @keyframes notification-pop-up {
    0% {
      bottom: 8rem;
      opacity: 0;
    }
    100% {
      bottom: 10rem;
      opacity: 1;
    }
  }

  animation: notification-pop-up 500ms ease-in-out;
`;
