import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/MenuItem/Menuitem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle heading="From Our Menu" subHeading="Popular Items"></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;