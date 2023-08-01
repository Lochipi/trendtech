import { styled } from "styled-components";

export const ProductsStyled = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: rgba(42, 41, 44, 1);
    padding-bottom: 1em;

    & h1 {
        text-align: center;
        font-weight: lighter;
        color: #dfd9c9;
        padding: 1em 0 .5em 0;
    }

    .products--container {
        display: flex;
        gap: 4em;
        align-items: center;
        justify-content: center;
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
`