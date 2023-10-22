import Contact from "./Contact/Contact";
import Espresso from "./Espresso/Espresso";
import GetTouch from "./GetTouch/GetTouch";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
    return (
        <div>
            {/* footer top */}
            <div className="pt-28 pb-12 bg-[url('./src/assets/images/footer/footer-bg.jpg')] bg-no-repeat bg-cover">
                <div className="w-4/6 mx-auto grid lg:grid-cols-2 items-center">
                    <div>
                        <Espresso></Espresso>
                        <SocialMedia></SocialMedia>
                        <GetTouch></GetTouch>
                    </div>
                    <div>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
            {/* footer bottom */}
            <div className="bg-[url('./src/assets/images/footer/footer-bottom.png')] bg-no-repeat bg-100%">
                <p className="text-xl font-rancho text-white text-center py-3.5">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;