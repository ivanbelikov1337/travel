import img2 from "../assets/Thousand-02 1.png"
import img3 from "../assets/Thousand-03.png"
import Ampata from "../assets/Raja ampat.png"
import Fan from "../assets/Fanjingshan.png"
import Vevey from "../assets/Vevey.png"
import Skadar from "../assets/Skadar.png"
import yoga from "../assets/image 12.png"
import food from "../assets/image 13.png"
import pyramid from "../assets/image 14.png"
import snowboarding from "../assets/snowboarding.jpg"
import serf from "../assets/image 15.png"
import scale from "../assets/scale.jpg"
import human from "../assets/photo.png"


import {PiStarFill} from "react-icons/pi";

import img from "../assets/thousand-01 1.png";
import SelectOptions from "../components/SelectOptions.tsx";


const Home = () => {


    return (
        <>

            <section className="mt-[81px] flex ">
                <div>
                    <h1 className="w-[356px] h-[160px] text-[64px] leading-[80px] font-semibold">
                        Explore and
                        Travel
                    </h1>
                    <p className="pt-[75px] text-[22px] font-medium">Holiday finder</p>
                    <SelectOptions/>
                </div>
                <img className="w-[650[x] h-[650px] ml-[147px]" src={img} alt="baner"/>
            </section>
            <section className="mt-[220px] flex">
                <img className="w-[650[x] h-[550px]" src={img2} alt="baner2"/>
                <div className="ml-[100px] pt-[96px]">
                    <h2 className="text-[36px] leading-[50px] font-semibold w-[480px]">A new way to explore the
                        world</h2>
                    <p className="pt-[20px] text-gray-400 w-[420px]">For decades travellers have reached for Lonely
                        Planet books when
                        looking to plan and execute their perfect
                        trip, but now, they can also let Lonely Planet Experiences lead the way
                    </p>
                    <button className="w-[180px] mt-[50px] text-white rounded-[8px] h-[60px] bg-orange">
                        Learn more
                    </button>
                </div>
            </section>
            <section className="mt-[220px]">
                <div className="flex justify-between ">
                    <h3 className="text-[36px] font">Featured destinations</h3>
                    <p className="text-17px text-orange">View all</p>
                </div>
                <div className="pt-[56px] flex gap-[8px]">
                    <img src={Ampata} alt="Ampata"/>
                    <img src={Fan} alt="Fan"/>
                    <img src={Vevey} alt="Vevey"/>
                    <img src={Skadar} alt="Skadar"/>
                    <img src={Fan} alt="Fan"/>
                </div>
            </section>
            <section className="mt-[220px] flex ">
                <div className="pt-[150px]">
                    <h1 className="w-[440px]  text-[36px] leading-[50px] font-semibold">
                        Guides by Thousand
                        Sunny
                    </h1>
                    <p className="pt-[20px] text-gray-400 w-[440px] leading-[30px] text-[17px] font-medium">Packed with
                        tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the
                        ultimate resource before and during a trip.
                    </p>

                </div>
                <img className="w-[60[x] h-[550px] ml-[227px]" src={img3} alt="baner"/>
            </section>
            <section className="mt-[220px] flex ">
                <img className="w-[60[x] h-[550px]" src={human} alt="baner"/>
                <div className="pt-[150px] ml-[227px]">
                    <h1 className="  text-[36px] leading-[50px] font-semibold">
                        Testimonials
                    </h1>
                    <div className="flex gap-[15px] pt-[20px]">
                        <PiStarFill size={25} color="orange"/>
                        <PiStarFill size={25} color="orange"/>
                        <PiStarFill size={25} color="orange"/>
                        <PiStarFill size={25} color="orange"/>
                        <PiStarFill size={25} color="orange"/>
                    </div>
                    <p className="pt-[20px] text-gray-400 w-[440px]  leading-[30px] text-[17px] font-medium">
                        “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu,
                        facilisis quis purus. Morbi blandit sit amet turpis nec”
                    </p>
                    <p className="pt-[5px]">Edward Newgate</p>
                </div>
            </section>
            <section className="mt-[220px]">
                <div className="flex justify-between ">
                    <h3 className="text-[36px] font-bold">Trending stories</h3>
                    <p className="text-17px text-orange">View all</p>
                </div>
                <div className="pt-[56px] flex gap-[8px]">
                    <div className="w-[220px]">
                        <img className="h-[220px] w-[220px]" src={yoga} alt="yoga"/>
                        <h3 className="pt-[10px] font-bold">The many benefits of taking a healing holiday </h3>
                        <p className="text-gray-400 pt-[10px] text-[13px] leading-[25px]">
                            ‘Helaing holidays’ are on the rise tohelp maximise your health and happines...
                        </p>
                    </div>
                    <div className="w-[220px]">
                        <img className="h-[220px] w-[220px]" src={food} alt="food"/>
                        <h3 className="pt-[10px] font-bold">The best Kyoto restaurant to try Japanese food</h3>
                        <p className="text-gray-400 pt-[10px] text-[13px] leading-[25px]">
                            From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...
                        </p>
                    </div>
                    <div className="w-[220px]">
                        <img className="h-[220px] w-[220px]" src={pyramid} alt="pyramid"/>
                        <h3 className="pt-[10px] font-bold">Skip Chichen Itza and head to this remote Yucatan</h3>
                        <p className="text-gray-400 pt-[10px] text-[13px] leading-[25px]">
                            From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit...
                        </p>
                    </div>
                    <div className="w-[220px]">
                        <img className="h-[220px] w-[220px]" src={serf} alt="serf"/>
                        <h3 className="pt-[10px] font-bold">Surf’s up at these beginner spots around the world</h3>
                        <p className="text-gray-400 pt-[10px] text-[13px] leading-[25px]">
                            It’s remote and challenging to get, but braving the jungle and exploring these ruins without
                            the...
                        </p>
                    </div>
                    <div className="w-[220px]">
                        <img className="h-[220px] w-[220px]" src={scale} alt="scale"/>
                        <h3 className="pt-[10px] font-bold">Rock climbing is a climbing sports discipline that
                            involves</h3>
                        <p className="text-gray-400 pt-[10px] text-[13px] leading-[25px]">
                            If learning to surf has in on your to do list for a while, the good news is: it’s never too
                            late...
                        </p>
                    </div>
                    <div className="w-[220px]">
                        <img className="h-[220px] w-[220px]" src={snowboarding} alt="snowboarding"/>
                        <h3 className="pt-[10px] font-bold">Snowboarding is a winter sport that involves
                            descending </h3>
                        <p className="text-gray-400 pt-[10px] text-[13px] leading-[25px]">
                            It’s remote and challenging to get, but braving the jungle and exploring these ruins without
                            the...
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;