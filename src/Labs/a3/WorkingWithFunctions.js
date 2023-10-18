import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesis from "./FunctionParenthesisAndParameters";

function WorkingWithFunctions() {
    return (
        <div>
            <h2>Functions</h2>
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesis/>
        </div>
    );
};
export default WorkingWithFunctions;