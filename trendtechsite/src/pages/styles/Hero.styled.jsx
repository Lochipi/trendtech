import { styled } from "styled-components";

export const HeroStyled = styled.div`
  min-height: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;

  .hero--content {
    background-color: rgba(42, 41, 44, 1);
    color: #dfd9c9;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;
    flex: 2;
  }

  .hero--content h2 {
   margin: 0;
  }

  .hero--content h1{
    margin: .5em 0 0 0;
  }

  .hero--content p{
    line-height: 1.5;
  }

  .hero--img {
    flex: 1;
    background: rgba(42, 41, 44, 1) url(./home.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  hr {
    width: 100%;
  }

  
  @media (max-width: 456px) {
    .hero--img {
        display: none;
    }
  }
`;
