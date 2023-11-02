import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css";
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            {/*<h1>Dashboard</h1>*/}
            {/*<div className="list-group">*/}
            {/*    {courses.map((course) => (*/}
            {/*        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">*/}
            {/*            {course.name}*/}
            {/*        </Link>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="page-label row">
                Dashboard
            </div>
            <hr/>
            <div className="page-subtitle row">
                Published Courses (7)
            </div>
            <hr/>
            <div className={"card-list row d-flex flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xlg-4"}>
                {courses.map((course) =>
                    <Link key={course._id} to={`../../Kanbas/Courses/${course._id}`}>
                        <div className="col card-pad">
                            <div className="card w-250">
                                <div className="card-header card-header-4"></div>
                                <div className="card-body">
                                    <h5 className="card-title">CS4728 Web Dev</h5>
                                    <p className="card-text">Website will be made soon.</p>
                                </div>
                            </div>
                        </div>
                    </Link>)}
            </div>
        </div>
    );
}
export default Dashboard;