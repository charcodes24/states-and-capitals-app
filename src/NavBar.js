import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/funfacts">Fun Facts</NavLink>
        </div>
    )
}