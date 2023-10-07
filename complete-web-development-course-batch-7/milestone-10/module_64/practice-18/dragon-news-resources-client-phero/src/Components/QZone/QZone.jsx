import qzone1 from '../../assets/images/qZone/qZone1.png'
import qzone2 from '../../assets/images/qZone/qZone2.png'
import qzone3 from '../../assets/images/qZone/qZone3.png'
import Image from 'react-bootstrap/Image';

const QZone = () => {
    return (
        <div className='bg-light px-2 py-3 my-4'>
            <h5>Q-Zone</h5>
            <div className='pt-3'>
                <Image className='w-100' src={qzone1} />
                <Image className='w-100' src={qzone2} />
                <Image className='w-100' src={qzone3} />
            </div>
        </div>
    );
};

export default QZone;