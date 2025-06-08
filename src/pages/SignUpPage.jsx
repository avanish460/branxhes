import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import Button from "../components/Button";
import LoginPage from "./LoginPage";
import { FaUpload } from "react-icons/fa";
import UploadPicPopUp from "../components/UploadPicPopUp";
import VerificationPage from "./VerificationPage";

function SignUpPage(){
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const FromSignUp = true;

    function handleComponent(){
        setIsComponentVisible(true);
    }
    
    function handleSignUpComponent(){
        setShowSignUp(true);
    }

    function handlePopUp(){
        setShowPopUp(true);
    }

    function handleClosePopUp(){
        setShowPopUp(false);
    }
    return (
        <div>
            {isComponentVisible ? (
                <div>
                    <LoginPage />
                </div>
            ): showSignUp ? (
                <div>
                    <VerificationPage address={FromSignUp}/>
                </div>
            ): (
                <div>
                    <div className="flex justify-center p-2">
                        <div className="flex justify-center w-75 h-25 border-1 rounded-lg bg-gray-200 p-2">
                            <img src={Logo} alt="Logo Image" className="size-20"/>
                        </div>
                    </div>
                            
                    <div className="flex justify-center p-2">
                        <div className="flex flex-col -ml-7">
                            <h1 className="flex justify-start font-sans font-bold tracking-wide text-black">Welcome!</h1>
                            <p className="text-black text-sm">
                                We’ll keep this private, Like everything you
                            </p>
                            <p className="flex justify-start text-black text-sm"> 
                                share with us.
                            </p>
                        </div>                
                    </div>
                    <div className="flex flex-col cursor-pointer">
                        <div className="flex justify-center p-2">
                            <div className="w-15 h-15 border-2 border-dashed border-[#5F8B7A] rounded-lg flex justify-center" onClick={handlePopUp}>
                                <FaUpload className="text-[#5F8B7A] size-5 mt-4"/>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-black text-sm">Add Profile Picture</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="Name" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Name</label>
                            <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                            <label htmlFor="Username" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Username</label>
                            <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                            <label htmlFor="Email" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Email</label>
                            <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                            <label htmlFor="Phonenumber" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Phone number</label>
                            <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                            <label htmlFor="Password" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Password</label>
                            <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                            <label htmlFor="Confirm Password" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Confirm Password</label>
                            <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                        </div>
                    </div>

                    <div className="flex justify-center p-2">
                        <div className="flex flex-col">
                            <p className="text-black text-sm">
                                Password must be at least 8 character long and
                            </p>
                            <p className="flex justify-start text-black text-sm"> 
                                include 1 capital letter and 1 symbol.
                            </p>
                        </div>                
                    </div>

                    <div>
                        <label className="text-black">
                            <input type="checkbox" /> I agree to  the Terms and Privacy Policy
                        </label>
                    </div>
                    
                    <div className="flex justify-center p-5">
                        <div className="flex flex-col" onClick={handleSignUpComponent}>
                            <Button title={"Sign Up"} className={"px-30 py-2  rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="bg-emerald-100 w-75 p-2 opacity-50">
                            <span className="text-black text-sm mr-10">Already Have an account?</span>
                            <button onClick={handleComponent} className="italic text-green-600 font-bold text-sm ml-5 cursor-pointer">Sign In</button>
                        </div>
                        
                    </div>
                </div>
                )}

            {showPopUp && 
                <div onClick={handleClosePopUp}>
                    <UploadPicPopUp />
                </div>
            }
        </div>
    )
}

export default SignUpPage;