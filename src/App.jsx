import CardListContainer from "./components/CardListContainer";
//import ItemCount from "./components/itemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Greetings"} />
        <div className="mainContainer">
          <CardListContainer />
        </div>
      </div>
    </>
  );
}
export default App;
