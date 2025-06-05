import React, { useState }  from "react";
import LoginPage from "../pages/LoginPage";
import Button from "./Button";
import '../App.css'

function ConfirmPasswordPopUp(){
    const [isLoginPageVisible, setIsLoginPageVisible] = useState(false);

    function handleLoginPage(){
        setIsLoginPageVisible(true);
    }

    return (
        <div>
            {isLoginPageVisible ? (
                <div>
                    <LoginPage />
                </div>
            ):(   
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out animate-fadeIn">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-70 transform transition-all duration-300 ease-in-out animate-scaleUp">
                        <div className="text-center">
                            {/* Icon (Optional - e.g., a checkmark) */}
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500 mb-6">
                                <svg
                                className="h-10 w-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>

                            <h3 className="text-xl font-semibold leading-6 text-black mb-3">
                                Password Changed Successfully!
                            </h3>
                            <p className="text-black text-sm mb-6">
                                You can use your New Password to login to your account.
                            </p>
                        </div>
                        <div onClick={handleLoginPage}>
                            <Button
                            title={"Login"}
                            className={"px-20 py-2  rounded-full bg-green-900 cursor-pointer opacity-70"}
                            />
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default ConfirmPasswordPopUp;