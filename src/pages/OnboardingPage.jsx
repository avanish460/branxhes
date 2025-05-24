import React from "react";
import LegacyImage from '../assets/OnboardingImg1.png'
import Button from "../components/Button";

function OnboardingPage(){
    return (
        <div>
            <div className="flex justify-center p-1">
                <div className="w-80 h-110 bg-white rounded-lg">
                    <div>
                        <img src={LegacyImage} alt="Legacy image" />
                    </div>
                    <div>
                        <h1 className="font-sans font-bold text-xl tracking-wide text-black">Preserve Your Legacy</h1>
                        <p className="text-black text-sm p-5">
                            Every family has a story. With our app, you 
                            can document and share your unique history, 
                            ensuring that future generations can connect 
                            with their roots. Capture cherished memories, 
                            important milestones, and the values that 
                            define your family. Let your legacy live on and 
                            inspire those who come after you.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-10">
                <Button title={"Skip"} className={"px-13 py-2 mr-5 rounded-full bg-emerald-100 text-black cursor-pointer opacity-40"}/>
                <Button title={"Next"} className={"px-13 py-2 ml-5 rounded-full bg-green-900 cursor-pointer opacity-70"}/>
            </div>
        </div>
    )
}

export default OnboardingPage;