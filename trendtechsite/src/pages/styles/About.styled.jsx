import { styled } from "styled-components";

export const StyledAbout = styled.div`
  min-height: 100vh;
  width: 100%;
  background: green url(/mountain.jpg);
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2em;
  }

  h1 {
    text-shadow: 2px 2px 4px #000000;
  }

  p {
    text-align: center;
    color: #dfd9c9;
    text-shadow: 1px 1px 2px #000000;
  }
`;
