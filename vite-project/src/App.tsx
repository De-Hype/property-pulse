import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";

function App() {
  
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <>
              <Route  path="/" element={<Home />} />
              <Route  path="/sign-in" element={<Login />} />
              <Route  path="/register" element={<Register />} />
            </>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default App;
  