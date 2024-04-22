import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import ErrorPage from "./Pages/ErrorPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { Toaster } from "sonner";
import About from "./Pages/About";
import Store from "./Pages/Store";

function App() {
  return (
    <div className="App relative   ">
      <Toaster
        position="top-center"
        toastOptions={{
          unstyled: true,
          // classNames: {
          //   error:
          //     "bg-red-400 text-white px-4 py-2 rounded-xl flex items-center gap-2",
          //   success:
          //     "bg-green-400 text-white px-4 py-2 rounded-xl flex items-center gap-2",
          //   info: "bg-blue-400 text-white px-4 py-2 rounded-xl flex items-center gap-2",
          //   warning:
          //     "bg-blue-400 text-white px-4 py-2 rounded-xl flex items-center gap-2",
          // },
        }}
      />
      <Router>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about/:id" element={<AboutListing />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create" element={<CreateListing />} />
              <Route path="/search" element={<SearchResultListing />} />
              <Route path="/contact/:id/:id" element={<Contact />} />
              <Route path="/my-listings" element={<MyListing />} />
              <Route path="/update-listing/:id" element={<UpdateListing />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
