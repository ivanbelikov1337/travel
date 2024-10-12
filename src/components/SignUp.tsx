import { useNavigate} from "react-router-dom"
import {getAuth, createUserWithEmailAndPassword, } from "firebase/auth"
import {setUser} from "../redux/slices/userSlice.ts"
import Form from "./Form.tsx";
import {useAppDispatch} from "../hooks/reduxHooks.ts";


const SignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) =>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate("/")
            })
            .catch()
    }
    return (
      <Form title="register" handleClick={handleRegister}/>
    );
};

export default SignUp;