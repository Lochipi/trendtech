import { StyledAbout } from "./styles/About.styled";

function About() {
  return (
    <StyledAbout>
      <div className="about">
        <h2>Our Story</h2>
        <div className="about-top"></div>
        <div className="img-about"></div>
        <div>
          <h1>All about us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facilis maxime assumenda labore sapiente accusamus laboriosam error
            blanditiis ea natus similique illo architecto distinctio, ut, atque
            placeat eligendi itaque obcaecati.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
