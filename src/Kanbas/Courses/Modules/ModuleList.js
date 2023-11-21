import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import "./home.css";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";
function ModuleList() {

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };


    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();



    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button className={"add-button"} onClick={handleAddModule}>Add</button>
                <button className={"update-button"} onClick={() => handleUpdateModule}>
                    Update
                </button>
                <div className={"input-boxes"}>
                <label htmlFor={"new-name"}>Title</label>
                <input id={"new-name"} className={"title-input"} value={module.name}
                       onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                    <br/>
                <label for={"new-description"}>Description</label>
                <textarea id={"new-description"} className={"description-input"} value={module.description}
                          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
                </div>
            </li>

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <h3>{module.name}</h3>
                            <p>{module.description}</p>
                            <button className={"delete-button"}
                                onClick={() => handleDeleteModule(module._id)}>
                                Delete
                            </button>
                            <button className={"edit-button"}
                                onClick={() => dispatch(setModule(module))}>
                                Edit
                            </button>


                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;