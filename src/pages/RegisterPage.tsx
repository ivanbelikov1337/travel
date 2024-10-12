import {Link} from "react-router-dom";
import SignUp from "../components/SignUp.tsx";

const RegisterPage = () => {
    return (
        <section className="text-center mt-[60px]">
            <h1 className="text-[35px] p-10">Register</h1>
            <SignUp/>
            <p className="p-6 text-[19px]">Already have an account? <Link className="hover:text-blue-600" to="/login">Sign in</Link></p>
        </section>
    );
};

export default RegisterPage;