const Header = () => {
    return (
        <div className="bg-[url('./src/assets/images/header/header-banner.png')] md:py-72 py-16 bg-cover bg-center bg-no-repeat">
            <div className="grid lg:grid-cols-2">
                <div></div>
                <div className="text-white w-8/12 mx-auto lg:w-full">
                    <h2 className="text-6xl font-rancho mb-4">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="leading-8">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every <br className="lg:block hidden" /> moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <div className="font-rancho border border-[#E3B577] py-2 px-5 bg-[#E3B577] inline-block mt-8 text-[#242222] text-2xl hover:bg-transparent hover:border-white hover:text-white">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;