import { styled } from "styled-components";

export const WhyUsStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgba(42, 41, 44, 1) url(/why.jpg);
  backgroud-position: center;
  background-size: cover;

  .why-title {
    text-align: center;
    padding: 0.5em 0;
    margin: 0;
    font-weight: light;
    font-style: italic;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2em;
    }
  }
`;
