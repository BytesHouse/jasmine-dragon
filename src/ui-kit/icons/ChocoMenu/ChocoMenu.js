import React from "react";

const ChocoMenu = ({state}) => {
    return (
        <svg className="hover1" width="36" height="36" viewBox="0 0 36 36" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 6.75H6.75V15.75H15.75V6.75Z" fill={state ? "#B5EAEE" : "#2F4A4C"} stroke="#2F4A4C"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.25 6.75H20.25V15.75H29.25V6.75Z" fill={state ? "#B5EAEE" : "#2F4A4C"} stroke="#2F4A4C"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.75 20.25H6.75V29.25H15.75V20.25Z" fill={state ? "#B5EAEE" : "#2F4A4C"} stroke="#2F4A4C"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.25 20.25H20.25V29.25H29.25V20.25Z" fill={state ? "#B5EAEE" : "#2F4A4C"} stroke="#2F4A4C"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default ChocoMenu;