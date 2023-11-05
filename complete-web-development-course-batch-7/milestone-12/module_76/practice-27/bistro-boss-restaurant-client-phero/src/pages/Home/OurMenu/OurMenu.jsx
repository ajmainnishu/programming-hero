import ourMenuImg from '../../../assets/images/home/ourMenu/ourMenu.jpg';
import moment from 'moment';
import './OurMenu.css'

const OurMenu = () => {
    return (
        <div className="ourmenu-bg py-20 lg:py-32">
            <div className="w-10/12 lg:w-9/12 mx-auto space-y-12">
                {/* section title */}
                <div className="space-y-5 text-center">
                    <p className="text-[#D99904] text-xl font-normal italic">---Check it out---</p>
                    <h2 className="text-white text-[40px] font-normal border-y-2 w-11/12 md:w-[424px] py-5 mx-auto">FROM OUR MENU</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                    {/* left side image */}
                    <div>
                        <img src={ourMenuImg} alt="our menu image" />
                    </div>
                    {/* right side info */}
                    <div className="text-white">
                        <p className="text-2xl font-normal">{moment().format('MMMM D, YYYY')}</p>
                        <p className="text-2xl font-normal">WHERE CAN I GET SOME?</p>
                        <p className="text-xl font-normal leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn bg-transparent border-0 text-white text-xl font-semibold border-b-2 hover:text-black mt-6">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;