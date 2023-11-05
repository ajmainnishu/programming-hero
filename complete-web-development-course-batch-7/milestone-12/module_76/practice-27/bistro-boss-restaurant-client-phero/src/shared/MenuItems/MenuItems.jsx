const MenuItems = ({ items }) => {
    const { name, recipe, image, price } = items;
    return (
        <div className="flex md:justify-between border-2 p-5 rounded-lg md:border-none md:p-0 md:rounded-none flex-col-reverse md:flex-row gap-x-1">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <img src={image} alt="menu item image" className="w-[118px] h-[104px]" style={{ borderRadius: '0 200px 200px 200px' }} />
                <div className="space-y-1.5">
                    <h6 className="text-[#151515] text-xl font-cinzel font-normal uppercase break-words">{name} ------------</h6>
                    <p className="text-[#737373] text-base leading-6 font-normal">{recipe}</p>
                </div>
            </div>
            <p className="text-[#BB8506] font-normal text-xl">${price}</p>
        </div>
    );
};

export default MenuItems;