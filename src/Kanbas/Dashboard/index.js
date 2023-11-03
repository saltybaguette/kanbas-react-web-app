import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css";
import {React, useState} from "react";
import {deleteTodo, setTodo} from "../../Labs/a4/ReduxExamples/todos/TodosReducer";
function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }) {
    return (
        <div>
            <div className="page-label row">
                Dashboard
            </div>
            <hr/>
            <div className="page-subtitle row">
                Published Courses (7)
            </div>
            <hr/>
            <div className={"row add-row"}>
                <button className={"add-button"} onClick={addNewCourse}>Add</button>
                <button className={"update-button"} onClick={updateCourse}>Update</button>
                <input value={course.name} className="form-control"
                       onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <input value={course.number} className="form-control"
                       onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                <input value={course.startDate} className="form-control" type="date"
                       onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
                <input value={course.endDate} className="form-control" type="date"
                       onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            </div>
            <div className={"card-list row d-flex flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xlg-4"}>
                {courses.map((course) =>
                    <div className={"card-button-group"}>
                    <Link key={course._id} to={`../../Kanbas/Courses/${course._id}`}>
                        <div className="col card-pad">
                            <div className="card w-250">
                                <div className="card-header-4"></div>
                                <div className="card-body">
                                    <h2 className="card-title">{course.name}</h2>
                                    <p className="card-text">Start date: {course.startDate}</p>
                                    <p className="card-text">End date: {course.endDate}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                        <div className={"button-pair"}>
                            <button className={"delete-button"}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);}}>
                                Delete </button>
                            <button className={"edit-button"}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);}}>
                                Edit </button>
                        </div>
                    </div>)}

            </div>
        </div>
    );
}
export default Dashboard;