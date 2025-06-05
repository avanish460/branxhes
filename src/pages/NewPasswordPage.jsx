import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import Button from "../components/Button";
import Back from "../assets/backButton.svg";
import ConfirmPasswordPopUp from "../components/confirmPasswordPopUP";

function NewPasswordPage(){
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);
    
    function handleLoginPage(){
        setIsLoginPageVisible(true);
    }
    
    function handlePopUp(){
        setIsPopUpVisible(true);
    }
    
    return (
        <div>{isLoginPageVisible ? (
            <div></div>
        ):(
            <div>
                <div>
                    <div className="absolute p-4 ml-2 cursor-pointer">
                        <img src={Back} alt="Back Button" className="size-5"/>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="flex justify-center w-75 h-25 border-1 rounded-lg bg-gray-200 p-2">
                            <img src={Logo} alt="Logo Image" className="size-20"/>
                        </div>
                    </div>
                </div>
                            
                <div className="flex justify-center p-2">
                    <div className="flex flex-col -ml-10">
                        <h1 className="flex justify-start font-sans font-bold tracking-wide text-black">New Password</h1>
                        <p className="text-black text-sm">
                            Create a new password to login into your
                        </p>
                        <p className="flex justify-start text-black text-sm"> 
                            account.
                        </p>
                    </div>                
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="Password" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">Password</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start px-2 w-75 py-1"/>
                        <label htmlFor="NewPassword" className="flex justify-start text-black text-sm font-bold tracking-wide p-1">New Password</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start px-2 w-75 py-1"/>
                    </div>
                </div>
                    
                <div className="flex justify-center p-5 mt-38">
                    <div className="flex flex-col" onClick={handlePopUp}>
                        <Button title={"Confirm"} className={"px-30 py-2  rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                    </div>
                </div>
            </div>
            )}

            {isPopUpVisible &&
                <div onClick={handleLoginPage}>
                    <ConfirmPasswordPopUp />
                </div>
            }
        </div>
    )
}

export default NewPasswordPage;