import {Header} from "../../components";
import Footer from "../Main/components/Footer/Footer";
import LogBlock from "./components/LogBlock/LogBlock";

const LoginPage = () => {
    return (
        <div className="container">
            <Header/>
            <LogBlock/>
            <Footer/>
        </div>
    );
};

export default LoginPage;