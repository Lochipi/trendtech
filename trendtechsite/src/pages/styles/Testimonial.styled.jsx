import { styled } from "styled-components";

export const TestimonialStyled = styled.div`
  min-height: 90vh;
  width: 100%;
  background-color: rgba(42, 41, 44, 1);

  & .content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3em;
    padding: 0 5em;
    
  }

  & .content h1 {
    font-weight: lighter;
    text-align: center;
  }

  .testi-card {
    display: flex;
    justify-content: center;
    gap: 4em;
    flex-wrap: wrap;
  }

  @media (max-width: 915px) {
    & .content {
      padding: 1em;
    }
  
  }
`;
