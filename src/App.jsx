import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>la ruta no existe</h1>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App">
<NavBar>
  <ItemListContainer />
  <ItemDetailContainer />
</NavBar>
</div> */
}

// const navigate = useNavigate()  para navegar a cualquier url desde cualquier parte del codigo
