import "./App.scss";
import Home from "../src/pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Watch from "./pages/Watch/Watch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = true;

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/Movies" element=<Home type="Movies" /> />
            <Route path="/tvShows" element=<Home type="TV Shows" /> />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
