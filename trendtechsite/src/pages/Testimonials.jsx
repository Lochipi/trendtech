import TestimonialCard from "../components/TestimonialCard";
import { TestimonialStyled } from "./styles/Testimonial.styled";

function Testimonials() {
  return (
    <TestimonialStyled>
      <div className="content">
        <h1>Testimonials page</h1>
        <div className="testi-card">
          <TestimonialCard />
        </div>
      </div>
    </TestimonialStyled>
  );
}

export default Testimonials;
