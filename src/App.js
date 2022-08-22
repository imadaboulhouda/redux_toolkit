import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import { sagaActions } from "./sagas/actions";
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <TodoList />

      <button
        onClick={() => {
          dispatch({ type: sagaActions.FETCH_DATA_SAGA });
        }}
      >
        Fetch Saga
      </button>
    </div>
  );
}

export default App;
