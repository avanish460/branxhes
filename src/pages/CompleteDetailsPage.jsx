import React, { useState } from "react";
import Back from "../assets/backButton.svg";
import Button from "../components/Button";

function CompleteDetailsPage(){
    const [back, setBack] = useState(false);

    function handleBack(){
        setBack(true);
    }

    return (
        <div>
            <div>
                <div>
                    <div className="absolute p-5 cursor-pointer" onClick={handleBack}>
                        <img src={Back} alt="Back Button" className="size-4"/>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="flex justify-center font-bold w-75 h-10 border-1 rounded-lg bg-gray-200 p-2">
                            <span className="text-black text-sm">Basic Details</span>   
                        </div>
                        <div className="flex flex-end p-2 font-bold -ml-10">
                                <h2 className="text-green-800 text-sm">1/3</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <label htmlFor="DOB" className="flex justify-start text-black text-sm font-semibold tracking-wide p-1">DOB</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                        <div className="flex flex-start pt-5 pb-3">
                            <input type="radio" className="size-5 cursor-pointer"/>
                            <label htmlFor="Deceased" className="font-semibold text-sm text-black pl-2"> Deseased </label>
                        </div>
                        
                        <label htmlFor="dateOfDeath" className="flex justify-start text-black text-sm font-semibold tracking-wide p-1">Date of death</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                        <label htmlFor="birthHospital" className="flex justify-start text-black text-sm font-semibold tracking-wide p-1">Birth Hospital</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                        <label htmlFor="countryYouBorn" className="flex justify-start text-black text-sm font-semibold tracking-wide p-1">country you born</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                        <label htmlFor="cityYouBorn" className="flex justify-start text-black text-sm font-semibold tracking-wide p-1">city you born</label>
                        <input type="text" className="bg-white rounded-lg shadow-xl text-black flex justify-start w-75 px-2 py-1"/>
                        
                        <label htmlFor="education" className="flex justify-start text-black text-sm font-semibold tracking-wide p-1">Education</label>
                        <div className="bg-white border rounded-xl shadow-xl p-5">
                            <label htmlFor="interestHobbies" className="flex justify-start text-black text-sm tracking-wide p-1">Type Interest / Hobbies...</label>
                            <input type="text" className="bg-[#d8d8d8] rounded-lg shadow-xl text-black flex justify-start w-65 px-2 py-1"/>
                            <div className="flex justify-between">
                                <div>
                                    <label htmlFor="from" className="flex justify-start text-black text-sm tracking-wide p-1">From</label>
                                    <input type="text" className="bg-[#d8d8d8] rounded-lg shadow-xl text-black flex justify-start w-30 px-2 py-1"/>
                                </div>
                                <div>
                                    <label htmlFor="to" className="flex justify-start text-black text-sm tracking-wide p-1">To</label>
                                    <input type="text" className="bg-[#d8d8d8] rounded-lg shadow-xl text-black flex justify-start w-30 px-2 py-1"/>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Button title={"Add another"} className={"p-2 text-black text-sm px-5 rounded-full bg-[#D5E1DC] cursor-pointer"}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteDetailsPage;