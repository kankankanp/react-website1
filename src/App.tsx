import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { useState } from "react";
import { Title } from "./components/Title";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log(API_KEY);

const END_POINT = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("");
  const [resultFront, setResultFront] = useState({
    description: "",
    icon: "",
    id: "",
    main: "",
  });
  const [resultBack, setResultBack] = useState({
    temp: "",
    temp_max: "",
    temp_min: "",
    humidity: "",
  });

  const fetchUrl = `${END_POINT}?q=${city}&units=metric&appid=${API_KEY}`;

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchData = async () => {
      const request = await fetch(fetchUrl).then((res) => res.json());
      // console.log(request.weather[0]);
      console.log(request.name);
      const dataFront = request.weather[0];
      const dataBack = request.main;
      const dataCity = request.name;
      setResultFront({ ...dataFront, city: dataCity });
      setResultBack({
        temp: dataBack.temp,
        temp_max: dataBack.temp_max,
        temp_min: dataBack.temp_min,
        humidity: dataBack.humidity,
      });
    };
    fetchData();
    setCity(city);
  };

  return (
    <>
      <Title />
      <Form
        getWeather={getWeather}
        setCity={setCity}
        setResultFront={setResultFront}
      />
      <Result resultFront={resultFront} resultBack={resultBack} city={city} />
    </>
  );
}

export default App;
