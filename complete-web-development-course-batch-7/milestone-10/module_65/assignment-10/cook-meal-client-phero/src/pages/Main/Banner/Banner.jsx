import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen banner">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-2xl font-bold">Quality Cook & Meal Made To Order</h1>
                        <p className="mb-5 text-8xl"></p>
                        <p className="mb-5 text-5xl">"A recipe has no soul. You, as the cook, must bring soul to the recipe."</p>
                        <p>- Thomas Keller</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;