import { Link } from "react-router-dom";

function Adminnav(){
    return(
        <nav>
            <Link to="dash">Dashboard</Link>
            <Link to="userdetails">User Detail</Link>
            <Link to="setting">Settings</Link>
        </nav>
    )
}

export default Adminnav