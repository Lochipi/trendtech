import { styled } from "styled-components";

export const ContactStyled = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 2em 0;

  .contact-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  .get-content h1 {
    margin: .3em 0;
    font-size: 3em;
  }

  .get-content p {
    padding: 0.5em 0;
    margin: 0;
  }

  .contact-address {
    display: flex;
    flex-direction: column;
  }

  .contact-address h4 {
    margin: .5em 0;
    padding: 0;
  }

  .contact-img {
    flex: 1;
    padding: 1em 2em;
    max-height: 700px;
  }

  .cont-img {
    object-fit: cover;
    opacity: 0.7;
    cursor: pointer;
    background-position: center;
    max-height: 700px;
    max-width: 600px;
    width: 100%;
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .svg {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-left: 1em;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .contact-content {
      gap: 2em;
    }

    .contact-img {
        padding: 1em .5em;
      }
  }

  @media (max-width: 868px) {
    .contact-content {
      gap: 2em;
    }
  }
`;
