import Header from "components/Header";
import TodoListFeature from "features/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoListFeature />
    </div>
  );
}

export default App;
