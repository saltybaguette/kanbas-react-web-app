import { Link, useParams, useLocation } from "react-router-dom";
import React from "react";
import "./sideBarMenu.css";


function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People",
        "Panopto Video", "Discussions", "Announcements", "Pages", "Files",  "Rubrics", "Outcomes", "Collaborations",
        "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className={"col-md-1 wd-submenu"}>
            <ul className={"wd-submenu"}>
                 {links.map((link,index) => (
                     <li className={`${pathname.includes(link) ? "wd-submenu-list-item-active" : "wd-submenu-list-item"}`}>
                         <Link
                         key={index}
                         to={`/Kanbas/Courses/${courseId}/${link}`}
                         className={`${pathname.includes(link) ? "wd-submenu-item-text-active" : "wd-submenu-item-text"} custom-link`}>
                         {link}
                         </Link>
                     </li>
                 ))}
             </ul>
         </div>

    );
}


export default CourseNavigation;