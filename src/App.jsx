import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Login from "./components/Login/Login";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  let saludo = "Esto es un saludo";

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
