import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./actions/listActions";

function App() {
  // #7 - use redux on app
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      {list.data.map((data) => (
        <div>{data.data}</div>
      ))}
    </div>
  );
}

export default App;
