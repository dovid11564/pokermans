import { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route path='/testing'>
        <h1>TEst ROUTE</h1>
      </Route>
      <Route path='/'>
        <h1> Page COunt: {count}</h1>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
