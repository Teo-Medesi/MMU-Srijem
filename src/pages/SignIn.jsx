import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Footer from "../components/Footer"
import { auth } from "../firebase.config";
import "../assets/css/SignIn.scss"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(0);
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user != null && user !== 0)
    {
      navigate("/admin");
    }
  }, [user]);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((user) => {
      setIsValid(true);
      setUser(user);
      navigate("/admin");

    }).catch((error) => {
      setIsValid(false);
      console.error(error);
    })    
  }
  
  return (
    <>
      <div className="container">
        <section>
          <div className="signIn">
            <h1>Sign In</h1> 

            <div>
              <h3>Email</h3>
              <input onChange={event => setEmail(event.target.value)} type="text" />
            </div>
            
            <div>
              <h3>Password</h3>
              <input onChange={event => setPassword(event.target.value)} type="password" />
            </div>

            <h3 className={"error-text" + ((isValid || isValid === 0) ? " hidden" : "")}>Invalid email or password.</h3>

          </div>


          <button onClick={handleSignIn}>Sign In</button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default SignIn