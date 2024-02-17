import { useRef } from 'react';
import styled from 'styled-components';
import ContactFormItem from '../ContactFormItem/ContactFormItem';
import { forwardRef } from 'react';

import { formInputArr } from '../../../menus/contactMenu.jsx';

export default forwardRef(function ContactSection({ refStateObj }, ref) {
  const formRef = useRef();

  function handleFormSubmit(ev) {
    ev.preventDefault();
    // we should probably provide some clientside validation here right???

    // TODO: there is no ev.target.form
    console.log('ev:', ev);
    console.log('ev.target:', ev.target);
    console.log('ev.target.form:', ev.target.form);
    console.log('formRef:', formRef);

    const formData = new FormData(formRef.current);
    console.log('formData:', formData);

    // Access form values
    const fname = formData.get('fname');
    const lname = formData.get('lname');
    const email = formData.get('email');
    const message = formData.get('message');

    // Do something with the form data (e.g., log it)
    // TODO: send to Firestore which maybe we can get the server to send you an email notification when they do?

    // Clear form fields
    ev.target.form.reset();
    // need to also change the state f
  }
  return (
    <StyledContactSection
      length={formInputArr.length - 1}
      ref={refStateObj.contact}
      className="content-section"
      onSubmit={handleFormSubmit}
    >
      <form ref={formRef} id="contact-form" className="content-card">
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
  background-image: url('/Wine Splatter.svg');

  form {
    min-height: 40rem;
    min-width: 30rem;
    width: auto;
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
