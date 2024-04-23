import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes
import Navbar from "./components/Navbar";
import "./App.css";
import Phonebook from "./pages/Phonebook";
import Home from "./pages/Home";
// import { useAuth0 } from "@auth0/auth0-react";

function App() {
  // const { isLoadin, user, isAuthenticated } = useAuth0()
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* {!isLoading && !user && ( */}
          <Route path="/" element={<Home />} />
          {/* )} */}
          {/* {!isLoading && user && ( */}
          <Route path="/phonebook" element={<Phonebook />} />
          {/* )} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
