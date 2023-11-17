import { styled } from "styled-components";

export const StyledAbout = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #202328;
  margin: 0;
  padding: 0;

  .about {
    z-index: 0;
    position: relative;
  }

  h2 {
    margin: 0;
    z-index: 1;
    position: absolute;
    top: 5%;
    font-weight: 700;
    font-size: 2em;
    color: #fff;
    text-align: center;
    width: 100%;

  }

  .about-top {
    height: 30vh;
    background: #202328);
  }

  .img-about {
    height: 50vh;
    width: 50%;
    margin: 0 auto;
    position: relative;
    top: -15vh;
    background: #202328 url(/about.jpg) no-repeat center;);
    object-fit: cover;
    background-position: center;
  }

  h2 {
    font-weight: 700;
    font-size: 2em;
    color: #fff;
    text-align: center;
    width: 100%;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-weight: 700;
    font-size: 2em;
    color: #fff;
  }

  p{
    text-align: center;
  }

  @media (max-width: 568px) {
    p {
      line-height: 1.5em;
      font-size: 0.8em;
    }
  }
`;
