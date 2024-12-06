import Meteo from "./Meteo";
import { Col, Card, Button } from "react-bootstrap";

const SingleMeteoCard = (props) => {
  return (
    <>
      <Col sm={12} md={8} lg={4} className=" d-flex">
        <Card className="justify-content-center d-flex my-5">
          <Card.Img
            variant="top"
            src="https://www.ilmeteo.it/portale/files/giornale/medium/prossime-ore-070823.jpg"
          />
          <Card.Body>
            <Card.Title>{props.SingleMeteoCard.name}</Card.Title>
            <Card.Text>Vento: {props.SingleMeteoCard.wind?.speed}m/s</Card.Text>
            <Card.Text>
              Temperatura percepita:
              {(props.SingleMeteoCard.main?.temp - 273.15).toFixed(1)}°
            </Card.Text>
            <Button variant="primary">Dettagli</Button>
          </Card.Body>
        </Card>
      </Col>
      {/* <Col sm={12} md={8} lg={4} className=" d-flex">
        <Card className="justify-content-center d-flex my-3">
          <Card.Img
            variant="top"
            src="https://www.ilmeteo.it/portale/files/giornale/medium/prossime-ore-070823.jpg"
          />
          <Card.Body>
            <Card.Title>{props.MeteoList.name}</Card.Title>
            <Card.Text>Vento: {props.MeteoList.wind.speed} KM/H </Card.Text>
            <Card.Text>
              Temperatura: {(props.MeteoList.main.temp - 273.15).toFixed(1)}°{" "}
            </Card.Text>
            <Button variant="primary">Dettagli</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={8} lg={4} className=" d-flex">
        <Card className="justify-content-center d-flex my-3">
          <Card.Img
            variant="top"
            src="https://www.ilmeteo.it/portale/files/giornale/medium/prossime-ore-070823.jpg"
          />
          <Card.Body>
            <Card.Title>{props.MeteoList.name}</Card.Title>
            <Card.Text>Vento: {props.MeteoList.wind.speed} KM/H </Card.Text>
            <Card.Text>
              {" "}
              Temperatura: {(props.MeteoList.main.temp - 273.15).toFixed(
                1
              )}°{" "}
            </Card.Text>
            <Button variant="primary">Dettagli</Button>
          </Card.Body>
        </Card>
      </Col> */}
    </>
  );
};

export default SingleMeteoCard;
