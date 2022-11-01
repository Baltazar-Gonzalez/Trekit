import React from "react"

function Button({color, bgColor, text, borderRadius, size}){
    return (
        <button type="button" style={{ backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-x1`}>
            {text}
        </button>
    )
}

export default Button