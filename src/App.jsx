/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import Router from "./router/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Router />
      </main>
    </>
  );
}

export default App;
