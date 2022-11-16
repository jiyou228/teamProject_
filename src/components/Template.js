import React from "react";
import "./Template.css"

const Template = ({children, todoLength, dateString, dayName}) => {
    
        return (
            <div className="Template">
                <h1>{dateString}</h1>
                <div className="day">{dayName}</div>
                <div className="title">할 일 {todoLength}개 남음</div>
                <div>{children}</div>
            </div>
        );
};

export default Template;