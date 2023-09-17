const Staff = ({staff}) => {
    const {_id, name, img, profession} = staff;
    return (
        <div>
            <img src={img} alt="Teacher" />
            <h3 className="text-blue-900 text-2xl font-semibold pt-5">{name}</h3>
            <p className="text-gray-500">{profession}</p>
        </div>
    );
};

export default Staff;