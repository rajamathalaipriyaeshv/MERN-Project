import { Link, Outlet } from "react-router-dom"
import Adminnav from "../../components/adminnav"

function Admin(){
    return(

        <>
        <Adminnav/>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <Outlet/>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        </>
    )
}

export default Admin