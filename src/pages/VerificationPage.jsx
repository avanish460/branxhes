import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import Button from "../components/Button";
import Back from "../assets/backButton.svg";
import NewPasswordPage from "./NewPasswordPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import LoginPage from "./LoginPage";

function VerificationPage({address}){
    const [passwordComponent, setPasswordComponent] = useState(false);
    const [back, setBack] = useState(false);

    function handlePasswordComponent(){
        setPasswordComponent(true);
    }

    function handleBack(){
        setBack(true);
    }

    return (
        <div>
            {passwordComponent && !address ? (
                <div>
                    <NewPasswordPage />
                </div>
            ):passwordComponent && address ? (
                <div>
                    <LoginPage />
                </div>
            ): back ? (
                <div>
                    <ForgotPasswordPage />
                </div>
            ):(
            <div>
                <div>
                    <div className="absolute p-4 ml-3 cursor-pointer" onClick={handleBack}>
                        <img src={Back} alt="Back Button" className="size-5"/>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="flex justify-center w-75 h-25 border-1 rounded-lg bg-gray-200 p-2">
                            <img src={Logo} alt="Logo Image" className="size-20"/>
                        </div>
                    </div>
                </div>
                        
                <div className="flex justify-center p-2">
                    <div className="flex flex-col -ml-8">
                        <h1 className="flex justify-start font-sans font-bold tracking-wide text-black">Verification</h1>
                        <p className="text-black text-sm">
                            We have sent a 6-digit verification code on 
                        </p>
                        <p className="flex justify-start text-black text-sm"> 
                            your Email address.
                        </p>
                    </div>                
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="Email" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Verification Code</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-75 p-2 opacity-50">
                        <span className="text-black text-sm mr-11">Didn’t receive the code?</span>
                        <button className="italic text-green-600 font-bold text-sm ml-10 cursor-pointer">Resend</button>
                    </div>
                            
                </div>
                
                <div className="flex justify-center p-5 mt-42">
                    <div className="flex flex-col" onClick={handlePasswordComponent}>
                        <Button title={"Verify and Continue"} className={"px-20 py-2 rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default VerificationPage;