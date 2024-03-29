import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BACKENDURL } from "../../shared/urls";
import { useSetRecoilState } from "recoil";
import { isLogin } from "../store/atoms/isLoginAtom";
import Loader from "./Loader";
import { userDetails } from "../store/atoms/userAtom";

export default function SignInPage(){

    const navigate = useNavigate();
    const login = useSetRecoilState(isLogin)
    const user = useSetRecoilState(userDetails)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signInUser = async () =>{
        setLoading(true)
        const res = await fetch(`${BACKENDURL}/user/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:username,
                password
            })
        });
        
        const data = await res.json();
        if(data.token){
            user(data.user)
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            login(true);
            navigate('/');
        } else{
            alert(data.msg)
            setLoading(false)
        }
    }
    return<>
    <div className="flex items-center justify-center bg-slate-800 overflow-auto min-h-screen">
        {loading ? <Loader/> : (
            <div className="border- m-5 p-5 md:px-9 bg-slate-900 rounded-lg border-slate-900 lg:w-1/3 text-white">
            <div className="flex justify-center pb-5">
                <div className="font-bold text-4xl">Sign In</div>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Enter your information to access your account</div>
            </div>
            
           
            <div className="my-7">
                <div className="font-bold text-xl">Username/Email</div>
                <input type="email" name="" id="username" placeholder="johncena@exampl.com" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" 
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>

            <div className="my-7">
                <div className="font-bold text-xl">Password</div>
                <input type="password" name="" id="password" placeholder="" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>

            <div className="mt-7 mb-3">
                <button className="w-full rounded-lg bg-white text-black p-2 mt-2 outline-none border-slate-300 font-bold text-2xl"
                onClick={signInUser}>Sign In</button>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Don't have an Account? <button className="underline" onClick={()=>navigate('/signup')}>Create account</button></div>
            </div>
        </div>
    )}
    </div>
    </>
}