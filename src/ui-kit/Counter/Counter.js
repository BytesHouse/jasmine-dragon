import {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(125);
    const handleInc = () => setCount((prev) => prev && (prev -= 5));
    const handleDec = () => setCount((prev) => prev += 5);
    return (
        <div className="flex items-center self-center h-[36px]">
            <button onClick={handleInc} className="w-full h-full">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="remove">
                        <path id="Path 2" d="M17 12H7" stroke="#B5EAEE" strokeLinecap="round"/>
                        <path id="Oval" fillRule="evenodd" clipRule="evenodd"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#B5EAEE"/>
                    </g>
                </svg>
            </button>
            <span className="w-full text-center font-[700] text-[1.5rem]">{count}</span>
            <button onClick={handleDec} className="w-full h-full flex justify-center items-center">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="add">
                        <path id="Path 2" d="M17 12H7" stroke="#B5EAEE" strokeLinecap="round"/>
                        <path id="Path 2_2" d="M12 17V7" stroke="#B5EAEE" strokeLinecap="round"/>
                    <path id="Oval" fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B5EAEE"/>
                </g>
            </svg>
            </button>
        </div>
    );
};

export default Counter;