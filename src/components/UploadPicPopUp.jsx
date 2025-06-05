import React from "react";
import Camera from "../assets/CameraIcon.svg";
import Photo from "../assets/photoIcon.svg";
import Close from "../assets/closeIcon.svg";

function UploadPicPopUp(){
    return(
        <div>
            <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out animate-fadeIn">
                    <div className="bg-white rounded-xl shadow-2xl w-70 transform transition-all duration-300 ease-in-out animate-scaleUp">
                        <div className="text-center">
                            <div className="p-2"> 
                                <div className="flex justify-center">
                                    <h3 className="text-black text-center text-sm font-bold">Upload Picture</h3>
                                </div>    
                                <div className="flex justify-end p-1 -mt-5">
                                    <img src={Close} alt="Cross Icon" className="size-4"/>
                                </div>                          
                            </div>
                            <div className="flex justify-center p-2">
                                <div className="flex flex-col cursor-pointer">
                                    <div className="w-12 h-12 border-2 border-dashed border-[#5F8B7A] rounded-lg flex justify-center mr-10">
                                        <img src={Camera} alt="Camera Icon" className="size-5 mt-3"/>
                                    </div>
                                    <span className="text-black text-sm text-center mr-10">Camera</span>
                                </div>
                                
                                <div className="flex flex-col cursor-pointer">
                                    <div className="w-12 h-12 border-2 border-dashed border-[#5F8B7A] rounded-lg flex justify-center ml-5">  
                                        <img src={Photo} alt="Photo Icon" className="size-5 mt-3"/>
                                    </div>
                                    <span className="text-black text-sm text-center ml-5">Photo</span>
                                </div>
                            </div>
                        </div>    
                    </div>
            </div>
        </div>
    )
}

export default UploadPicPopUp;