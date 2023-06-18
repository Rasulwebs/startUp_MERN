/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Router from "./router/Router";
import context from "./context/context";
function App() {
  const [count, setCount] = useState(0);
  const [register, setRegister] = useState({})
  return (
    <>
      <context.Provider value={{register , setRegister}}>
        <main>
          <Router />
        </main>
      </context.Provider>
    </>
  );
}

export default App;
