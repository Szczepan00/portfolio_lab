import {
    Routes,
    Route
} from "react-router-dom";
import { Home } from "./components/home/Home";
import {LoginForm} from "./components/home/LoginForm";
import {RegisterForm} from "./components/home/RegisterForm";

function App() {
  return (
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="logowanie" element={<LoginForm />} />
              <Route path="rejestracja" element={<RegisterForm />} />
          </Routes>
  );
}

export default App;
