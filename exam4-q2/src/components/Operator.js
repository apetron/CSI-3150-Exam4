import React from "react";

function Operator(props) {
    return (
        <button type="button" className="operator" value={props.value} onClick={() => props.click(props.value)}>
            {props.display}
        </button>
    );
}

export default Operator;
