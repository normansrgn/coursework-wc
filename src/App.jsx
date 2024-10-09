import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
