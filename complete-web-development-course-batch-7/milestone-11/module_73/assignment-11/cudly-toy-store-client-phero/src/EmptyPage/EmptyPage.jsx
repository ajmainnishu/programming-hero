import emptyPhoto from '../assets/empty_page/empty.png';

const EmptyPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img src={emptyPhoto} className='m' alt="404 image" />
        </div>
    );
};

export default EmptyPage;