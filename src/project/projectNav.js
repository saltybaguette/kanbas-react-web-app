import {Link, useLocation} from "react-router-dom";

function ProjectNav() {
    const { pathname } = useLocation();
    return (
        <nav className={"nav nav-tabs mb-2"}>
            <Link className={`nav-link`} to={"./signin"}>SignIn</Link>
            <Link className={`nav-link`} to={"./account"}>Account</Link>
            <Link className={`nav-link`} to={"./signup"}>SignUp</Link>
        </nav>
    );
}
export default ProjectNav;