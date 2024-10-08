import { useState } from "react";
import Counter from "./components/common/counter/Counter";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  const [nombre, setNombre] = useState("Ezequiel");

  let saludo = "hola como estas";

  const cambiarNombre = () => {
    if (nombre === "Ezequiel") {
      setNombre("Tristan");
    } else {
      setNombre("Ban");
    }
  };

  return (
    <div>
      <Navbar />
      {/* <ItemListContainer greeting={saludo} y="2" maria="dasda" /> */}
      {/* <ItemListContainer {greeting:{saludo} y:"2" maria:"dasda"} />   */}
      <Counter />
      <h2>Hola {nombre} </h2>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
}

export default App;
// props = {greeting:{saludo} y:"2" maria:"dasda"}
// props.maria
