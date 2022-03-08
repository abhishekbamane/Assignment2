import "./App.css";
import Form from "./Form/Form";
import { useState } from "react";
import Card from "./Card/Card";

function App() {
  const [data, setData] = useState([]);
  const dataHandler = (d) => {
    setData((prevData) => {
      return [d, ...prevData];
    });
  };

  return (
    <div>
      <Form getData={dataHandler} />
      <Card items={data} />
    </div>
  );
}

export default App;
