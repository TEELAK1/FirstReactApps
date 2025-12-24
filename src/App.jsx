import Weather from "./components/weather";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

<HashRouter>
  <Routes>
    <Route path="/" element={<Weather />} />
  </Routes>
</HashRouter>

function App() {
  return (
    <div>
      <h1>React Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
