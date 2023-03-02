import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App"
import "../assets/css/protected.scss"

const Protected = ({ children }) => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    if (user != null) {
        return children;
    }
    else {
        return (
            <>
                <div className="container">
                    <div>
                        <h1>Access restricted</h1>
                        <h3>You do not possess the privileges required to access this website.</h3>
                    </div>
                    <button onClick={() => navigate("/") }>Go back</button>
                </div>
                <footer>
                    <p>MMU Srijem 2023</p>
                </footer>
            </>
        )
    }

}

export default Protected