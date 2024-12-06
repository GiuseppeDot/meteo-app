import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleMeteoCard from "../components/SingleMeteoCard";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}
// api key : 96cd3c350ed65319a5cc5029ba9ae34c

const MeteoDiOggiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Sicilia&appid=96cd3c350ed65319a5cc5029ba9ae34c";
const MeteoDiDomaniURL =
  "https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Comiso&appid=96cd3c350ed65319a5cc5029ba9ae34c";

const Meteo = (props) => {
  const [meteo, setMeteo] = useState([null]);
  const [query, setQuery] = useState([null]);
  //   const [error, setError] = useState([null]);

  const getMeteoDIOggi = () => {
    fetch(MeteoDiOggiURL)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE NELLA RECEZIONE DEI DATI");
        }
      })
      .then((PrevisioniMeteoOggi) => {
        console.log(PrevisioniMeteoOggi);
        setMeteo(PrevisioniMeteoOggi);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
  useEffect(() => {
    getMeteoDIOggi();
  }, [props.city]);
  if (!meteo) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return <SingleMeteoCard SingleMeteoCard={meteo} />;
  }

  //   <Meteo meteoInerente={meteo} />

  //   const getMeteoDiDomani = () => {
  //     fetch(MeteoDiDomaniURL)
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         } else {
  //           throw new Error("ERRORE NELLA RECEZIONE DEI DATI");
  //         }
  //       })
  //       .then((PrevisioniMeteoDomani) => {
  //         console.log(PrevisioniMeteoDomani);
  //       })
  //       .catch((errore) => {
  //         console.log("ERRORE", errore);
  //       });
  //   };
  //   getMeteoDiDomani();
};

export default Meteo;
