import { styled } from "styled-components";

export const ProductsStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: rgba(42, 41, 44, 1);
  padding-bottom: 1em;

  & h1 {
    text-align: center;
    font-weight: lighter;
    color: #dfd9c9;
    padding: 1em 0 0.5em 0;
  }

  .products--container {
    display: flex;
    justify-content: center;
    gap: 4em;
    flex-wrap: wrap;
  }

  hr {
    width: 80%;
    margin-top: 2em;
  }

  @media (max-width: 576px) {
    .products--container {
      align-items: center;
    }
  }
`;
