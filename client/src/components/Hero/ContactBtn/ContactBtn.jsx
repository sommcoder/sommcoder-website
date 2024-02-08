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
  // TODO: lets get an icon to go on the left side of the button
  button {
    display: grid;
    align-content: center;
    min-height: 4rem;
    min-width: 15rem;
    max-width: 20rem;
    font-size: 1.6rem;
    text-align: center;
  }
`;
