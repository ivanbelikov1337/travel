import {setUser} from "../redux/slices/userSlice.ts"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import Form from "./Form.tsx";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {useAuth} from "../hooks/useAuth.ts";


const Login = () => {
    const {isAuth} = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate("/")
            } )
            .catch(() => alert("Invalid user"))
    }
    if  (isAuth) navigate("/")
    return (
        <Form title="sign in" handleClick={handleLogin}/>
    );
};

export default Login;