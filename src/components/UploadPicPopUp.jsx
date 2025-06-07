import React, { useState, useRef } from "react";
import Camera from "../assets/CameraIcon.svg";
import Photo from "../assets/photoIcon.svg";
import Close from "../assets/closeIcon.svg";

function UploadPicPopUp(){
    const [profileImage, setProfileImage] = useState(null);
  // Ref to access the hidden file input element
  const fileInputRef = useRef(null);

  // This function is triggered when the image container is clicked
  const handleImageClick = () => {
    // Programmatically click the hidden file input
    fileInputRef.current.click();
  };

  // This function handles the file selection from the dialog
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("hi there");
    if (file) {
      // Create a URL for the selected file to use as a preview
      console.log("there is something in file")
      setProfileImage(URL.createObjectURL(file));
      // **Important:** In a real application, you would now upload the 'file' object
      // to your server. For example:
      // const formData = new FormData();
      // formData.append('profilePicture', file);
      // fetch('/api/upload-profile-picture', { method: 'POST', body: formData });
    }
  };
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
                                {/* The hidden file input */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }} // Hide the default file input
                                    accept="image/png, image/jpeg, image/jpg" // Accept only image files
                                />
                            
                                {profileImage ? (
                                    <div>
                                        {console.log(profileImage)}
                                    </div>
                                ):(
                                <div className="flex justify-center p-2" onClick={handleImageClick}>
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
                                )}
                            </div>
                        </div>    
                    </div>
            </div>
        </div>
    )
}

export default UploadPicPopUp;