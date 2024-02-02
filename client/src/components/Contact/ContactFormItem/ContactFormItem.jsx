import styled from "styled-components";

export default function ContactFormItem({
  description,
  errorMsg,
  title,
  inputFocus,
  toggleInputFocus,
}) {
  function handleInputClick(ev) {
    ev.stopPropagation(); // needed?
    inputFocus ? toggleInputFocus(false) : toggleInputFocus(true);
  }
  return (
    <StyledContactFormItem>
      <input
        title={description}
        onFocus={(ev) => handleInputClick(ev)}
        onBlur={(ev) => handleInputClick(ev)}
      />
      <h5 active={inputFocus}>{title}</h5>
      <label errorMsg={errorMsg} />
    </StyledContactFormItem>
  );
}

const StyledContactFormItem = styled.div`
  // mobile and general styling

  display: relative;
  max-width: 25rem;

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

  input {
    display: block;
    height: 3rem;
    width: 100%;
    border-radius: 0.75rem;
    outline: none;
    border: 1px solid rgba(123, 123, 123, 0.4);

    &:focus {
      border: 1px solid #9e8cb0;
    }
  }
  input:last-child {
    height: 6rem;
  }

  @media (min-width: 800) {
    // desktop styling here
  }
`;
