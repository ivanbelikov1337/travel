import {Link} from "react-router-dom";
import Login from "../components/Login.tsx";

const LoginPage = () => {
    return (
        <section className="text-center mt-[60px]">
            <h1 className="text-[35px] p-10">Login</h1>
            <Login/>
            <p className="p-6 text-[19px]">Or <Link to="/register">register</Link></p>
        </section>
    );
};

export default LoginPage;