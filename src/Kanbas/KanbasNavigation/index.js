import { Link, useLocation } from "react-router-dom";
import "./sidebar.css"
import "../vendors/fontawesome/assets/css/all.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    //const classes = ["fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom"];
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;