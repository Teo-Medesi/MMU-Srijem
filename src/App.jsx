import React, {createContext, useState} from "react";
import Home from "./pages/home";
import "./assets/css/main.scss"
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";
import Protected from "./components/Protected";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState("croatian");
  
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Protected><Admin /></Protected>} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
