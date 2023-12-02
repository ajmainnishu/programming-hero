const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="space-y-5 text-center">
            <p className="text-[#D99904] text-xl font-normal italic">---{subTitle}---</p>
            <h2 className="text-[#151515] text-[40px] font-normal border-y-2 w-11/12 md:w-[424px] py-5 mx-auto">{title}</h2>
        </div>
    );
};

export default SectionTitle;