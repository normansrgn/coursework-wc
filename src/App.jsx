import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Promo from "./components/Promo/Promo";

import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Header />
        <main>
          <Promo />
        </main>
      </Container>
    </>
  );
}

export default App;
