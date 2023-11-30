import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import Account from "../users/account";
import UserTable from "../users/table";
import ProjectNav from "../project/projectNav";

function Project() {
    return (
        <div className="row">
            <div className="col-2">
                <Nav/>
            </div>
            <div className={"col-2"}>
                <ProjectNav/>
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path={"/account"} element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;