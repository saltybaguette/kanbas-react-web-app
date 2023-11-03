import {Link, useLocation} from "react-router-dom";

function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className={"nav nav-tabs mb-2"}>
            <Link className={`nav-link`} to={"/Labs/a3"}>A3</Link>
            <Link className={`nav-link`} to={"/Labs/a4"}>A5</Link>
            <Link className={`nav-link`} to={"/Labs/a5"}>A5</Link>
        <Link to="/hello"
              className={`nav-link`}>Hello</Link>
        <Link to="/Kanbas"
              className={`nav-link`}>Kanbas</Link>
        </nav>
    );
}
export default Nav;