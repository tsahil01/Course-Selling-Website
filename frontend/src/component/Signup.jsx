import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { BACKENDURL } from "../../shared/urls";
import { useSetRecoilState } from "recoil";
import { isLogin } from "../store/atoms/isLoginAtom";
import Loader from "./Loader";
import { userDetails } from "../store/atoms/userAtom";

export default function SignUpPage(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const login = useSetRecoilState(isLogin)
    const user = useSetRecoilState(userDetails)
    const [loading, setLoading] = useState(false)

    const RegisterUser = async () => {
        setLoading(true);
        const fetchData = await fetch(`${BACKENDURL}/user/createUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email:username,
                password,
                role: "learner"
            })
        })

        const response = await fetchData.json();
        if(response.token){
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            login(true);
            user(response.user);
            navigate('/')
        } else{
            setLoading(false);
            alert(response.msg)
        }
        console.log(response);
    };


    return<>
    <div className="h-screen flex items-center justify-center bg-slate-800 overflow-auto">
        { loading ? <Loader/> : (

            <div className="border- m-5 p-5 md:px-9 bg-slate-900 rounded-lg border-slate-900 lg:w-1/3 text-white">
            <div className="flex justify-center pb-5">
                <div className="font-bold text-4xl">Sign Up</div>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Enter your information to create a account</div>
            </div>
            
            <div className="my-7">
                <div className="font-bold text-xl">First name</div>
                <input required type="text" name="" id="fname" placeholder="John" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300"
                onChange={(e)=>setFirstname(e.target.value)}/>
            </div>
            <div className="my-7">
                <div className="font-bold text-xl">Last name</div>
                <input required type="text" name="" id="lname" placeholder="Cena" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" 
                onChange={(e)=>setLastname(e.target.value)}/>
            </div>
            <div className="my-7">
                <div className="font-bold text-xl">Username/Email</div>
                <input required type="email" name="" id="username" placeholder="johncena@exampl.com" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" 
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="my-7">
                <div className="font-bold text-xl">Password</div>
                <input required type="password" name="password" id="" placeholder="" className="w-full rounded-lg bg-slate-800 p-3 mt-2 outline-none border-slate-300" 
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="mt-7 mb-3">
                <button className="w-full rounded-lg bg-white text-black p-2 mt-2 outline-none border-slate-300 font-bold text-2xl" 
                onClick={RegisterUser}
                >Sign Up</button>
            </div>
            <div className="flex justify-center">
                <div className="content-center">Already have account? <button className="underline" onClick={()=>navigate('/signin')}>Link</button></div>
            </div>
        </div>
    )}
    </div>
    </>
}