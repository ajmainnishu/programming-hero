import banner from '../../assets/images/banner/doctor_banner.png'

const Banner = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen md:w-9/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Modern And Latest Technology Treatment</h1>
                        <p className="py-6">Discover The Best Doctors, Clinic, And Hospital The City Nearest You</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;