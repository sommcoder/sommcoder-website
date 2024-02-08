import styled from "styled-components";

export default function ContactFormItem({
  title,
  description,
  errorMsg,
  type,
  id,
  inputFocus,
  toggleInputFocus,
}) {
  function handleInputClick(ev) {
    ev.stopPropagation(); // needed?
    inputFocus ? toggleInputFocus(false) : toggleInputFocus(true);
  }

  // TODO: error message will stay visually WITHIN the input element

  return (
    <StyledContactFormItem
      type={type === "longtext" ? "text" : type}
      longtext={type === "longtext" ? "longtext" : ""}
    >
      <input
        id={id}
        type={type === "longtext" ? "text" : type}
        value=""
        name={id}
        aria-labelledBy="placeholder-text"
        autoComplete="off"
        title={description}
        onFocus={(ev) => handleInputClick(ev)}
        onBlur={(ev) => handleInputClick(ev)}
      />
      <label
        active={inputFocus}
        id={`placeholder-${id}`}
        className="placeholder-text"
      >
        <div className="label-text">{title}</div>
      </label>
    </StyledContactFormItem>
  );
}

const StyledContactFormItem = styled.div`
  // mobile and general styling

  display: relative;
  width: 25rem;
  height: ${({ longtext }) => (longtext === "longtext" ? "6rem" : "3rem")};

  label {
    pointer-events: none;
    display: absolute;
    top: 0;
    left: 6;
    z-index: 3;
    /* transform: translateY(-10rem); */
    transform: ${({ active }) =>
      active ? "translateY(-4rem)" : "translateY(-2rem)"};

    color: #0000009e;
    font-size: 1.2rem;
  }

  // TODO: when onFocus() transform: translate x and y so that the label of the input field is just slightly above the top line of the input field. This should also cause a visual "break" in the line of the input field. We can achieve this this a higher z-index and a background on the h5 element. We have to  be sure that this doesn't event the text of the input field however.

  input {
    display: block;
    height: ${({ longtext }) => (longtext === "longtext" ? "6rem" : "3rem")};
    width: 100%;
    border-radius: 0.75rem;
    outline: none;
    border: 0.1rem solid rgba(123, 123, 123, 0.4);

    &:focus {
      border: 0.1rem solid #9e8cb0;
    }
  }
  input:last-child {
    height: 6rem;
  }

  @media (min-width: 80rem) {
    // desktop styling here
  }
`;
