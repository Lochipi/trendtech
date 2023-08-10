import styled from "styled-components";

export const FooterStyled = styled.div`
  min-height: 200px;
  width: 100%;
  background: linear-gradient(#3a6d70, gray);
  color: whitesmoke;

  .footer-content {
    display: flex;
    padding: 0.5em 1em;
  }

  & .footer-logo {
    flex: 1;
  }

  & .footer-logo h1 {
    font-size: 2rem;
  }

  & .footer-links {
    flex: 2;
  }

  & .footer-links p:first-child {
    margin-top: 2em;
  }

  & .footer-links p {
    line-height: 1;
  }

  & .footer-links p a {
    text-decoration: none;
    color: whitesmoke;
  }

  & .footer-links p a:hover {
    text-decoration: underline;
    color: rgba(173, 216, 230, 1);
  }

  & .footer-copyright {
    padding: 0 1em;
  }

  @media (max-width: 568px) {
    & .footer-logo h1 {
      font-size: 1.8rem;
    }

    & .footer-logo p {
      font-size: 0.8rem;
    }

    & .footer-links p {
      line-height: 1;
    }

    .footer-content {
      display: flex;
      gap: 1em;
      padding: 0.5em 1em;
    }

    & .footer-logo {
      flex: 1;
    }
    & .footer-links {
      flex: 1;
    }
  }
`;
