import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import CreateListing from "./Pages/CreateListing";
import SearchResultListing from "./Pages/SearchResultListing";
import MyListing from "./Pages/MyListing";
import AboutListing from "./Pages/AboutListing";
import UpdateListing from "./Pages/UpdateListing";
import Contact from "./Pages/Contact";

function App() {
  
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <>
              <Route  path="/" element={<Home />} />
              <Route  path="/profile" element={<Profile />} />
              <Route  path="/create" element={<CreateListing />} />
              <Route  path="/search" element={<SearchResultListing />} />
              <Route  path="/contact/:id/:id" element={<Contact />} />
              <Route  path="/my-listings" element={<MyListing />} />
              <Route  path="/about/:id" element={<AboutListing />} />
              <Route  path="/update-listing/:id" element={<UpdateListing />} />
              
              <Route  path="/sign-in" element={<Login />} />
              <Route  path="/register" element={<Register />} />
            </>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  export default App;
  