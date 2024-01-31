import { useState } from "react";
import styled from "styled-components";

export default function ContactSection() {
  const formInputArr = [
    {
      title: "first name",
      description: "",
      errorMsg: "",
    },
    { title: "last name", description: "", errorMsg: "" },

    { title: "email address", description: "", errorMsg: "" },
    {
      title: "what can I help you with?",
      description: "",
      errorMsg: "",
    },
  ];

  const [inputFocus, toggleInputFocus] = useState(false);

  function handleInputClick(ev) {
    ev.stopPropagation(); // needed?
    inputFocus ? toggleInputFocus(false) : toggleInputFocus(true);
  }

  return (
    <StyledContactSection>
      <form>
        <h4>NEED HELP ON A WEB PROJECT?</h4>
        {formInputArr.map(({ title, description, errorMsg }, i) => (
          <div>
            <input title={description} onFocus={(ev) => handleInputClick(ev)} />
            <h5 active={inputFocus}>{title}</h5>
            <label errorMsg={errorMsg} />
          </div>
        ))}
        <button type="submit"></button>
      </form>
    </StyledContactSection>
  );
}

const StyledContactSection = styled.section`
  // mobile and general styling
  border-top: 1px solid grey;
  height: 45rem;
  display: grid;
  justify-items: center;
  align-items: center;
  min-width: inherit;
  max-width: inherit;
  form {
    display: grid;
    background-color: white;
    min-width: 30rem;
    padding: 2rem;
    border-radius: 0.75rem;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    row-gap: 0.5rem;
  }

  h4 {
    color: black;
    font-size: 2rem;
  }

  div {
    display: relative;
    width: 35rem;
  }

  h5 {
    pointer-events: none;
    display: absolute;
    top: 0;
    left: 6;
    z-index: 3;
    transform: ${({ active }) =>
      active ? "translateY(-4rem)" : "translateY(-2.25rem)"};
    //
    color: #0000009e;
    font-size: 1.2rem;

    // TODO: when onFocus() transform: translate x and y so that the label of the input field is just slightly above the top line of the input field. This should also cause a visual "break" in the line of the input field. We can achieve this this a higher z-index and a background on the h5 element. We have to  be sure that this doesn't event the text of the input field however.
  }

  button {
    margin-top: 1.5rem;
    width: 87.5%;
  }

  input {
    display: block;
    height: 3rem;
    width: 100%;
    border-radius: 0.75rem;
    outline: none;
  }

  @media (min-width: 800) {
    // desktop styling here
  }
`;
