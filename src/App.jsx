import React from "react";
import Home from "./pages/home";
import "./assets/css/main.scss"

const App = () => {
  const [lang, setLang] = useState("croatian");
  
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
