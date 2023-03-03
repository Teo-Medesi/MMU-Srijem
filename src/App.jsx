import React, {createContext, useState} from "react";
import Home from "./pages/home";
import "./assets/css/main.scss"
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import Protected from "./components/Protected";

export const UserContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [lang, setLang] = useState("croatian");
  
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={lang}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Protected><Admin /></Protected>} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
