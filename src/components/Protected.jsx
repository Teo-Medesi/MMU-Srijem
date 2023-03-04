import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App"
import Footer from "./Footer";
import "../assets/css/protected.scss"

const Protected = ({ children }) => {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    if (user != null && user !== 0) {
        return children;
    }
    else if (user === 0)
    {
        return (
            <div className="loading">
                <span></span>
            </div>
        )
    }
    else {
        return (
            <>
                <div className="restricted-container">
                    <div>
                        <h1>Access restricted</h1>
                        <h3>You do not possess the privileges required to access this website.</h3>
                    </div>
                    <button onClick={() => navigate("/") }>Go back</button>
                </div>
                <Footer />
            </>
        )
    }

}

export default Protected