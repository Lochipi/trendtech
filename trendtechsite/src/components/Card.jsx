import { StyledCard } from "./styles/card.styled";

function Card(props) {
  return (
    <StyledCard>
      <div className="card--img">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="card--content">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
