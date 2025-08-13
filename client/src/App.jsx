// Import the required tools from react-router-dom for navigation
import { Routes, Route } from "react-router-dom";

// Import the page components (these are your different screens)
import Home from "./pages/Home";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css"

// Create the main App component (this is the root of your app)
const App = () => {
  return (
    <div>
      <ToastContainer/>
      {/* Routes contains all the individual pages of your app */}
      <Routes>
        {/* Each Route defines a path (URL) and the component to render */}
        <Route path="/" element={<Home />} /> {/* Show Home page */}
        <Route path="/login" element={<Login />} /> {/* Show Login page */}
      </Routes>
    </div>
  );
};

// Export the App component so it can be used by index.js/main.jsx
export default App;
