import React from "react";
import Add from "./Add.js";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVaraibles from "./StringStateVaraibles";
import DateStateVariable from "./DataStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
import ReduxExamples from "./ReduxExamples";
import TodoList from "../a4/ReduxExamples/todos/TodoList";

function Assignment4() {
    function sayHello() {
        //alert("Hello");
    }

    return (
        <>
            <h1>Assignment 4</h1>
            <ReduxExamples/>
            <Add a={1} b={2} />
            <ClickEvent/>
            <PassingDataOnEvent/>
            <PassingFunctions theFunction={sayHello()}/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVaraibles/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ParentStateComponent/>
            <ChildStateComponent/>
            <TodoList/>
        </>
    );
};

export default Assignment4;