import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [toggleView, setToggleView] = useState(true)

  function handleToggleView() {
    setToggleView(!toggleView)
  }
    return (
      <div className="navs">
        {toggleView ? (
          <NavLink onClick={handleToggleView} to="/">
            <img src="https://img.icons8.com/ios/50/000000/home--v1.png" />
          </NavLink>
        ) : null}
        {!toggleView ? (
          <NavLink onClick={handleToggleView} to="/funfacts">
            Fun Facts
          </NavLink>
        ) : null}
      </div>
    );
}