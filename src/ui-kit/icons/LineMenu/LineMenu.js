
const LineMenu = ({state}) => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                fill={state ? '#B5EAEE' : 'none'}
                d="M29.25 20.25H6.75C6.12868 20.25 5.625 20.7537 5.625 21.375V27C5.625 27.6213 6.12868 28.125 6.75 28.125H29.25C29.8713 28.125 30.375 27.6213 30.375 27V21.375C30.375 20.7537 29.8713 20.25 29.25 20.25Z"
                stroke="#2F4A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                fill={state ? '#B5EAEE' : 'none'}
                d="M29.25 7.875H6.75C6.12868 7.875 5.625 8.37868 5.625 9V14.625C5.625 15.2463 6.12868 15.75 6.75 15.75H29.25C29.8713 15.75 30.375 15.2463 30.375 14.625V9C30.375 8.37868 29.8713 7.875 29.25 7.875Z"
                stroke="#2F4A4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default LineMenu;