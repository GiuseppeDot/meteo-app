import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import { Container, Row } from "react-bootstrap";
import Meteo from "./components/Meteo";

function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar />
      </header>
      <main className="custom-size">
        <Container>
          <Row className=" justify-content-center">
            <Meteo />
          </Row>
        </Container>
      </main>
      <footer>
        <CustomFooter />
      </footer>
    </div>
  );
}

export default App;
