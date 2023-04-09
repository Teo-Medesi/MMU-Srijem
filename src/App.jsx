import React, {createContext, useState} from "react";
import Home from "./pages/home";
import "./assets/css/main.scss"
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import SignIn from "./pages/SignIn";
import Protected from "./components/Protected";
import { auth } from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import Test from "./pages/Test";
import WebPlayer from "./pages/WebPlayer";

export const UserContext = createContext();
export const LanguageContext = createContext();

const App = () => {
  const [user, setUser] = useState(0);
  const [lang, setLang] = useState("croatian");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
    else {
      setUser(null);
    }
  });
  
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <LanguageContext.Provider value={[lang, setLang]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Protected><Admin /></Protected>} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/test" element={<Test />} />
            <Route path="/web-player" element={<WebPlayer />} />
          </Routes>
        </LanguageContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
