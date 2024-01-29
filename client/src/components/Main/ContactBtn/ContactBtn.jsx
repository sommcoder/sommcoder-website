import styled from "styled-components";

export default function ContactBtn() {
  return (
    <StyledContactBtn href="mailto:brian.davies589@gmail.com?subject=General Inquiry">
      <button>Let's Chat</button>
    </StyledContactBtn>
  );
}
const StyledContactBtn = styled.a`
  justify-self: center;
  align-self: center;
`;
