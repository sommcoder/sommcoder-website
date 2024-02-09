import { useState } from 'react';
import styled from 'styled-components';
import ContactFormItem from '../ContactFormItem/ContactFormItem';
import { forwardRef } from 'react';

import { formInputArr } from '../../../menus/contactMenu.jsx';

export default forwardRef(function ContactSection({ refStateObj }, ref) {
  const [inputFocus, toggleInputFocus] = useState(false);

  return (
    <StyledContactSection ref={refStateObj.contact} className="content-section">
      <form className="content-card">
        <h4>HOW CAN I HELP?</h4>
        {formInputArr.map(({ title, description, errorMsg, type, id }, i) => (
          <ContactFormItem
            key={i}
            title={title}
            description={description}
            errorMsg={errorMsg}
            type={type}
            id={id}
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
  background-image: url('/Wine Splatter.svg');

  form {
    min-height: 30rem;
    min-width: 28rem;
    max-width: 75rem;
    display: grid;
    background-color: white;
    margin: 3rem;
    padding: 2rem;
    border-radius: 2rem;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    row-gap: 0.5rem;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
      0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  }

  h4 {
    color: black;
    font-size: 1.8rem;
    text-align: center;
  }

  button {
    margin-top: 1.5rem;
    width: 87.5%; // change this??
  }
`;
