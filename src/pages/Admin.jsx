import { useContext, useState } from "react"
import { UserContext } from "../App"
import profile from "../assets/svgs/profile.svg"
import "../assets/css/admin.scss"
import { useNavigate } from "react-router-dom"
import Archive from "./Archive"
import Blog from "./Blog"
import Account from "./Account"

const ActiveTab = ({activeTab}) => {
  switch(activeTab) {
    case "Archive": return <Archive />
    case "Blog": return <Blog />
    case "Account": return <Account />
  }
}

const Admin = () => {
  const [user, setUser] = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("Archive");

  const navigate = useNavigate();
  
  return (
    <div className="admin">
      <aside>
        <div className="profile">
          <h1>{user.email}</h1>
        </div>

        <ul>
          <li onClick={() => setActiveTab("Archive")} className={(activeTab ==="Archive") ? "activeTab" : ""}>Archive</li>
          <li onClick={() => setActiveTab("Blog")} className={(activeTab === "Blog") ? "activeTab" : ""}>Blog</li>
          <li onClick={() => setActiveTab("Account")} className={(activeTab === "Account") ? "activeTab" : ""}>Account</li>
        </ul>

        <button onClick={() => navigate("/")}>Go Back</button>

      </aside>
      
      <section className="tab">
        <ActiveTab activeTab={activeTab}/>
      </section>  
    </div>
  )
}

export default Admin    