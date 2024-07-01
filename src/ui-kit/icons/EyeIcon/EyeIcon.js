
const EyeIcon = ({state, setState}) => {
    return (
        <div className="absolute right-5 top-[50%] translate-y-[35%]" onClick={setState}>
            {state ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 3.75027L19.5 20.2503" stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M14.5215 14.7753C13.8333 15.4057 12.9329 15.7538 11.9996 15.7503C11.2427 15.7502 10.5036 15.5211 9.87935 15.0931C9.25512 14.6651 8.77502 14.0582 8.50216 13.3522C8.2293 12.6462 8.17646 11.8742 8.35058 11.1376C8.5247 10.401 8.91764 9.73436 9.47773 9.22528"
                        stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M6.9375 6.43152C3.1125 8.36277 1.5 12.0003 1.5 12.0003C1.5 12.0003 4.5 18.7503 12 18.7503C13.7574 18.7646 15.4929 18.3596 17.0625 17.569"
                        stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M19.5555 15.8534C21.5992 14.0253 22.4992 12.0003 22.4992 12.0003C22.4992 12.0003 19.4992 5.25028 11.9992 5.25028C11.349 5.249 10.6999 5.30231 10.0586 5.40966"
                        stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                    <path
                        d="M12.7031 8.3159C13.5006 8.467 14.2273 8.8734 14.7735 9.47376C15.3198 10.0741 15.6559 10.8359 15.7313 11.644"
                        stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> :
               <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="128" cy="128" fill="none" r="40" stroke="#B5EAEE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
            }
        </div>
    );
};

export default EyeIcon;