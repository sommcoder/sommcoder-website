import styled from "styled-components";

export default function ContactFormItem({
  title,
  description,
  formInputState,
  handleInput,
  handleFieldClick,
  handleFieldBlur,
  errorMsg,
  position,
  type,
  id,
}) {
  return (
    <StyledContactFormItem
      data-position={position}
      active={formInputState[position]}
      onInput={(ev) => handleInput(ev)} // for Chrome's autofill
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
    -webkit-box-shadow: 0 0 0 30px whitesmoke inset !important;
  }

  input[type="text"]:-webkit-autofill,
  input[type="text"]:-webkit-autofill:hover,
  input[type="text"]:-webkit-autofill:focus,
  input[type="text"]:-webkit-autofill:active {
    /* Your custom styles to override browser-specific autofill styles */
    transition: background-color 5000s ease-in-out 0s; /* This is a trick used to change the background color */
  }

  input:last-child {
    height: 6rem;
  }
`;
