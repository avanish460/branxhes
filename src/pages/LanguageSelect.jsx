import React from "react";
import BranxhesImg from '../assets/Logo.svg';
import Button from "../components/Button";

function LanguageSelect(){
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <img src={BranxhesImg} alt="Branshex Logo Image" className="size-50 p-10"/>
                </div>
                
                <div>
                    <h1 className="text-xl font-bold tracking-wide text-black">Choose your Language</h1>
                    <p className="text-black p-1">Please Select Language Before Continue</p>
                </div>
                <div className="p-5">
                    <select 
                    name="languageSelect" 
                    id="language-select"
                    className="block w-80 px-4 py-2 pr-8 rounded-lg shadow-sm border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                       bg-white text-gray-700 text-lg cursor-pointer
                       transition duration-200 ease-in-out transform hover:scale-[1.01] hover:shadow-md
                       font-inter"
                    aria-label="Select Language"
                    >
                        {/* Language options */}
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">Russian</option>
                        <option value="de">Arabic</option>
                        <option value="zh">Mandarin Chinese</option> {/* Fixed: Separated Mandarin Chinese */}
                        
                    </select>
                     <div className="mt-40">
                        <Button title={"Next"} className={"px-35 py-3 rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageSelect;