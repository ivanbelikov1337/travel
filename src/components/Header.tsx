import logo from "../assets/Logo.png"
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.ts"
import {removeUser} from "../redux/slices/userSlice.ts"
import {useAppDispatch} from "../hooks/reduxHooks.ts";

const Header = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch()
    return (
        <header className="flex mt-[35px]">
            <Link to="/" className="w-full">
                <img src={logo} alt="logo"/>
            </Link>
            <div className="flex gap-[35px]">
                <nav className="flex gap-[35px] items-center">
                    <Link to="/">Home</Link>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/about">About</Link>
                    <Link to="/partner">Partner</Link>
                </nav>
                {isAuth ? (
                        <div className="flex gap-1">
                            <p className="flex justify-center items-center">{email}</p>
                            <button className="w-[100px] flex justify-center items-center   h-[60px] text-orange"
                                    onClick={() => dispatch(removeUser())}
                            >
                                Log out
                            </button>
                        </div>
                    )
                    :
                    <div className="flex gap-[16px]">
                        <Link to="/login"
                              className="w-[130px] flex justify-center items-center border border-orange  rounded-[8px] h-[60px] text-orange">Login
                        </Link>
                        <Link to="/register"
                              className="w-[130px] flex justify-center items-center text-white rounded-[8px] h-[60px] bg-orange">Register
                        </Link>
                    </div>
                }

            </div>

        </header>
    );
};

export default Header;