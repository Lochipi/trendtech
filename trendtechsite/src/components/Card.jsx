import prodData from "../assets/data";
import { StyledCard } from "../components/styles/Card.styled";

function Card() {
  return (
    <div>
      {Object.values(prodData).map((product) => {
        return (
          <div>
            <StyledCard>
              <div className="card--img">
                <img src={product.imgUrl} alt="" />
              </div>
              <div className="card--content">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
              </div>
            </StyledCard>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
