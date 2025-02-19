import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext"
export const Appbar = () => {

    const user =useContext(UserContext)
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
            Medium
        </Link>
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn bg-green-700 text-white btn-circle hover:bg-green-900  m-1">{user.email.toUpperCase().split("")[0]||"U"}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow">
                    <li><a>Profile</a></li>
                    <li><a>My blogs</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
        </div>
    </div>
}