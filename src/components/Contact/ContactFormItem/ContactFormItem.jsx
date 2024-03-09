import styled from "styled-components";

export default function ContactFormItem({
  title,
  description,
  formInputState,
  handleFieldChange,
  handleFieldClick,
  handleFieldBlur,
  errorMsg,
  position,
  type,
  id,
}) {
  console.log("position:", position);
  console.log("formInputState:", formInputState);
  return (
    <StyledContactFormItem
      data-position={position}
      active={formInputState[position]}
      onChange={(ev) => handleFieldChange(ev)}
      onClick={(ev) => handleFieldClick(ev)}
      onBlur={(ev) => handleFieldBlur(ev)}
      type={type === "longtext" ? "text" : type}
      longtext={type === "longtext" ? "longtext" : ""}
    >
      {type === "longtext" ? (
        <textarea
          name={id}
          data-position={position}
          id={id}
          required
          autoComplete="on"
          form="contact-form"
          type="text"
          title={description}
        ></textarea>
      ) : (
        <input
          name={id}
          data-position={position}
          id={id}
          required
          form="contact-form"
          autoComplete="on"
          type="text"
          title={description}
        />
      )}
      <label
        name={title}
        for={id}
        data-position={position}
        id={`placeholder-${id}`}
        form="contact-form"
        aria-labelledby="placeholder-text"
        formInputState
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
    top: ${({ active, longtext }) =>
      active ? (longtext ? "-5%" : "-15%") : "37.5%"};
    left: 4%; // 3% blocks the caret
    padding: 0rem 0.2rem;
    transition: top 150ms linear;
    background-color: whitesmoke;
    z-index: 3;
    color: #0000009e;
    font-size: 1.5rem;
  }

  input,
  textarea {
    appearance: none; // Removes system-level styling.
    display: inline-block;
    border-radius: 0.75rem;
    display: block;
    font-size: 1.8rem;
    height: ${({ longtext }) => (longtext === "longtext" ? "20rem" : "3rem")};
    width: 100%;
    background-color: transparent;
    /* pointer-events: none; */
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
