import { styled } from "styled-components";

export const StyledWhyUs = styled.div`
  & .icon-item {
    max-width: 300px;
    max-height: 400px;
    padding: 0.5em;
    text-align: center;
    color: #dfd9c9;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  h1 {
    margin: 0;
  }

  .icon--div {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #dfd9c9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon--div > div {
    font-size: 5em;
  }

  .why--content {
    display: flex;
    flex-direction: column;
  }

  .why--content h2 {
    margin: 0.5em 0 0 0;
  }
`;
