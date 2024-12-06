import { useState } from "react";
import CustomNavbar from "./CustomNavbar";

const Search = () => {
  const [query, setQuery] = useState("Sicilia");

  const MeteoDiOggiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=96cd3c350ed65319a5cc5029ba9ae34c";

  setQuery((query) => {});
};
