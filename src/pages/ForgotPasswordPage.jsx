import React from "react";
import Logo from '../assets/Logo.svg';
import Button from "../components/Button";
import Back from "../assets/backButton.svg";
import VerificationPage from "./VerificationPage";
import { useState } from 'react';
import LoginPage from "./LoginPage";

function ForgotPasswordPage(){
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const [back, setBack] = useState(false);
    const FromLogin = false;
    
    function handleComponent(){
        setIsComponentVisible(true);
    }

    function handleBack(){
        setBack(true);
    }

    return (
        <div>
            {isComponentVisible ? (
                <div>
                    <VerificationPage address={FromLogin}/>
                </div>
            ):back ? (
                <div>
                    <LoginPage />
                </div>
            ):(    
                <div>
                    <div>
                        <div className="absolute p-4 ml-2 cursor-pointer" onClick={handleBack}>
                            <img src={Back} alt="Back Button" className="size-5"/>
                        </div>
                        <div className="flex justify-center p-2">
                            <div className="flex justify-center w-75 h-25 border-1 rounded-lg bg-gray-200 p-2">
                                <img src={Logo} alt="Logo Image" className="size-20"/>
                            </div>
                        </div>
                    </div>
                            
                    <div className="flex justify-center p-2">
                        <div className="flex flex-col -ml-15">
                            <h1 className="flex justify-start font-sans font-bold tracking-wide text-black">Forgot Password</h1>
                            <p className="text-black text-sm">
                                Enter your email address to reset your
                            </p>
                            <p className="flex justify-start text-black text-sm"> 
                                Password.
                            </p>
                        </div>                
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Email</label>
                            <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start px-2 w-75 py-1"/>
                        </div>
                    </div>
                    
                    <div className="flex justify-center p-5 mt-50">
                        <div className="flex flex-col" onClick={handleComponent}>
                            <Button title={"Confirm"} className={"px-30 py-2  rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                        </div>
                    </div>
                    
                </div>
                )
            }
        </div>    
    )
}

export default ForgotPasswordPage;