import {useState} from "react";
interface IProps {
    title: string,
    handleClick: (email:string, pass:string) => void
}

const Form = ({title, handleClick}:IProps) => {
    const [email,setEmail] = useState("")
    const [pass, setPass] = useState("")
    return (
        <div className="flex gap-8 flex-col justify-center items-center">
            <input type="email"
                   value={email }
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-[300px] hover:cursor-pointer h-[60px] p-5  border text-[19px] rounded-2xl border-orange"
                   placeholder="email"
            />
            <input type="password"
                   value={pass }
                   onChange={(e) => setPass(e.target.value)}
                   className="w-[300px] hover:cursor-pointer h-[60px] p-5  border text-[19px] rounded-2xl border-orange"
                   placeholder="password"
            />
            <button className="hover:text-black hover:bg-white hover:border-orange text-[19px] text-white border w-[300px] h-[60px] rounded-2xl bg-orange"
                    onClick={() => handleClick(email,pass)}>
                {title}
            </button>
        </div>
    );
};

export default Form;