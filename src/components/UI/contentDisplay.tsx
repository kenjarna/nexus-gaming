import React from 'react';
import "../../styles/contentDisplay.css";
const ContentDisplay = (props:any) => {
    return(
        <div className="contentBox">
            <p>
                CONTENT BOX HERE: currently assigned to {props.name}
            </p>
        </div>
    )
}

export default ContentDisplay