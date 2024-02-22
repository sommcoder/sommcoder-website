import styled from "styled-components";

export default function ContactBtn() {
  return (
    <StyledContactBtn
      // href="mailto:brian.davies589@gmail.com?subject=General Inquiry"
      onClick={() =>
        Calendly.initPopupWidget({
          url: "https://calendly.com/brian-davies589/15minchat",
        })
      }
    >
      <button>
        <span className="button-text">Let's Chat!</span>
      </button>
    </StyledContactBtn>
  );
}
const StyledContactBtn = styled.a`
  height: auto;
  width: auto;
  button {
    display: grid;
    align-content: center;
    height: 4rem;
    min-width: 15rem;
    max-width: 20rem;
    font-size: 1.6rem;
    text-align: center;
    margin: 3rem 0rem;
    margin-left: 2rem; // match the IntroImage component

    // row 4 only exists on mobile
    grid-row: 4;
    grid-column: span 3;

    align-content: center;
    // 480px
    @media (min-width: 30rem) {
      grid-row: 3;
      grid-column: 1;
      margin: 0rem 0rem;
    }
    // 768px
    /* @media (min-width: 48rem) {
      grid-row: 3;
      grid-column: 1;
    } */
  }
`;
