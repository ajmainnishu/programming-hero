const Class = ({popularClass}) => {
    const {_id, img, body, title, position, duration, group} = popularClass;
    return (
        <div className="shadow-lg">
            <img src={img} alt="Class" />
            <div className="py-10 px-7">
                <span className="bg-green-500 px-2 py-1 text-white">{group}</span>
                <h3 className="text-2xl font-bold pt-4 pb-2">{title}</h3>
                <p className="text-gray-500">{body}</p>
                <div className="flex justify-between pt-4">
                    <p className="text-red-600 font-bold text-lg">{position}</p>
                    <p><span className="text-gray-500 text-base">Duration:</span> <span className="text-green-500 font-semibold text-lg">{duration}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Class;