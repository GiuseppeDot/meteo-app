import { Card } from "react-bootstrap";

const CustomFooter = () => {
  return (
    <Card className="text-center custom-color border-0">
      <Card.Text className="custom-color text-white mb-0">
        Controlla le previsioni!
      </Card.Text>
      <Card.Body className="custom-color text-white">
        <Card.Title>Il Meteo</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomFooter;
