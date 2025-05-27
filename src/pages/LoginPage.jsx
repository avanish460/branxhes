import React from "react";
import Logo from '../assets/Logo.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import Button from "../components/Button";

function LoginPage(){
    return (
        <div>
            <div>
                <div className="flex justify-center p-2">
                    <div className="flex justify-center w-75 h-25 border-1 rounded-lg bg-gray-200 p-2">
                        <img src={Logo} alt="Logo Image" className="size-20"/>
                    </div>
                </div>
                        
                <div className="flex justify-center p-2">
                    <div className="flex flex-col">
                        <h1 className="flex justify-start font-sans font-bold tracking-wide text-black">Let’s Get Started!</h1>
                        <p className="text-black text-sm">
                            Please enter the email address & password
                        </p>
                        <p className="flex justify-start text-black text-sm"> 
                            to login into your account.
                        </p>
                    </div>                
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="Email" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Email</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 py-1"/>
                        <label htmlFor="Password" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Password</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 py-1"/>
                    </div>
                </div>
                <div className="flex justify-end mr-5">
                    <a href="#" className="italic font-bold text-green-800 opacity-70 text-sm">Forget Password?</a>
                </div>
                <div className="flex justify-center p-5">
                    <div className="flex flex-col">
                        <Button title={"Sign In"} className={"px-33 py-2  rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <hr className="border text-gray-400 w-20"/>
                    <span className="ml-2 mr-2 -mt-3 text-black text-sm">Or continue with</span>
                    <hr className="border text-gray-400 w-20"/>
                </div>
                
                <div className="flex justify-center">
                    <div className="flex p-5">
                        <button className="mr-10 bg-white shadow-sm border-1 rounded-full w-25 flex justify-between mt-2 cursor-pointer">
                            <FaApple className="mt-1.5 size-6 text-black ml-4 shadow-xl"/>
                            <span className="p-2 text-black text-sm mr-2">Apple</span>
                        </button>
                        <button className="ml-10 bg-white shadow-sm border-1 rounded-full w-25 flex justify-between mt-2 cursor-pointer">
                            <FcGoogle className="mt-1.5 size-6 ml-3 shadow-xl"/>
                            <span className="p-2 text-black text-sm mr-2">Google</span>
                        </button> 
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-emerald-100 w-75 p-2 opacity-50">
                        <span className="text-black text-sm mr-10">Don’t Have an account?</span>
                        <a href="#" className="italic text-green-600 font-bold text-sm ml-10 ">Register</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default LoginPage;