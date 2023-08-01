
import { Button } from "../components/styles/Button.styled"
import { HeroStyled } from "./styles/Hero.styled"

function Hero() {
  return (

    <HeroStyled>
      <div className="hero--content">
        <h2>Trend Tech</h2>
        <hr />
 
        <h1>Productivity <br /> tools that work</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi deserunt, assumenda placeat sed autem ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga est, labore a, numquam atque accusantium hic repellat enim quidem eligendi nisi, eius corporis vel dolore distinctio dolorum molestias quo laborum. Dignissimos, ut ullam.</p>
        <Button color="black">
          Learn More
        </Button>
      </div>
      <div className="hero--img"></div>
    </HeroStyled>
  )
}

export default Hero
