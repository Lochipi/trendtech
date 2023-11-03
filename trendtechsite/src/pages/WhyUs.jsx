import WhyCard from "../components/WhyCard";
import { WhyUsStyled } from "./styles/WhyUs.styled";
function WhyUs() {
  return (
    <div>
      <WhyUsStyled>
        <h1 className="why-title">Why Choose Us</h1>
        <WhyCard />
      </WhyUsStyled>
    </div>
  );
}

export default WhyUs;
