
import Labs from "./Labs";
import HelloWorld  from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project/index.js";


function App() {
  return (
      //
      // <div>
      //     <HelloWorld/>
      //     <Labs/>
      //     <Kanbas/>
      // </div>
      <HashRouter>
          <div>
              <Routes>
                  <Route path={"/"} element={<Navigate to="/Labs/"/>}/>
                  <Route path={"/project/*"} element={<Project />} />
                  <Route path={"/hello"} element={<HelloWorld/>}/>
                  <Route path={"/Labs/*"} element={<Labs/>}/>
                  <Route path={"/Kanbas/*"} element={<Kanbas/>}/>
              </Routes>
          </div>
      </HashRouter>
  );
}
export default App;
