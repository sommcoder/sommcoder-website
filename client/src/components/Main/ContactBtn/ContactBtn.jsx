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
      <button>Let's Chat</button>
    </StyledContactBtn>
  );
}
const StyledContactBtn = styled.a`
  justify-self: center;
  align-self: center;

  // TODO: lets get an icon to go on the left side of the button
  button {
    width: 14rem;
    font-size: 1.6rem;
  }
`;
