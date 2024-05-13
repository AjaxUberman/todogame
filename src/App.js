import "./App.css";
import ToDos from "./components/TodoSection/ToDos";
import AddItemProvider from "./contexts/AddItemProvider";

function App() {
  return (
    <div className="App">
      <div className="">
        <AddItemProvider>
          <ToDos />
        </AddItemProvider>
      </div>
    </div>
  );
}

export default App;
