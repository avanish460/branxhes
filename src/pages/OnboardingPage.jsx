import React, { useState } from 'react';
import LegacyImage from '../assets/OnboardingImg1.png'
import RootImgage from '../assets/OnboardingImg2.png'
import FamilyImgae from '../assets/OnboardingImg3.png'
import Button from "../components/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import WelcomePage from './WelcomePage';

const DETAILS = [
    {
        id: 1,
        photo:LegacyImage,
        title: "Preserve Your Legacy",
        content: "Every family has a story. With our app, you can document and share your unique history, ensuring that future generations can connect with their roots. Capture cherished memories, important milestones, and the values that define your family. Let your legacy live on and inspire those who come after you."
    },
    {
        id: 2,
        photo:RootImgage,
        title: "Connect with Your Roots",
        content: "Dive deep into your family history and uncover the stories of your ancestors. Our app makes it easy to explore your lineage, helping you trace your origins and discover where you come from. Connect with your heritage, learn about your ancestors’ journeys, and enrich your understanding of who you are today. Your roots are waiting to be discovered!"
    },
    {
        id: 3,
        photo:FamilyImgae,
        title: "Create a Lasting Family Record",
        content: "Build a digital archive of your family’s history. Our app provides a secure space to store and organize cherished photographs, beloved stories, and memorable moments. Effortlessly access and update your family’s legacy, ensuring that every meaningful detail is preserved for future generations. Keep your family’s narrative alive and easily share it with loved ones."
    }
]

function OnboardingPage(){
    
    const [isComponentVisible, setIsComponentVisible] = useState(false);

    function handelComponent(){
        setIsComponentVisible(true);
    }

    return (
        <div>
            {!isComponentVisible ? (
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper w-80 h-115 rounded-lg"
                    >
                    {
                        DETAILS.map(detail => <SwiperSlide><div key={detail.id} className="flex justify-center p-1">
                        <div className="w-80 h-115 bg-white rounded-lg">
                            <div>
                                <img src={detail.photo} alt={detail.title} />
                            </div>
                            <div>
                                <h1 className="font-sans font-bold text-xl tracking-wide text-black">{detail.title}</h1>
                                <p className="text-black text-sm p-5">{detail.content}</p>
                            </div>
                        </div>
                        </div></SwiperSlide>)
                    
                    }
            
                    </Swiper>
                    <div className="flex justify-center pt-10" onClick={handelComponent}>
                        <Button title={"Skip"} className={"px-13 py-2 mr-5 rounded-full bg-emerald-100 text-black cursor-pointer opacity-40"}/>
                        <Button title={"Next"} className={"px-13 py-2 ml-5 rounded-full bg-green-900 cursor-pointer opacity-70"}/>
                    </div>
                </div>
                
            ):(
                <div>
                    <WelcomePage />
                </div>
            )}
            
        </div>
    )
}

export default OnboardingPage;
