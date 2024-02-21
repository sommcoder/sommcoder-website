import { useState } from "react";
import styled from "styled-components";

export default function ContactFormItem({
  title,
  description,
  errorMsg,
  type,
  id,
}) {
  const [inputFocus, toggleInputFocus] = useState(false);

  function handleFieldInput(ev) {
    if (ev.target.value) {
      // onChange ensures this is changed by autofill
      toggleInputFocus(true);
      return;
    }
  }

  function handleFieldFocus(ev) {
    if (!ev.target.value) {
      toggleInputFocus((prevState) => !prevState);
      return;
    }
    toggleInputFocus(true);
  }

  // TODO: error message will stay visually WITHIN the input element

  return (
    <StyledContactFormItem
      inputFocus={inputFocus}
      type={type === "longtext" ? "text" : type}
      longtext={type === "longtext" ? "longtext" : ""}
    >
      {type === "longtext" ? (
        <textarea
          name={id}
          id={id}
          autoComplete="on"
          form="contact-form"
          type="text"
          title={description}
          onChange={handleFieldInput}
          onFocus={handleFieldFocus}
          onBlur={handleFieldFocus}
        ></textarea>
      ) : (
        <input
          name={id}
          id={id}
          required
          form="contact-form"
          autoComplete="on"
          type="text"
          title={description}
          onChange={handleFieldInput}
          onFocus={handleFieldFocus}
          onBlur={handleFieldFocus}
        />
      )}
      <label
        name={title}
        for={id}
        id={`placeholder-${id}`}
        form="contact-form"
        aria-labelledby="placeholder-text"
        inputFocus
        className="placeholder-text"
      >
        <div className="label-text">{title}</div>
      </label>
    </StyledContactFormItem>
  );
}

const StyledContactFormItem = styled.div`
  // mobile and general styling
  position: relative;
  min-width: 28rem;
  padding: 1rem;
  border: 0.1rem solid rgba(123, 123, 123, 0.4);
  border-radius: 0.75rem;
  &:focus {
    border: 0.1rem solid #9e8cb0;
  }
  .placeholder-text {
    position: absolute;
    pointer-events: none;
    top: ${({ inputFocus, longtext }) =>
      inputFocus ? (longtext ? "-5%" : "-15%") : "37.5%"};
    left: 4%; // 3% blocks the caret
    padding: 0rem 0.2rem;
    transition: top 150ms linear;
    background-color: white;
    z-index: 3;
    color: #0000009e;
    font-size: 1.5rem;
  }

  // TODO: when onFocus() transform: translate x and y so that the label of the input field is just slightly above the top line of the input field. This should also cause a visual "break" in the line of the input field. We can achieve this this a higher z-index and a background on the h5 element. We have to  be sure that this doesn't event the text of the input field however.

  input,
  textarea {
    appearance: none; // Removes system-level styling.
    display: inline-block;
    border-radius: 0.75rem;
    display: block;
    font-size: 1.8rem;
    height: ${({ longtext }) => (longtext === "longtext" ? "20rem" : "3rem")};
    width: 90%;

    // textarea resets:
    outline: none;
    border: none;
    resize: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    line-height: 1;

    &:focus {
      background-color: none;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:last-child {
    height: 6rem;
  }

  @media (min-width: 80rem) {
    // desktop styling here
  }
`;
