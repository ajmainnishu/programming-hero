import sponsor1 from '../../../assets/sponser/sponser-1.png'
import sponsor2 from '../../../assets/sponser/sponser-2.png'
import sponsor3 from '../../../assets/sponser/sponser-3.png'
import sponsor4 from '../../../assets/sponser/sponser-4.png'
import sponsor5 from '../../../assets/sponser/sponser-5.png'
import sponsor6 from '../../../assets/sponser/sponser-6.png'

const Sponsor = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3'>
            <img src={sponsor1} alt="sponsor image" />
            <img src={sponsor2} alt="sponsor image" />
            <img src={sponsor3} alt="sponsor image" />
            <img src={sponsor4} alt="sponsor image" />
            <img src={sponsor5} alt="sponsor image" />
            <img src={sponsor6} alt="sponsor image" />
        </div>
    );
};

export default Sponsor;