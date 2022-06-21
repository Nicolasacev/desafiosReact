//import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar"  
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar/>
      {/* <ItemListContainer gretting="Productos"/> */}
      <ItemDetailContainer/>
      <Footer/>
    </>
  )
}

export default App;

