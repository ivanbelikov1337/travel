import logo from "../assets/Logo.png"
import twiter from "../assets/Vector.png"
import facebook from "../assets/Vector (1).png"
import instagram from "../assets/Group.png"
import ins from "../assets/Group (1).png"
import youtube from "../assets/Group (2).png"


const Footer = () => {
    return (
        <footer className="bg-gray-200 pt-[80px]  pl-[100px] pr-[100px] h-[475px] mt-[300px] ">
            <div className="border-b-gray-400 pb-[70px] border flex gap-[190px]">
                <div>
                    <img src={logo} alt="logo"/>
                    <p className="text-gray-400 text-[18px] pt-[25px] w-[350px]">
                        Plan and book your perfect trip with expert advice, travel tips destination information from us
                    </p>
                    <p className="text-gray-400 pt-[55px] text-[18px]">
                        ©2024 Thousand Sunny. All rights reserved
                    </p>
                </div>
                <div>
                    <p className="font-extrabold text-[19px]">Destinations</p>
                    <ul className="text-gray-400 pt-[35px] grid gap-2">
                        <li>Africa</li>
                        <li>Antarctica</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>America</li>
                    </ul>
                </div>
                <div>
                    <p className="font-extrabold text-[19px]">Shop</p>
                    <ul className="text-gray-400 pt-[35px] grid gap-2">
                        <li>Destination Guides</li>
                        <li>Pictorial & Gifts</li>
                        <li>Special Offers</li>
                        <li>Delivery Times</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div>
                    <p className="font-extrabold text-[19px]">Interests</p>
                    <ul className="text-gray-400 pt-[35px] grid gap-2">
                        <li>Adventure Travel</li>
                        <li>Art And Culture</li>
                        <li>Wildlife And Nature</li>
                        <li>Family Holidays</li>
                        <li>Food And Drink</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-[35px] justify-center pt-[30px] pb-[30px]">
                <img src={twiter} alt="twiter"/>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={ins} alt="in"/>
                <img src={youtube} alt="youtube"/>
            </div>
        </footer>
    );
};

export default Footer;