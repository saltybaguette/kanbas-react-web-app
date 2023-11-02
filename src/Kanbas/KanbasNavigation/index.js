import { Link, useLocation } from "react-router-dom";
import "./sidebar.css"
import "./index.css"
import "../vendors/fontawesome/assets/css/all.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    //const classes = ["fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom","fa-regular fa-2x fa-question-circle wd-margin-bottom"];
    const { pathname } = useLocation();
    return (

        // <div className="list-group" style={{ width: 150 }}>
        //     {links.map((link, index) => (
        //         <Link
        //         key={index}
        //         to={`/Kanbas/${link}`}
        //         className={`list-group-item ${pathname.includes(link) && "Active"}`}>
        //
        //             {link}
        //
        //         </Link>
        //
        //     ))}
        // </div>
            <div className="col-md-1 wd-sidebar">
                <div>
                    <Link to={`/Kanbas`}><img src="../../nulogo.png"
                                                className="card-img-top" alt="..."/></Link>
                </div>

                <ul className="wd-menu-list">
                    <li className="wd-list-item-selected">
                        <Link to={""}>
                            <div className="menu-item-icon-container-account-selected">
                                <i className="fa-regular fa-2x fa-circle-user wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text-selected">
                                Profile
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={`/Kanbas/Dashboard`}>
                            <div className="menu-item-icon-container">
                                <i className="fa-solid fa-2x fa-gauge wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                Dashboard
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={`/Kanbas/Courses/RS101/Home`}>
                            <div className="menu-item-icon-container">
                                <i className="fa-solid fa-2x fa-book wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                Courses
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={``}>
                            <div className="menu-item-icon-container">
                                <i className="fa-solid fa-2x fa-calendar-day wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                Calendar
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={``}>
                            <div className="menu-item-icon-container">
                                <i className="fa-solid fa-2x fa-inbox wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                Inbox
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={``}>
                            <div className="menu-item-icon-container">
                                <i className="fa-solid fa-2x fa-clock wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                History
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={``}>
                            <div className="menu-item-icon-container">
                                <i className="fa-solid fa-2x fa-computer wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                Studio
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={``}>
                            <div className="menu-item-icon-container">
                                <i className="fa-solid fa-2x fa-circle-right wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                Commons
                            </div>
                        </Link>
                    </li>


                    <li className="wd-list-item">
                        <Link to={``}>
                            <div className="menu-item-icon-container">
                                <i className="fa-regular fa-2x fa-question-circle wd-margin-bottom"></i>
                            </div>
                            <div className="menu-item-text">
                                Help
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
    );
}
export default KanbasNavigation;