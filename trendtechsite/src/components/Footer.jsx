import { FooterStyled } from "./styles/Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-content">
        <div className="footer-logo">
          <h1>TrendTech Innovations</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Dolores,
            soluta?
          </p>
        </div>
        <div className="footer-links">
          <p>
            <a href="#">Home</a>
          </p>
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Shop With us</a>
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>All rights reserved @2023</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
