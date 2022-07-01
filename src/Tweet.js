import React from "react";

export const Tweet = ({str}) => {
    return (
        <>
        <div className="tweet">
            <p>{str}</p>
            <button onClick={() => {navigator.clipboard.writeText(str)}} className="">Copy</button>
        </div>
        </>
    )
}

export default Tweet;