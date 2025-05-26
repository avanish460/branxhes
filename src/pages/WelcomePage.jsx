import React from "react";
import Logo from '../assets/Logo.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import Button from "../components/Button";

function WelcomePage(){
    return (
        <div>
            <div>
                <div className="flex justify-center p-2">
                    <div className="flex justify-center w-75 h-35 border-1 rounded-lg bg-gray-200">
                        <img src={Logo} alt="Logo Image" className="size-30"/>
                    </div>
                </div>
            
                <div className="flex justify-center p-2">
                    <div className="flex flex-col">
                        <h1 className="font-sans font-bold tracking-wide text-black">Let’s Get Started!</h1>
                        <p className="text-black text-sm">
                            Welcome to your personal family history
                        </p>
                        <p className="text-black text-sm"> 
                            archive. Let's preserve your legacy together.
                        </p>
                    </div>
                    
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col p-5">
                       <button className="bg-white shadow-sm border-1 rounded-full w-80 flex justify-between cursor-pointer">
                            <FcGoogle className="mt-1.5 size-6 ml-2"/>
                            <span className="p-2 mr-20 text-black text-sm">Sign in with Google</span>
                        </button>
                        <button className="bg-white shadow-sm border-1 rounded-full w-80 flex justify-between mt-2 cursor-pointer">
                            <FaApple className="mt-1.5 size-6 ml-2 text-black"/>
                            <span className="p-2 mr-20 text-black text-sm">Sign in with Apple</span>
                        </button> 
                    </div>
                </div>
                <div className="flex justify-center p-10">
                    <div className="flex flex-col">
                        <Button title={"Sign Up"} className={"px-33 py-2  rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                        <Button title={"Sign In"} className={"px-33 py-2  rounded-full bg-emerald-100 text-black cursor-pointer opacity-40 mt-2"}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <span className="text-black text-sm italic">Privacy Policy . Terms of Service</span>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;