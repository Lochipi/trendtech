import { styled } from "styled-components";

export const StyledCard = styled.div`
  max-width: 300px;
  max-height: 350px;
  color: #dfd9c9;

  .card--content {
    text-align: center;
  }

  .card--content h3,
  .card--content p {
    margin: 0.5em 0 0 0;
  }

  .card--img {
    height: 200px;
    cursor: pointer;
  }

  .card--img img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    background-position: center;
  }
`;

// background: blue url(./home.jpg);
// background-position: center;
// background-size: cover;
