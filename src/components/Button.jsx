import React from "react";

function Button({title, className}){
    return (
        <div>
            <button className={className}>{title}</button>
        </div>
    )
}

export default Button;