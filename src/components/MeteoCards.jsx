import SingleMeteoCard from "./SingleMeteoCard";
import Meteo from "./Meteo";
import { Container, Row } from "react-bootstrap";

const MeteoCards = (props) => {
  return (
    <Container>
      <Row>
        {props.SingleMeteoCard.map((oneCard) => {
          return <SingleMeteoCard key={oneCard.id} card={oneCard} />;
        })}
      </Row>
    </Container>
  );
};

export default MeteoCards;
