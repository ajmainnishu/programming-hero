import emptyImg from '../../assets/images/empty/404.gif';

const EmptyPage = () => {
    return (
        <div>
            <img className='mx-auto py-20' src={emptyImg} alt="" />
        </div>
    );
};

export default EmptyPage;